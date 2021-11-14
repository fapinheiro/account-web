import { Item } from "../model/item.model";
import { categories} from './categories';

export const items: Item[] = [
	{ date: new Date(2021, 9, 15), category: categories[0], title: 'McDonalds', value: 32.12},
	{ date: new Date(2021, 10, 16), category: categories[0], title: 'BurgerKing', value: 32.12},
	{ date: new Date(2021, 10, 14), category: categories[1], title: 'Alugel apto', value: 2300},
	{ date: new Date(2021, 11, 13), category: categories[2], title: 'Salário ACME', value: 4000}
] 