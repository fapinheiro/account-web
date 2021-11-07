import { Category } from "./category.model";

export class Item {

    constructor(
		public date: Date,
        public category: Category,
        public title: string,
		public value: number) {}
}