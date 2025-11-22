import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) {
    function createModule(module) {
        const newModule = { ...module, _id: uuidv4() };
        db.modules = [...db.modules, newModule];
        return newModule;
    }
    
    function findModulesForCourse(courseId) { 
        const { modules } = db;
        return modules.filter((module) => module.course === courseId);
    }
    
    function deleteModule(moduleId) {
        const { modules } = db;
        db.modules = modules.filter((module) => module._id !== moduleId);
    }
    
    function updateModule(moduleId, moduleUpdates) {
        db.modules = db.modules.map((module) =>
            module._id === moduleId ? { ...module, ...moduleUpdates } : module
        );
        return db.modules.find((module) => module._id === moduleId);
    }
    
    return { findModulesForCourse, createModule, deleteModule, updateModule };
}