import { Calendar, View } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent, CalendarModal, Navbar } from '../';
import { addHours } from 'date-fns';
import { getMessagesES, localizer } from '../../helpers';
import { CSSProperties, useState } from 'react';
import { ICalendarEvent } from '../../types/calendar';

const events: ICalendarEvent[] = [
	{
		title: 'Cumpleaños del jefe',
		notes: 'Hay que comprar la torta',
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: '#fafafa',
		user: {
			_id: '123',
			name: 'Lea',
		},
	},
];

export const CalendarPage = () => {
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

	const onDoubleClick = (event: ICalendarEvent) => {
		console.log({ doubleClick: event });
	};

	const onSelect = (event: ICalendarEvent) => {
		console.log({ click: event });
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
		</>
	);
};
