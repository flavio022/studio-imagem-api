import { IStorageProvider } from "../IStorageProvider";
import fs from "fs";
import { resolve } from "path";
import upload from "../../../../../config/upload";

class LocalStorageProvider implements IStorageProvider {
    async saveFile(file: string, folder: string): Promise<string> {
        await fs.promises.rename(
            resolve(upload.tmpFolder, file),
            resolve(`${upload.tmpFolder}/${folder}`, file)
        )

        return file;
    }

}

export { LocalStorageProvider }