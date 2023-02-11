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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var typeorm_1 = require("typeorm");
var PostModel_1 = require("./PostModel");
var UserModel_1 = require("./UserModel");
var Like = /** @class */ (function () {
    function Like() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Like.prototype, "likeId", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: 'postId' }),
        (0, typeorm_1.ManyToOne)(function () { return PostModel_1.Post; }, function (post) { return post.postId; }),
        __metadata("design:type", PostModel_1.Post)
    ], Like.prototype, "post", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: 'username' }),
        (0, typeorm_1.ManyToOne)(function () { return UserModel_1.User; }, function (user) { return user.userName; }),
        __metadata("design:type", UserModel_1.User)
    ], Like.prototype, "user", void 0);
    Like = __decorate([
        (0, typeorm_1.Entity)()
    ], Like);
    return Like;
}());
exports.Like = Like;
//# sourceMappingURL=LikeModel.js.map