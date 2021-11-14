import { Action } from "@ngrx/store";

export const SET_MONTH = '[Item Feature] SET_MONTH';

export class SetMonth implements Action {
	readonly type = SET_MONTH;
	
	constructor(public payload: string) {}
}

export type MonthActions = SetMonth;