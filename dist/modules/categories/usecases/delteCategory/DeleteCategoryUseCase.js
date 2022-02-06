"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteCategoryUseCase = void 0;

var _ICategoryRepository = require("../../repositories/ICategoryRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let DeleteCategoryUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CategoryRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICategoryRepository.ICategoryRepository === "undefined" ? Object : _ICategoryRepository.ICategoryRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteCategoryUseCase {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(id) {
    console.log(id);
    await this.categoryRepository.delete(id);
  }

}) || _class) || _class) || _class) || _class);
exports.DeleteCategoryUseCase = DeleteCategoryUseCase;