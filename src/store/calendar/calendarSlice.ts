import {  PayloadAction,  createSlice } from '@reduxjs/toolkit';
import { ICalendarEvent} from '../../types/calendar';
import { addHours } from 'date-fns';

const tempEvent: ICalendarEvent = {
		_id: new Date().getTime().toString(),
		title: 'Cumpleaños del jefe',
		notes: 'Hay que comprar la torta',
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: '#fafafa',
		user: {
			_id: '123',
			name: 'Lea',
		},
	};

export interface CalendarState {
	events: ICalendarEvent[],
	activeEvent: ICalendarEvent | null,
}

const initialState: CalendarState = {
	events: [tempEvent,],
	activeEvent: null,
};

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		onSetActiveEvent: (state, {payload}: PayloadAction<ICalendarEvent>) => {
			state.activeEvent = payload
		}
	},
});

// Action creators are generated for each case reducer function
export const {onSetActiveEvent} = calendarSlice.actions;
