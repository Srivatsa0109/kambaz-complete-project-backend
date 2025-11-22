import ModulesDao from "./dao.js";

export default function ModulesRoutes(app, db) {
    const dao = ModulesDao(db);
    
    const findModulesForCourse = (req, res) => {
        const { courseId } = req.params;
        const modules = dao.findModulesForCourse(courseId);
        res.json(modules);  
    };
    
   const createModule = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser || (currentUser.role !== "FACULTY" && currentUser.role !== "ADMIN")) {
            res.status(403).json({ message: "Only faculty can create modules" });
            return;
        }
        
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = dao.createModule(module);
        res.json(newModule);
    };
    
    const deleteModule = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser || (currentUser.role !== "FACULTY" && currentUser.role !== "ADMIN")) {
            res.status(403).json({ message: "Only faculty can delete modules" });
            return;
        }
        
        const { moduleId } = req.params;
        dao.deleteModule(moduleId);
        res.sendStatus(204);
    };
    
    const updateModule = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser || (currentUser.role !== "FACULTY" && currentUser.role !== "ADMIN")) {
            res.status(403).json({ message: "Only faculty can update modules" });
            return;
        }
        
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const updatedModule = dao.updateModule(moduleId, moduleUpdates);
        res.json(updatedModule);
    };
    
    app.get("/api/courses/:courseId/modules", findModulesForCourse);
    app.post("/api/courses/:courseId/modules", createModule);
    app.delete("/api/courses/modules/:moduleId", deleteModule);
    app.put("/api/courses/modules/:moduleId", updateModule);
}