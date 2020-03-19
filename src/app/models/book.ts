import { Category } from "src/app/models/category";

export class Book {
    id: number;
    title: string;
    isbn: string;
    totalExemplaries: number;
    author: string;
    releaseDate: Date;
    category = new Category();
}
