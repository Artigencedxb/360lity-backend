"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProject = exports.GetProject = exports.EditProject = exports.CreateProject = exports.GetAllProjects = exports.DeleteProjectImage = void 0;
const catchAsync_1 = require("..//utils/catchAsync");
const projectModel_1 = require("../models/projectModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteProjectImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const project = await projectModel_1.Project.findById(req.params.id);
    // if (popOptions) query = query.populate(popOptions);
    console.log(project, "show");
    if (project?.image?.length) {
        req.body.image = project?.image;
        req.body.folder = "projects";
        req.body.imageExists = true;
    }
    next();
});
// export const changeListOrder = async(req, res) => {
//   const { id, listID, oldIndex, newIndex } = req.body;
//   const doc = await Project.findById(id);
//   let [oldValue, newValue] = [doc.lists[oldIndex], doc.lists[newIndex]];
//   doc.lists.set(oldIndex, newValue);
//   doc.lists.set(newIndex, oldValue);
//   await doc.save();
// };
exports.GetAllProjects = (0, handlerFactory_1.GetAll)(projectModel_1.Project, "project");
exports.CreateProject = (0, handlerFactory_1.CreateOne)(projectModel_1.Project, "project");
exports.EditProject = (0, handlerFactory_1.UpdateOne)(projectModel_1.Project, "project");
exports.GetProject = (0, handlerFactory_1.GetOne)(projectModel_1.Project, "project");
exports.DeleteProject = (0, handlerFactory_1.DeleteOne)(projectModel_1.Project, "project");
//# sourceMappingURL=projectController.js.map