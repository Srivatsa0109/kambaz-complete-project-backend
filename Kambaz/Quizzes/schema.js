import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false }
}, { _id: true });

const questionSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  type: { 
    type: String, 
    enum: ['multiple-choice', 'true-false', 'fill-in-blank'],
    default: 'multiple-choice'
  },
  points: { type: Number, default: 0 },
  question: { type: String, default: '' },
  choices: [choiceSchema],
  correctAnswer: { type: Boolean },
  possibleAnswers: [{ type: String }],
  caseSensitive: { type: Boolean, default: false }
}, { _id: true });

const quizSchema = new mongoose.Schema({
  title: { type: String, default: 'Untitled Quiz' },
  description: { type: String, default: '' },
  course: { 
    type: String, 
    required: true 
  },
  published: { type: Boolean, default: false },
  
  quizType: { 
    type: String, 
    enum: ['graded-quiz', 'practice-quiz', 'graded-survey', 'ungraded-survey'],
    default: 'graded-quiz'
  },
  points: { type: Number, default: 0 },
  assignmentGroup: { 
    type: String, 
    enum: ['quizzes', 'exams', 'assignments', 'project'],
    default: 'quizzes'
  },
  shuffleAnswers: { type: Boolean, default: true },
  timeLimit: { type: Number, default: 20 },
  multipleAttempts: { type: Boolean, default: false },
  howManyAttempts: { type: Number, default: 1 },
  showCorrectAnswers: { type: String, default: 'immediately' },
  accessCode: { type: String, default: '' },
  oneQuestionAtTime: { type: Boolean, default: true },
  webcamRequired: { type: Boolean, default: false },
  lockQuestionsAfterAnswering: { type: Boolean, default: false },
  
  dueDate: { type: Date },
  availableDate: { type: Date },
  untilDate: { type: Date },
  
  questions: [questionSchema]
}, {
  collection: 'quizzes',
  timestamps: true
});

export default quizSchema;