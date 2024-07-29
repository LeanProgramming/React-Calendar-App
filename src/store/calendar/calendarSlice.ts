import { /* PayloadAction, */ createSlice } from '@reduxjs/toolkit';

export interface CalendarState {}

const initialState: CalendarState = {};

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = calendarSlice.actions;
