interface IStorageProvider {
    saveFile(file: string, folder: string): Promise<string>;
}

export { IStorageProvider }