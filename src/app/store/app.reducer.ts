import * as fromItem from './item/item.reducer'
import * as fromMonth from './month/month.reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface AppState  {
	items: fromItem.MyState;
	month: fromMonth.MyState;
	// Add more stores here
}

export const appReducer: ActionReducerMap<AppState> = {
	items: fromItem.itemReducer,
	month: fromMonth.monthReducer
	// Add more stores here
}