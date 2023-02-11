"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likesModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var LikeModel_1 = require("../Models/LikeModel");
var likes_controllers_1 = require("./likes.controllers");
var likes_service_1 = require("./likes.service");
var likesModule = /** @class */ (function () {
    function likesModule() {
    }
    likesModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([LikeModel_1.Like])],
            controllers: [likes_controllers_1.LikesController],
            providers: [likes_service_1.LikesService],
        })
    ], likesModule);
    return likesModule;
}());
exports.likesModule = likesModule;
//# sourceMappingURL=likes.module.js.map