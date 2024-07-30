import { onSetActiveEvent } from '../store';
import { ICalendarEvent } from '../types/calendar';
import { useAppDispatch, useAppSelector } from './redux';

export const useCalendarStore = () => {
	const dispatch = useAppDispatch();
	const { activeEvent, events } = useAppSelector(state => state.calendar);

	const setActiveEvent = (calendarEvent: ICalendarEvent) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	return {
		activeEvent,
		events,
		setActiveEvent,
	};
};
