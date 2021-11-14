import * as MonthActions from './month.actions'
import * as Helper from '../../helpers/dataFilter';

export interface MyState {
	month: string;
}

const initialState: MyState = {
	month: Helper.getCurrentMonth()
};

export function monthReducer(state: MyState = initialState, action: any) {
	switch (action.type) {
		case MonthActions.SET_MONTH:
			return {
				...state,
				month: action.payload
			}

	    default:
			return state;
	}
}