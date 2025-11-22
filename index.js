import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv/config";
import hello from "./hello.js";
import lab5 from './Labs/lab5/index.js';                   
import db from "./Kambaz/Database/index.js";               
import CoursesRoutes from "./Kambaz/Courses/routes.js";    
import ModulesRoutes from "./Kambaz/Modules/routes.js";    
import UserRoutes from "./Kambaz/Users/routes.js";         
import AssignmentsRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentsRoutes from "./Kambaz/Enrollments/routes.js";

const app = express();

console.log('===== SERVER STARTED =====');
console.log('Tony Stark role in DB:', db.users.find(u => u.username === 'iron_man')?.role);
console.log('Bruce Wayne role in DB:', db.users.find(u => u.username === 'dark_knight')?.role);
console.log('Total users:', db.users.length);
console.log('Total courses:', db.courses.length);
console.log('Total modules:', db.modules.length);

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
}));

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV === "production") {  
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.SERVER_URL,
    };
}

app.use(session(sessionOptions));
app.use(express.json());

UserRoutes(app, db);
hello(app);
lab5(app);
CoursesRoutes(app, db);
ModulesRoutes(app, db);
AssignmentsRoutes(app, db);
EnrollmentsRoutes(app, db);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port ${process.env.PORT || 4000} in ${process.env.NODE_ENV || 'development'} mode`);
    console.log(`Accepting requests from: ${process.env.CLIENT_URL || 'http://localhost:3000'}`);
});

export default app;