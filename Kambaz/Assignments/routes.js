import AssignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app, db) {
    const dao = AssignmentsDao(db);
    const findAssignmentsForCourse = (req, res) => {
        const { courseId } = req.params;
        const assignments = dao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    };
    const createAssignment = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser || (currentUser.role !== "FACULTY" && currentUser.role !== "ADMIN")) {
            res.status(403).json({ message: "Only faculty can create assignments" });
            return;
        }
        
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = dao.createAssignment(assignment);
        res.json(newAssignment);
    };
   const deleteAssignment = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser || (currentUser.role !== "FACULTY" && currentUser.role !== "ADMIN")) {
            res.status(403).json({ message: "Only faculty can delete assignments" });
            return;
        }
        const { assignmentId } = req.params;
        dao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    };
    const updateAssignment = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser || (currentUser.role !== "FACULTY" && currentUser.role !== "ADMIN")) {
            res.status(403).json({ message: "Only faculty can update assignments" });
            return;
        }
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const updatedAssignment = dao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(updatedAssignment);
    }; 
    app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
    app.post("/api/courses/:courseId/assignments", createAssignment);
    app.delete("/api/courses/assignments/:assignmentId", deleteAssignment);
    app.put("/api/courses/assignments/:assignmentId", updateAssignment);
}