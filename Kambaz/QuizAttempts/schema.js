import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true 
  },
  answer: mongoose.Schema.Types.Mixed,
  isCorrect: { type: Boolean },
  pointsEarned: { type: Number, default: 0 }
}, { _id: false });

const quizAttemptSchema = new mongoose.Schema({
  quiz: { 
    type: String, 
    required: true 
  },
  student: { 
    type: String, 
    required: true 
  },
  attemptNumber: { type: Number, required: true },
  answers: [answerSchema],
  score: { type: Number, default: 0 },
  totalPoints: { type: Number, required: true },
  submitted: { type: Boolean, default: false },
  submittedAt: { type: Date }
}, {
  collection: 'quizAttempts',
  timestamps: true
});

quizAttemptSchema.index({ quiz: 1, student: 1, attemptNumber: 1 }, { unique: true });

export default quizAttemptSchema;