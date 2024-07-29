import { IEvent } from "../../types/calendar";

interface ICalendarEventProps{
    event: IEvent;
}

export const CalendarEvent = ({event}: ICalendarEventProps) => {
    const { title, user } = event;
    

  return (
    <>
        <strong>{title}</strong>
        <span> - {user!.name}</span>
    </>
  )
}
