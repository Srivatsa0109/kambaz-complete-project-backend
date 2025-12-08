import * as quizDao from "./dao.js";
import * as attemptDao from "../QuizAttempts/dao.js";

export default function QuizRoutes(app) {
  
  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    try {
      const { courseId } = req.params;
      const currentUser = req.session?.currentUser;
      
      console.log("Fetching quizzes for course:", courseId);
      const quizzes = await quizDao.findQuizzesForCourse(courseId);
      
      let filteredQuizzes = quizzes;
      if (currentUser?.role === 'STUDENT') {
        filteredQuizzes = quizzes.filter(quiz => quiz.published);
      }
      
      console.log("Found quizzes:", filteredQuizzes.length);
      res.json(filteredQuizzes);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/courses/quizzes/:quizId", async (req, res) => {
    try {
      const quiz = await quizDao.findQuizById(req.params.quizId);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      
      const currentUser = req.session?.currentUser;
      if (currentUser?.role === 'STUDENT' && !quiz.published) {
        return res.status(403).json({ message: 'Quiz not available' });
      }
      
      res.json(quiz);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/courses/:courseId/quizzes", async (req, res) => {
    try {
      const currentUser = req.session?.currentUser;
      if (!currentUser) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
      if (currentUser.role !== 'FACULTY') {
        return res.status(403).json({ message: 'Only faculty can create quizzes' });
      }
      
      const quiz = await quizDao.createQuiz({
        ...req.body,
        course: req.params.courseId
      });
      res.status(201).json(quiz);
    } catch (error) {
      console.error("Error creating quiz:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.put("/api/courses/quizzes/:quizId", async (req, res) => {
    try {
      const currentUser = req.session?.currentUser;
      if (!currentUser) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
      if (currentUser.role !== 'FACULTY') {
        return res.status(403).json({ message: 'Only faculty can edit quizzes' });
      }
      
      const totalPoints = req.body.questions?.reduce((sum, q) => sum + (q.points || 0), 0) || 0;
      const quizData = {
        ...req.body,
        points: totalPoints
      };
      
      const quiz = await quizDao.updateQuiz(req.params.quizId, quizData);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      res.json(quiz);
    } catch (error) {
      console.error("Error updating quiz:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.delete("/api/courses/quizzes/:quizId", async (req, res) => {
    try {
      const currentUser = req.session?.currentUser;
      if (!currentUser) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
      if (currentUser.role !== 'FACULTY') {
        return res.status(403).json({ message: 'Only faculty can delete quizzes' });
      }
      
      const quiz = await quizDao.deleteQuiz(req.params.quizId);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      
      await attemptDao.deleteAttemptsByQuiz(req.params.quizId);
      
      res.json({ message: 'Quiz deleted successfully' });
    } catch (error) {
      console.error("Error deleting quiz:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.patch("/api/courses/quizzes/:quizId/publish", async (req, res) => {
    try {
      const currentUser = req.session?.currentUser;
      if (!currentUser) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
      if (currentUser.role !== 'FACULTY') {
        return res.status(403).json({ message: 'Only faculty can publish quizzes' });
      }
      
      const quiz = await quizDao.togglePublishQuiz(req.params.quizId);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      res.json(quiz);
    } catch (error) {
      console.error("Error toggling publish:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/courses/quizzes/:quizId/attempts", async (req, res) => {
    try {
      const currentUser = req.session?.currentUser;
      if (!currentUser) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
      
      const attempts = await attemptDao.findAttemptsForStudent(
        req.params.quizId,
        currentUser._id
      );
      res.json(attempts);
    } catch (error) {
      console.error("Error fetching attempts:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/courses/quizzes/:quizId/attempts", async (req, res) => {
    try {
      const currentUser = req.session?.currentUser;
      if (!currentUser) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
      
      if (currentUser.role !== 'STUDENT') {
        return res.status(403).json({ message: 'Only students can submit attempts' });
      }
      
      const quiz = await quizDao.findQuizById(req.params.quizId);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      
      if (!quiz.published) {
        return res.status(403).json({ message: 'Quiz is not available' });
      }
      
      const existingAttempts = await attemptDao.countAttempts(
        req.params.quizId,
        currentUser._id
      );
      
      if (existingAttempts >= quiz.howManyAttempts) {
        return res.status(403).json({ message: 'Maximum attempts reached' });
      }
      
      const { answers } = req.body;
      let score = 0;
      const gradedAnswers = [];
      
      for (const answer of answers) {
        const question = quiz.questions.id(answer.questionId);
        if (!question) continue;
        
        let isCorrect = false;
        let pointsEarned = 0;
        
        if (question.type === 'multiple-choice') {
          const correctChoice = question.choices.find(c => c.isCorrect);
          isCorrect = correctChoice && correctChoice._id.toString() === answer.answer;
        } else if (question.type === 'true-false') {
          isCorrect = question.correctAnswer === answer.answer;
        } else if (question.type === 'fill-in-blank') {
          const studentAnswers = Array.isArray(answer.answer) ? answer.answer : [answer.answer];
          const possibleAnswers = question.possibleAnswers || [];
          
          isCorrect = studentAnswers.every((studentAns, index) => {
            if (!studentAns || !possibleAnswers[index]) return false;
            
            const normalizedStudent = question.caseSensitive 
              ? studentAns 
              : studentAns.toLowerCase().trim();
            const normalizedCorrect = question.caseSensitive 
              ? possibleAnswers[index] 
              : possibleAnswers[index].toLowerCase().trim();
            
            return normalizedStudent === normalizedCorrect;
          }) && studentAnswers.length === possibleAnswers.length;
        }
        
        if (isCorrect) {
          pointsEarned = question.points;
          score += pointsEarned;
        }
        
        gradedAnswers.push({
          questionId: answer.questionId,
          answer: answer.answer,
          isCorrect,
          pointsEarned
        });
      }
      
      const attempt = await attemptDao.createAttempt({
        quiz: req.params.quizId,
        student: currentUser._id,
        attemptNumber: existingAttempts + 1,
        answers: gradedAnswers,
        score,
        totalPoints: quiz.points,
        submitted: true,
        submittedAt: new Date()
      });
      
      res.status(201).json(attempt);
    } catch (error) {
      console.error("Error submitting attempt:", error);
      res.status(500).json({ message: error.message });
    }
  });
}