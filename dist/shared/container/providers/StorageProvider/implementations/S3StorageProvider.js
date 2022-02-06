"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3StorageProvider = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _path = require("path");

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _fs = _interopRequireDefault(require("fs"));

var _mime = _interopRequireDefault(require("mime"));

var _AppError = require("../../../../../errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class S3StorageProvider {
  constructor() {
    this.client = void 0;
    this.client = new _awsSdk.default.S3({
      region: process.env.AWS_BUCKET_REGION
    });
  }

  async saveFile(file) {
    const originalname = (0, _path.resolve)(_upload.default.tmpFolder, file);

    const ContentType = _mime.default.getType(originalname);

    if (!ContentType) {
      throw new _AppError.AppError('File not found', 401);
    }

    const fileContent = await _fs.default.promises.readFile(originalname);
    await this.client.putObject({
      Bucket: `${process.env.AWS_BUCKET}`,
      Key: file,
      ACL: 'public-read',
      Body: fileContent,
      ContentType,
      ContentDisposition: `inline; filename=${file}`
    }).promise();
    await _fs.default.promises.unlink(originalname);
    return file;
  }

}

exports.S3StorageProvider = S3StorageProvider;