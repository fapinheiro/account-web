import { Item } from '../../model/item.model';
import * as ItemActions from './item.actions'
import { items } from '../../data/items';

export interface MyState {
	items: Item[];
}

const initialState: MyState = {
	items: items,
};

export function itemReducer(state: MyState = initialState, action: any) {
	switch (action.type) {
		case ItemActions.SET_ITEMS:
			return {
				...state,
				items: action.payload
			}

		case ItemActions.ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload]
			}
		
		case ItemActions.UPDATE_ITEM:
			const item = state.items[action.payload.index];
			const updatedItem = {
				...item,
				...action.payload.item
			}
			const updatedItems = [...state.items];
			updatedItems[action.payload.index] = updatedItem;
			
			return {
				...state,
				items: updatedItems
			}

	    default:
			return state;
	}
}