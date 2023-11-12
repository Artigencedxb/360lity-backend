"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContact = exports.GetContact = exports.EditContact = exports.CreateContact = exports.DeleteContactImage = void 0;
const contactModel_1 = require("../models/contactModel");
const catchAsync_1 = require("../utils/catchAsync");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteContactImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const contact = await contactModel_1.Contact.findById(req.params.id);
    console.log(contactModel_1.Contact, "show");
    if (contact?.image?.length) {
        req.body.image = contact?.image;
        req.body.folder = "contact";
        req.body.imageExists = true;
    }
    next();
});
exports.CreateContact = (0, handlerFactory_1.CreateOne)(contactModel_1.Contact, "contact");
exports.EditContact = (0, handlerFactory_1.UpdateOne)(contactModel_1.Contact, "contact");
exports.GetContact = (0, handlerFactory_1.GetOne)(contactModel_1.Contact, "contact");
exports.DeleteContact = (0, handlerFactory_1.DeleteOne)(contactModel_1.Contact, "contact");
//# sourceMappingURL=contactController.js.map