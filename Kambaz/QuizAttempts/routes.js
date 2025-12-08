import * as attemptDao from "./dao.js";
import * as quizDao from "../Quizzes/dao.js";

export default function QuizAttemptRoutes(app) {
  
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
          const studentAnswer = question.caseSensitive 
            ? answer.answer 
            : answer.answer.toLowerCase();
          isCorrect = question.possibleAnswers.some(pa => {
            const possibleAnswer = question.caseSensitive ? pa : pa.toLowerCase();
            return possibleAnswer === studentAnswer;
          });
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
      res.status(500).json({ message: error.message });
    }
  });
}