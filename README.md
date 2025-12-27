# Kambaz - Backend

RESTful API backend for the Kambaz Learning Management System. Built with Node.js, Express, and MongoDB, this server provides a comprehensive API for authentication, course management, assignments, quizzes, enrollments, modules, and all data operations for the Kambaz platform.

**🌐 Live API**: [https://kambaz-complete-project-backend.onrender.com](https://kambaz-complete-project-backend.onrender.com)

**📱 Frontend Application**: [https://kambaz-complete-project-frontend.vercel.app](https://kambaz-complete-project-frontend.vercel.app)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)

## 🎯 Overview

This backend application provides a robust, scalable RESTful API for the Kambaz Learning Management System. It handles all server-side operations including user authentication, database interactions, business logic for courses, assignments, quizzes, enrollments, and module management. The API follows RESTful principles and implements proper error handling, validation, and security measures.

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based authentication system
- Secure password hashing with bcrypt
- Role-based access control (Student, Instructor, Admin)
- Session management
- Password reset functionality

### 📚 Course Management
- CRUD operations for courses
- Course publishing and unpublishing
- Course enrollment management
- Course member management
- Course statistics and analytics

### 📝 Assignment System
- Create, update, and delete assignments
- Assignment submission handling
- File upload support for submissions
- Assignment grading
- Due date management
- Late submission tracking

### 🎯 Quiz Management
- Quiz creation and editing
- Multiple question types support
- Quiz attempts tracking
- Automatic and manual grading
- Quiz statistics and analytics
- Time limit enforcement

### 📖 Module & Lesson Organization
- Hierarchical module structure
- Lesson management within modules
- Module ordering and prerequisites
- Content publishing controls
- Progress tracking

### 👥 User Management
- User profile management
- User directory and search
- Role assignment
- User enrollment tracking

### 📊 Enrollments
- Course enrollment and unenrollment
- Enrollment status tracking
- Student roster management
- Enrollment analytics

## 🛠️ Tech Stack

### Core Technologies
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Language**: JavaScript (ES6+)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt

### Additional Libraries
- **CORS**: Cross-Origin Resource Sharing
- **dotenv**: Environment variable management
- **express-validator**: Request validation
- **multer**: File upload handling
- **mongoose**: MongoDB object modeling

### Development Tools
- **nodemon**: Development auto-restart
- **ESLint**: Code linting (if configured)
- **Postman/Thunder Client**: API testing

## 📁 Detailed Project Structure

```
kambaz-node-server-app/
├── .vscode/                         # VS Code settings
├── Kambaz/                          # Main application directory
│   ├── Assignments/                 # Assignment module
│   │   ├── dao.js                   # Data Access Object
│   │   ├── model.js                 # Mongoose model
│   │   ├── routes.js                # Express routes
│   │   └── schema.js                # Mongoose schema definition
│   │
│   ├── Courses/                     # Courses module
│   │   ├── dao.js                   # Data Access Object
│   │   ├── model.js                 # Mongoose model
│   │   ├── routes.js                # Express routes
│   │   └── schema.js                # Mongoose schema definition
│   │
│   ├── Database/                    # Database initialization
│   │   ├── assignments.js           # Assignment seed data
│   │   ├── courses.js               # Course seed data
│   │   ├── enrollments.js           # Enrollment seed data
│   │   ├── modules.js               # Module seed data
│   │   ├── users.js                 # User seed data
│   │   └── index.js                 # Database exports
│   │
│   ├── Enrollments/                 # Enrollment module
│   │   ├── dao.js                   # Data Access Object
│   │   ├── model.js                 # Mongoose model
│   │   ├── routes.js                # Express routes
│   │   └── schema.js                # Mongoose schema definition
│   │
│   ├── Modules/                     # Modules management
│   │   ├── dao.js                   # Data Access Object
│   │   ├── model.js                 # Mongoose model
│   │   ├── routes.js                # Express routes
│   │   └── schema.js                # Mongoose schema definition
│   │
│   ├── QuizAttempts/                # Quiz attempts tracking
│   │   ├── dao.js                   # Data Access Object
│   │   ├── model.js                 # Mongoose model
│   │   ├── routes.js                # Express routes
│   │   └── schema.js                # Mongoose schema definition
│   │
│   ├── Quizzes/                     # Quiz management
│   │   ├── dao.js                   # Data Access Object
│   │   ├── model.js                 # Mongoose model
│   │   ├── routes.js                # Express routes
│   │   └── schema.js                # Mongoose schema definition
│   │
│   └── Users/                       # User management
│       ├── dao.js                   # Data Access Object
│       ├── migration.js             # Database migrations
│       ├── model.js                 # Mongoose model
│       ├── routes.js                # Express routes
│       └── schema.js                # Mongoose schema definition
│
├── Labs/                            # Lab assignments (if applicable)
├── node_modules/                    # Dependencies
├── .env                             # Environment variables (not in repo)
├── .gitignore                       # Git ignore rules
├── hello.js                         # Test endpoint
├── index.js                         # Application entry point
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Dependency lock file
├── server.js                        # Server configuration
└── vercel.json                      # Vercel deployment config (legacy/backup)
```

**Note**: The `vercel.json` file is kept for backup deployment options, but the primary deployment is on Render.

## 📦 Installation

### Prerequisites

- **Node.js**: v16.0.0 or higher
- **MongoDB**: Local installation or MongoDB Atlas account
- **npm**: v8.0.0 or higher

### Setup Steps

1. **Clone the repository**:
```bash
git clone https://github.com/Srivatsa0109/kambaz-complete-project-backend.git
cd kambaz-complete-project-backend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Create environment file**:
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/kambaz
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kambaz

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=24h

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
# For production:
# FRONTEND_URL=https://kambaz-complete-project-frontend.vercel.app

# File Upload (if applicable)
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

4. **Start MongoDB**:
```bash
# If using local MongoDB
mongod

# If using MongoDB Atlas, ensure your connection string is correct in .env
```

5. **Initialize Database** (Optional - if seed data is needed):
```bash
npm run seed
# or manually import data from Database folder
```

6. **Start the server**:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

7. **Verify the server**:
The server should be running at [http://localhost:4000](http://localhost:4000)

## 🚀 Available Scripts

```bash
# Start production server
npm start

# Start development server with auto-restart
npm run dev

# Run database migrations
npm run migrate

# Seed database with sample data
npm run seed

# Run tests (if configured)
npm test

# Lint code (if configured)
npm run lint
```

## 🔌 API Endpoints

### Base URL
- **Development**: `http://localhost:4000/api`
- **Production (Render)**: [https://kambaz-complete-project-backend.onrender.com](https://kambaz-complete-project-backend.onrender.com)

### Authentication Endpoints (`/api/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/users/signup` | Register new user | No |
| POST | `/api/users/signin` | User login | No |
| POST | `/api/users/signout` | User logout | Yes |
| GET | `/api/users/profile` | Get current user profile | Yes |
| PUT | `/api/users/profile` | Update user profile | Yes |
| GET | `/api/users` | Get all users | Yes |
| GET | `/api/users/:userId` | Get user by ID | Yes |
| PUT | `/api/users/:userId` | Update user | Yes (Admin) |
| DELETE | `/api/users/:userId` | Delete user | Yes (Admin) |

### Course Endpoints (`/api/courses`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/courses` | Get all courses | No |
| GET | `/api/courses/:courseId` | Get course by ID | No |
| POST | `/api/courses` | Create new course | Yes (Instructor) |
| PUT | `/api/courses/:courseId` | Update course | Yes (Instructor) |
| DELETE | `/api/courses/:courseId` | Delete course | Yes (Instructor) |
| GET | `/api/courses/:courseId/users` | Get course members | Yes |

### Assignment Endpoints (`/api/assignments`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/courses/:courseId/assignments` | Get all course assignments | Yes |
| GET | `/api/assignments/:assignmentId` | Get assignment by ID | Yes |
| POST | `/api/courses/:courseId/assignments` | Create assignment | Yes (Instructor) |
| PUT | `/api/assignments/:assignmentId` | Update assignment | Yes (Instructor) |
| DELETE | `/api/assignments/:assignmentId` | Delete assignment | Yes (Instructor) |
| POST | `/api/assignments/:assignmentId/submit` | Submit assignment | Yes (Student) |
| PUT | `/api/assignments/:assignmentId/grade` | Grade assignment | Yes (Instructor) |

### Quiz Endpoints (`/api/quizzes`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/courses/:courseId/quizzes` | Get all course quizzes | Yes |
| GET | `/api/quizzes/:quizId` | Get quiz by ID | Yes |
| POST | `/api/courses/:courseId/quizzes` | Create quiz | Yes (Instructor) |
| PUT | `/api/quizzes/:quizId` | Update quiz | Yes (Instructor) |
| DELETE | `/api/quizzes/:quizId` | Delete quiz | Yes (Instructor) |
| POST | `/api/quizzes/:quizId/attempt` | Start quiz attempt | Yes (Student) |
| PUT | `/api/quizzes/:quizId/attempt/:attemptId` | Submit quiz attempt | Yes (Student) |
| GET | `/api/quizzes/:quizId/attempts` | Get all attempts | Yes (Instructor) |

### Module Endpoints (`/api/modules`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/courses/:courseId/modules` | Get all course modules | Yes |
| GET | `/api/modules/:moduleId` | Get module by ID | Yes |
| POST | `/api/courses/:courseId/modules` | Create module | Yes (Instructor) |
| PUT | `/api/modules/:moduleId` | Update module | Yes (Instructor) |
| DELETE | `/api/modules/:moduleId` | Delete module | Yes (Instructor) |
| PUT | `/api/modules/:moduleId/reorder` | Reorder modules | Yes (Instructor) |

### Enrollment Endpoints (`/api/enrollments`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users/:userId/enrollments` | Get user enrollments | Yes |
| GET | `/api/courses/:courseId/enrollments` | Get course enrollments | Yes |
| POST | `/api/courses/:courseId/enroll` | Enroll in course | Yes |
| DELETE | `/api/courses/:courseId/unenroll` | Unenroll from course | Yes |
| PUT | `/api/enrollments/:enrollmentId` | Update enrollment | Yes (Instructor) |

## 🗄️ Database Schema

### User Schema
```javascript
{
  _id: ObjectId,
  username: String (unique, required),
  password: String (hashed, required),
  firstName: String,
  lastName: String,
  email: String (unique, required),
  role: String (enum: ['STUDENT', 'INSTRUCTOR', 'ADMIN']),
  dob: Date,
  section: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Course Schema
```javascript
{
  _id: ObjectId,
  name: String (required),
  number: String (unique, required),
  description: String,
  instructor: ObjectId (ref: 'User'),
  startDate: Date,
  endDate: Date,
  department: String,
  credits: Number,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Assignment Schema
```javascript
{
  _id: ObjectId,
  title: String (required),
  course: ObjectId (ref: 'Course'),
  description: String,
  points: Number,
  dueDate: Date,
  availableDate: Date,
  untilDate: Date,
  submissions: [{
    student: ObjectId (ref: 'User'),
    submittedAt: Date,
    grade: Number,
    feedback: String,
    files: [String]
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### Quiz Schema
```javascript
{
  _id: ObjectId,
  title: String (required),
  course: ObjectId (ref: 'Course'),
  description: String,
  type: String (enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey']),
  points: Number,
  assignmentGroup: String,
  shuffleAnswers: Boolean,
  timeLimit: Number,
  multipleAttempts: Boolean,
  showCorrectAnswers: Boolean,
  accessCode: String,
  oneQuestionAtATime: Boolean,
  webcamRequired: Boolean,
  lockQuestionsAfterAnswering: Boolean,
  dueDate: Date,
  availableDate: Date,
  untilDate: Date,
  questions: [{
    type: String,
    title: String,
    points: Number,
    question: String,
    choices: [String],
    correctAnswer: String
  }],
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### QuizAttempt Schema
```javascript
{
  _id: ObjectId,
  quiz: ObjectId (ref: 'Quiz'),
  student: ObjectId (ref: 'User'),
  answers: [{
    question: ObjectId,
    answer: String,
    isCorrect: Boolean
  }],
  score: Number,
  startedAt: Date,
  submittedAt: Date,
  timeSpent: Number,
  createdAt: Date
}
```

### Module Schema
```javascript
{
  _id: ObjectId,
  name: String (required),
  course: ObjectId (ref: 'Course'),
  description: String,
  order: Number,
  lessons: [{
    name: String,
    description: String,
    type: String,
    content: String,
    order: Number
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### Enrollment Schema
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: 'User'),
  course: ObjectId (ref: 'Course'),
  role: String (enum: ['STUDENT', 'INSTRUCTOR', 'TA']),
  enrolledAt: Date,
  grade: Number,
  status: String (enum: ['active', 'completed', 'dropped']),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. 

### Authentication Flow

1. **Sign Up/Sign In**: User provides credentials
2. **Token Generation**: Server creates JWT token
3. **Token Storage**: Client stores token (localStorage/sessionStorage)
4. **Authenticated Requests**: Client includes token in Authorization header
5. **Token Verification**: Server validates token on protected routes

### Using Authentication

#### Sign Up
```bash
POST /api/users/signup
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "STUDENT"
}
```

#### Sign In
```bash
POST /api/users/signin
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "...",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "STUDENT"
  }
}
```

#### Authenticated Request
```bash
GET /api/users/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Role-Based Access Control

- **Student**: Can view courses, submit assignments, take quizzes
- **Instructor**: All student permissions + create/edit courses, assignments, quizzes, grade submissions
- **Admin**: Full system access

## 🏗️ Architecture

### DAO Pattern (Data Access Object)
Each module follows the DAO pattern for data operations:

```javascript
// Example: Courses DAO (dao.js)
export const findAllCourses = () => CourseModel.find();
export const findCourseById = (courseId) => CourseModel.findById(courseId);
export const createCourse = (course) => CourseModel.create(course);
export const updateCourse = (courseId, course) => 
  CourseModel.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => 
  CourseModel.deleteOne({ _id: courseId });
```

### Route Structure
```javascript
// Example: Courses Routes (routes.js)
import * as dao from './dao.js';

export default function CourseRoutes(app) {
  app.get('/api/courses', async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });
  
  app.post('/api/courses', authenticateUser, async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });
  
  // ... more routes
}
```

## 🔒 Security Features

### Implemented Security Measures
- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based auth
- **CORS Configuration**: Controlled cross-origin access
- **Input Validation**: Request validation middleware
- **SQL/NoSQL Injection Protection**: Mongoose sanitization
- **XSS Protection**: Input sanitization
- **Rate Limiting**: Request rate limiting (if configured)
- **Helmet**: Security headers (if configured)

### Environment Variables
Never commit sensitive information. Always use environment variables:
- JWT secrets
- Database credentials
- API keys
- Port configurations

## 🧪 Testing

### Manual Testing with Thunder Client/Postman

1. **Import Collection**: Create a collection with all endpoints
2. **Set Environment Variables**:
   - `base_url`: `http://localhost:4000/api`
   - `token`: JWT token from login
3. **Test Authentication Flow**:
   - Sign up → Sign in → Access protected route
4. **Test CRUD Operations**: Create, Read, Update, Delete for each resource

### Example Test Cases
- User registration with valid/invalid data
- User login with correct/incorrect credentials
- Create course as instructor
- Enroll in course as student
- Submit assignment
- Create and take quiz
- Grade submission

## 🌐 Deployment

### Render Deployment

The backend is deployed on Render, a modern cloud platform that provides automatic deployments from GitHub.

**Live API**: [https://kambaz-complete-project-backend.onrender.com](https://kambaz-complete-project-backend.onrender.com)

#### Deployment Steps

1. **Create Render Account**:
   - Visit [render.com](https://render.com)
   - Sign up or log in with GitHub

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the backend repository

3. **Configure Build Settings**:
   ```
   Name: kambaz-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Set Environment Variables** in Render Dashboard:
   - `MONGODB_URI` = Your MongoDB connection string
   - `JWT_SECRET` = Your JWT secret key
   - `FRONTEND_URL` = https://kambaz-complete-project-frontend.vercel.app
   - `NODE_ENV` = production
   - `PORT` = 4000 (Render will auto-assign if not specified)

5. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy
   - Monitor deployment logs in the Render dashboard

6. **Auto-Deploy Setup**:
   - Enable "Auto-Deploy" in settings
   - Every push to main branch triggers automatic deployment

#### Render Configuration Benefits
- ✅ Automatic HTTPS
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Always-on instances (no cold starts on paid plans)
- ✅ Built-in health checks
- ✅ Easy environment management
- ✅ View deployment logs in real-time

### Alternative Deployment Options

#### Option 1: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Option 2: Heroku
```bash
# Login to Heroku
heroku login

# Create app
heroku create kambaz-backend

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git push heroku main
```

#### Option 3: Railway
- Connect GitHub repository
- Configure environment variables
- Deploy with one click

## 🔗 Frontend Integration

This backend is designed to work seamlessly with the Kambaz frontend application.

**Frontend Repository**: [kambaz-complete-project-frontend](https://github.com/Srivatsa0109/kambaz-complete-project-frontend)

### CORS Configuration
Update CORS settings in `server.js` or `index.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

## 📝 Development Guidelines

### Code Style
- Use consistent naming conventions
- Follow RESTful API design principles
- Implement proper error handling
- Add JSDoc comments for functions
- Keep functions small and focused

### Error Handling
```javascript
// Example error handling
try {
  const course = await dao.findCourseById(courseId);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  res.json(course);
} catch (error) {
  res.status(500).json({ message: 'Server error', error: error.message });
}
```

### API Response Format
```javascript
// Success Response
{
  "success": true,
  "data": { ... }
}

// Error Response
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error"
}
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: MongoDB connection error
```bash
# Solution: Check MongoDB is running
mongod --version

# Or verify MongoDB Atlas connection string
```

**Issue**: Port already in use
```bash
# Solution: Kill process on port or use different port
# Linux/Mac:
lsof -ti:4000 | xargs kill -9

# Windows:
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

**Issue**: JWT token invalid
```bash
# Solution: Check JWT_SECRET matches between sign and verify
# Ensure token is being sent in Authorization header
```

**Issue**: Render app sleeping (free tier)
```bash
# Solution: Render free tier apps sleep after 15 minutes of inactivity
# Options:
# 1. Upgrade to paid plan for always-on instances
# 2. Use a service like UptimeRobot to ping your API every 14 minutes
# 3. Accept 30-50 second cold start on first request after sleep
```

**Issue**: Build failures on Render
```bash
# Solution: Check build logs in Render dashboard
# Ensure all dependencies are in package.json
# Verify Node.js version compatibility
```

**Issue**: Database connection timeout
```bash
# Solution: Whitelist Render's IP addresses in MongoDB Atlas
# Or use 0.0.0.0/0 to allow all IPs (less secure but works)
```

## 👨‍💻 Author

**Srivatsa Satishreddy**
- GitHub: [@Srivatsa0109](https://github.com/Srivatsa0109)
- Project: Academic Assignment

## 🙏 Acknowledgments

- Built with [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- Authentication: [JWT](https://jwt.io/)
- Deployed on [Vercel](https://vercel.com/)

## 📄 License

This project is part of an academic assignment for educational purposes.

## 📞 Support

For questions or issues, please open an issue in the [GitHub repository](https://github.com/Srivatsa0109/kambaz-complete-project-backend/issues).

---

**Note**: This is a student project created for educational purposes as part of a web development course. The application demonstrates full-stack development practices, RESTful API design, and database management.
