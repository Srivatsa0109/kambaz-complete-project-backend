import CoursesDao from "./dao.js";
import EnrollmentsDao from "../Enrollments/dao.js";

export default function CoursesRoutes(app, db) {
    const dao = CoursesDao(db);
    const enrollmentsDao = EnrollmentsDao(db);
    
    const createCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(401);
            return;
        }
        const newCourse = dao.createCourse(req.body);
        enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
        res.json(newCourse);
    };
    
    const findAllCourses = (req, res) => {
        const courses = dao.findAllCourses();
        res.json(courses);
    };

    const findCoursesForEnrolledUser = (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            if (!currentUser) {
                res.sendStatus(401);
                return;
            }
            userId = currentUser._id;
        }
        const courses = dao.findCoursesForEnrolledUser(userId);
        res.json(courses);
    };
    
    const deleteCourse = (req, res) => {
        const { courseId } = req.params;
        dao.deleteCourse(courseId);
        res.sendStatus(204);  
    };
    
    const updateCourse = (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const updatedCourse = dao.updateCourse(courseId, courseUpdates);
        res.json(updatedCourse); 
    };
    
    app.put("/api/courses/:courseId", updateCourse);
    app.delete("/api/courses/:courseId", deleteCourse);
    app.get("/api/courses", findAllCourses);
    app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
    app.post("/api/users/current/courses", createCourse);
}