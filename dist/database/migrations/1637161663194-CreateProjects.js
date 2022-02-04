"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProjects1637161663194 = void 0;

var _typeorm = require("typeorm");

class CreateProjects1637161663194 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "projects",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "company",
        type: "varchar"
      }, {
        name: "category",
        type: "varchar"
      }, {
        name: "image",
        type: "varchar"
      }, {
        name: "user_email",
        type: "varchar"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("projects");
  }

}

exports.CreateProjects1637161663194 = CreateProjects1637161663194;