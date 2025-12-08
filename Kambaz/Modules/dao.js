import ModuleModel from "./model.js";
import { v4 as uuidv4 } from 'uuid'; 

export async function createModule(module) {
  if (!module._id) {
    const randomId = `M${Date.now().toString().slice(-6)}`; 
    module._id = randomId;
  }
  
  const created = await ModuleModel.create(module);
  return created.toObject(); 
}

export function findModulesForCourse(courseId) {
  return ModuleModel.find({ course: courseId }).lean();
}

export function deleteModule(moduleId) {
  return ModuleModel.deleteOne({ 
    $or: [
      { _id: moduleId },
      { name: moduleId }
    ]
  });
}

export async function updateModule(moduleId, moduleUpdates) {
  const updated = await ModuleModel.findOneAndUpdate(
    { 
      $or: [
        { _id: moduleId },
        { name: moduleId }
      ]
    },
    moduleUpdates,
    { new: true }
  );
  
  return updated;
}

export function findModuleById(moduleId) {
  return ModuleModel.findOne({
    $or: [
      { _id: moduleId },
      { name: moduleId }
    ]
  });
}