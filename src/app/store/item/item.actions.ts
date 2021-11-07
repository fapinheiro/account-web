import { Action } from "@ngrx/store";
import { Item } from "../../model/item.model";

export const SET_ITEMS = '[Item Feature] ADD_ITEMS';
export const ADD_ITEM = '[Item Feature] ADD_ITEM';
export const UPDATE_ITEM = '[Item Featured] UPDATE_ITEM';

export class SetItems implements Action {
	readonly type = SET_ITEMS;
	
	constructor(public payload: Item[]) {}
}

export class AddItem implements Action {
	readonly type = ADD_ITEM;
	
	constructor(public payload: Item) {}
}

export class UpdateItem implements Action {
	readonly type = UPDATE_ITEM;
	
	constructor(public payload: {index: number, item: Item}) {} 
}

export type ItemActions = SetItems | AddItem | UpdateItem;