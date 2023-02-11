"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesController = void 0;
var common_1 = require("@nestjs/common");
var likes_service_1 = require("./likes.service");
var LikesController = /** @class */ (function () {
    function LikesController(likesService) {
        this.likesService = likesService;
    }
    LikesController.prototype.getPostLikesAmount = function (postId) {
        return this.likesService.getLikesQuantity(postId);
    };
    LikesController.prototype.isUserLikedPost = function (postId, username) {
        return this.likesService.isPostLikedByUser(postId, username);
    };
    LikesController.prototype.addLike = function (userName, postId) {
        return this.likesService.addLike(postId, userName);
    };
    LikesController.prototype.removeLike = function (userName, postId) {
        return this.likesService.removeLike(postId, userName);
    };
    __decorate([
        (0, common_1.Get)('post/:postId'),
        __param(0, (0, common_1.Param)('postId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LikesController.prototype, "getPostLikesAmount", null);
    __decorate([
        (0, common_1.Get)('post/:postId/user/:username'),
        __param(0, (0, common_1.Param)('postId')),
        __param(1, (0, common_1.Param)('username')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], LikesController.prototype, "isUserLikedPost", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)('username')),
        __param(1, (0, common_1.Body)('postId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], LikesController.prototype, "addLike", null);
    __decorate([
        (0, common_1.Delete)(),
        __param(0, (0, common_1.Body)('username')),
        __param(1, (0, common_1.Body)('postId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], LikesController.prototype, "removeLike", null);
    LikesController = __decorate([
        (0, common_1.Controller)('likes'),
        __metadata("design:paramtypes", [likes_service_1.LikesService])
    ], LikesController);
    return LikesController;
}());
exports.LikesController = LikesController;
//# sourceMappingURL=likes.controllers.js.map