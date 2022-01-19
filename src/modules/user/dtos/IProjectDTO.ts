interface IProjectDto {
    category: string;
    image: string;
    user_email: string;
    getImageUrl(): string;
}

export { IProjectDto }