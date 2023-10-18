import { FC } from "react"
import { CalendarEventType } from "../../types";

type CalendarEventPropsType = {
    event: CalendarEventType
}

const CalendarEvent: FC<CalendarEventPropsType> = ({ event }) => {

    const { title, user } = event;
    return (
        <>
            <strong>{title}</strong>
            <span>- {user.name}</span>
        </>
    )
}

export default CalendarEvent