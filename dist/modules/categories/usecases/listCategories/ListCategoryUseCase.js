"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoryUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ICategoryRepository = require("../../repositories/ICategoryRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListCategoryUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CategoryRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICategoryRepository.ICategoryRepository === "undefined" ? Object : _ICategoryRepository.ICategoryRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListCategoryUseCase {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute() {
    const categories = await this.categoryRepository.ListAll();
    return categories;
  }

}) || _class) || _class) || _class) || _class);
exports.ListCategoryUseCase = ListCategoryUseCase;