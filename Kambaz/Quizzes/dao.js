import QuizModel from "./model.js";

export function findQuizzesForCourse(courseId) {
  return QuizModel.find({ course: courseId }).sort({ createdAt: -1 });
}

export function findQuizById(quizId) {
  return QuizModel.findById(quizId);
}

export function createQuiz(quiz) {
  return QuizModel.create(quiz);
}

export function updateQuiz(quizId, quiz) {
  return QuizModel.findByIdAndUpdate(quizId, quiz, { new: true });
}

export function deleteQuiz(quizId) {
  return QuizModel.findByIdAndDelete(quizId);
}

export async function togglePublishQuiz(quizId) {
  const quiz = await QuizModel.findById(quizId);
  if (!quiz) return null;
  quiz.published = !quiz.published;
  return quiz.save();
}