"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShowcase = exports.GetShowcase = exports.EditShowcase = exports.CreateShowcase = exports.GetAllShowcase = exports.DeleteShowcaseImage = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const showcaseModel_1 = require("../models/showcaseModel");
const handlerFactory_1 = require("./handlerFactory");
exports.DeleteShowcaseImage = (0, catchAsync_1.CatchAsync)(async (req, res, next) => {
    const showcase = await showcaseModel_1.Showcase.findById(req.params.id);
    // if (popOptions) query = query.populate(popOptions);
    console.log(showcase, "show");
    if (showcase?.image?.length) {
        req.body.image = showcase?.image;
        req.body.folder = "showcase";
        req.body.imageExists = true;
    }
    next();
});
exports.GetAllShowcase = (0, handlerFactory_1.GetAll)(showcaseModel_1.Showcase, "showcase");
exports.CreateShowcase = (0, handlerFactory_1.CreateOne)(showcaseModel_1.Showcase, "showcase");
exports.EditShowcase = (0, handlerFactory_1.UpdateOne)(showcaseModel_1.Showcase, "showcase");
exports.GetShowcase = (0, handlerFactory_1.GetOne)(showcaseModel_1.Showcase, "showcase");
exports.DeleteShowcase = (0, handlerFactory_1.DeleteOne)(showcaseModel_1.Showcase, "showcase");
//# sourceMappingURL=showcaseController.js.map