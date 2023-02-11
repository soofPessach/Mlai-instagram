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
exports.PostsController = void 0;
var common_1 = require("@nestjs/common");
var UserModel_1 = require("../Models/UserModel");
var posts_service_1 = require("./posts.service");
var PostsController = /** @class */ (function () {
    function PostsController(postsService) {
        this.postsService = postsService;
    }
    PostsController.prototype.getAllPosts = function () {
        return this.postsService.getPosts();
    };
    PostsController.prototype.getUserPosts = function (username) {
        var posts = this.postsService.getUserPosts(username);
        console.log(posts);
        return posts;
    };
    PostsController.prototype.addPost = function (postOwner, imgSrc, location, description) {
        return this.postsService.addPost(postOwner, imgSrc, location, description);
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getAllPosts", null);
    __decorate([
        (0, common_1.Get)('user/:username'),
        __param(0, (0, common_1.Param)('username')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getUserPosts", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)('postOwner')),
        __param(1, (0, common_1.Body)('imgSrc')),
        __param(2, (0, common_1.Body)('location')),
        __param(3, (0, common_1.Body)('description')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UserModel_1.User, String, String, String]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "addPost", null);
    PostsController = __decorate([
        (0, common_1.Controller)('posts'),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], PostsController);
    return PostsController;
}());
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controllers.js.map