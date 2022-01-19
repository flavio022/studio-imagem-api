import { IStorageProvider } from '../IStorageProvider';
import aws, { S3 } from 'aws-sdk';
import { resolve } from "path";
import upload from '../../../../../config/upload';
import fs from 'fs';
import mime from 'mime';
import { AppError } from "../../../../../errors/AppError";


class S3StorageProvider implements IStorageProvider {
    private client: S3;
    constructor() {
        this.client = new aws.S3({
            region: process.env.AWS_BUCKET_REGION,
        });
    }
    async saveFile(file: string): Promise<string> {
        const originalname = resolve(upload.tmpFolder, file);
        const ContentType = mime.getType(originalname);
        console.log(`${process.env.AWS_BUCKET}`);
        if (!ContentType) {
            throw new AppError('File not found', 401);
        }
        console.log(ContentType)
        console.log("content type")
        const fileContent = await fs.promises.readFile(originalname);

        await this.client
            .putObject({
                Bucket: `${process.env.AWS_BUCKET}`,
                Key: file,
                ACL: 'public-read',
                Body: fileContent,
                ContentType,
                ContentDisposition: `inline; filename=${file}`,
            })
            .promise();

        await fs.promises.unlink(originalname);

        return file;
    }


}

export { S3StorageProvider }