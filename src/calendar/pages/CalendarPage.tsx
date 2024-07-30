import { Calendar, View } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent, CalendarModal, FabAddNew, Navbar } from '../';
import { getMessagesES, localizer } from '../../helpers';
import { CSSProperties, useState } from 'react';
import { ICalendarEvent } from '../../types/calendar';
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {
	const { openDateModal } = useUiStore();
	const { events, setActiveEvent } = useCalendarStore();
	const [lastView, setLastView] = useState<View>(
		(localStorage.getItem('lastView') as View) || 'week'
	);

	const eventStyleGetter = (
		event: ICalendarEvent,
		start: Date,
		end: Date,
		isSelected: boolean
	) => {
		const style: CSSProperties = {
			backgroundColor: '#347CF7',
			borderRadius: '10px',
			opacity: 0.8,
			color: 'white',
		};

		return {
			style,
		};
	};

	const onDoubleClick = () => {
		openDateModal();
	};

	const onSelect = (event: ICalendarEvent) => {
		setActiveEvent(event);
	};

	const onViewChanged = (event: View) => {
		localStorage.setItem('lastView', event);
		setLastView(event);
	};

	return (
		<>
			<Navbar />
			<Calendar
				culture='es'
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 'calc( 100vh - 80px )' }}
				messages={getMessagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>

			<CalendarModal />
			<FabAddNew />
		</>
	);
};
