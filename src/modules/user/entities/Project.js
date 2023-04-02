"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
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
        typeorm_1.PrimaryColumn()
    ], Project.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Project.prototype, "category");
    __decorate([
        typeorm_1.Column()
    ], Project.prototype, "image");
    __decorate([
        typeorm_1.Column()
    ], Project.prototype, "user_email");
    __decorate([
        typeorm_1.Column()
    ], Project.prototype, "isPrivate");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Project.prototype, "created_at");
    __decorate([
        class_transformer_1.Expose({ name: "image_url" })
    ], Project.prototype, "getImageUrl");
    Project = __decorate([
        typeorm_1.Entity("projects")
    ], Project);
    return Project;
}());
exports.Project = Project;
