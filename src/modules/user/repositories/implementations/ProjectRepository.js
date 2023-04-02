"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProjectRepository = void 0;
var AppError_1 = require("../../../../errors/AppError");
var typeorm_1 = require("typeorm");
var Project_1 = require("../../entities/Project");
var ProjectRepository = /** @class */ (function () {
    function ProjectRepository() {
        this.projectRepository = typeorm_1.getRepository(Project_1.Project);
    }
    ProjectRepository.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.projectRepository.findOne(id)];
                    case 1:
                        project = _a.sent();
                        if (!project) {
                            throw new AppError_1.AppError("project does no exist!", 401);
                        }
                        return [4 /*yield*/, this.projectRepository["delete"](id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectRepository.prototype.listAllProjects = function (category, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, count, _a, project, total, _b, project, total;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        projects = null;
                        count = 0;
                        if (!(category !== undefined)) return [3 /*break*/, 2];
                        console.log("private udnie");
                        return [4 /*yield*/, this.projectRepository.findAndCount({
                                where: {
                                    category: category,
                                    isPrivate: false
                                },
                                order: {
                                    created_at: 'DESC'
                                },
                                skip: (page - 1) * pageSize,
                                take: pageSize
                            })];
                    case 1:
                        _a = _c.sent(), project = _a[0], total = _a[1];
                        projects = project;
                        count = total;
                        return [3 /*break*/, 4];
                    case 2:
                        console.log("private flase");
                        return [4 /*yield*/, this.projectRepository.findAndCount({
                                where: {
                                    isPrivate: false
                                },
                                order: {
                                    created_at: 'DESC'
                                },
                                skip: (page - 1) * pageSize,
                                take: pageSize
                            })];
                    case 3:
                        _b = _c.sent(), project = _b[0], total = _b[1];
                        projects = project;
                        count = total;
                        _c.label = 4;
                    case 4: return [2 /*return*/, {
                            projects: projects,
                            count: count,
                            page: page,
                            pageSize: pageSize
                        }];
                }
            });
        });
    };
    ProjectRepository.prototype.listByUserEmail = function (user_email, category, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, count, _a, project, total, _b, project, total;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        projects = null;
                        count = 0;
                        if (!(category === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.projectRepository.findAndCount({
                                where: {
                                    user_email: user_email
                                },
                                order: {
                                    created_at: 'DESC'
                                },
                                skip: (page - 1) * pageSize,
                                take: pageSize
                            })];
                    case 1:
                        _a = _c.sent(), project = _a[0], total = _a[1];
                        projects = project;
                        count = total;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.projectRepository.findAndCount({
                            where: {
                                user_email: user_email,
                                category: category
                            },
                            order: {
                                created_at: 'DESC'
                            },
                            skip: (page - 1) * pageSize,
                            take: pageSize
                        })];
                    case 3:
                        _b = _c.sent(), project = _b[0], total = _b[1];
                        projects = project;
                        count = total;
                        _c.label = 4;
                    case 4: return [2 /*return*/, {
                            projects: projects,
                            count: count,
                            page: page,
                            pageSize: pageSize
                        }];
                }
            });
        });
    };
    ProjectRepository.prototype.listUserProjects = function (user_email, category, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, count, _a, project, total, _b, project, total;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        projects = null;
                        count = 0;
                        if (!(category === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.projectRepository.findAndCount({
                                where: {
                                    user_email: user_email
                                },
                                order: {
                                    created_at: 'DESC'
                                },
                                skip: (page - 1) * pageSize,
                                take: pageSize
                            })];
                    case 1:
                        _a = _c.sent(), project = _a[0], total = _a[1];
                        projects = project;
                        count = total;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.projectRepository.findAndCount({
                            where: {
                                user_email: user_email,
                                category: category
                            },
                            order: {
                                created_at: 'DESC'
                            },
                            skip: (page - 1) * pageSize,
                            take: pageSize
                        })];
                    case 3:
                        _b = _c.sent(), project = _b[0], total = _b[1];
                        projects = project;
                        count = total;
                        _c.label = 4;
                    case 4: return [2 /*return*/, {
                            projects: projects,
                            count: count,
                            page: page,
                            pageSize: pageSize
                        }];
                }
            });
        });
    };
    ProjectRepository.prototype.create = function (_a) {
        var category = _a.category, image = _a.image, user_email = _a.user_email, isPrivate = _a.isPrivate;
        return __awaiter(this, void 0, void 0, function () {
            var specification;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (isPrivate == 'true' || isPrivate == true) {
                            isPrivate = true;
                        }
                        else {
                            isPrivate = false;
                        }
                        specification = this.projectRepository.create({
                            category: category,
                            image: image,
                            user_email: user_email,
                            isPrivate: isPrivate
                        });
                        console.log(specification);
                        return [4 /*yield*/, this.projectRepository.save(specification)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProjectRepository;
}());
exports.ProjectRepository = ProjectRepository;
