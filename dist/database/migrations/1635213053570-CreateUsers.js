"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsers1635213053570 = void 0;

var _typeorm = require("typeorm");

class CreateUsers1635213053570 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "users",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "email",
        type: "varchar"
      }, {
        name: "company",
        type: "varchar"
      }, {
        name: "address",
        type: "varchar"
      }, {
        name: "password",
        type: "varchar"
      }, {
        name: "avatar",
        type: "varchar",
        isNullable: true
      }, {
        name: "isAdmin",
        type: "boolean",
        default: false
      }, {
        name: "isActiveted",
        type: "boolean",
        default: true
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("users");
  }

}

exports.CreateUsers1635213053570 = CreateUsers1635213053570;