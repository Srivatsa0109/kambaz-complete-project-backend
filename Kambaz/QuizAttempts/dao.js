import QuizAttemptModel from "./model.js";

export function findAttemptsForStudent(quizId, studentId) {
  return QuizAttemptModel.find({ quiz: quizId, student: studentId })
    .sort({ attemptNumber: -1 });
}

export function countAttempts(quizId, studentId) {
  return QuizAttemptModel.countDocuments({ 
    quiz: quizId, 
    student: studentId,
    submitted: true 
  });
}

export function createAttempt(attempt) {
  return QuizAttemptModel.create(attempt);
}

export function deleteAttemptsByQuiz(quizId) {
  return QuizAttemptModel.deleteMany({ quiz: quizId });
}