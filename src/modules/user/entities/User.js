"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var uuid = require('uuidv4').uuid;
var User = /** @class */ (function () {
    function User() {
        if (!this.id) {
            this.id = uuid();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn()
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "address");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "company");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "isAdmin");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "isActiveted");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "avatar");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], User.prototype, "created_at");
    User = __decorate([
        typeorm_1.Entity("users")
    ], User);
    return User;
}());
exports.User = User;
