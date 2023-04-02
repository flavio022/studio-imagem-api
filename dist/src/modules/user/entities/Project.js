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
exports.Project = void 0;
var uuid = require('uuidv4').uuid;
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var Project = /** @class */ (function () {
    function Project() {
        if (!this.id) {
            this.id = uuid();
        }
        this.isPrivate = this.isPrivate;
    }
    Project.prototype.getImageUrl = function () {
        switch (process.env.disk) {
            case "local":
                return process.env.APP_API_URL + "/files/" + this.image;
            case "s3":
                return process.env.AWS_BUCKET_URL + "/" + this.image;
            default:
                return null;
        }
    };
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "image", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "user_email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Project.prototype, "isPrivate", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Project.prototype, "created_at", void 0);
    __decorate([
        class_transformer_1.Expose({ name: "image_url" }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Project.prototype, "getImageUrl", null);
    Project = __decorate([
        typeorm_1.Entity("projects"),
        __metadata("design:paramtypes", [])
    ], Project);
    return Project;
}());
exports.Project = Project;
