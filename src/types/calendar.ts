export interface IEvent {
	title: string;
	user?: IUser;
}

export interface IUser {
	_id: string;
	name: string;
}

export interface ICalendarEvent extends IEvent {
	_id?: string;
	notes: string;
	start: Date;
	end: Date;
	bgColor?: string;
}
