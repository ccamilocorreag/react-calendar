import { UserType } from "."

export type CalendarEventType = {
    title: string,
    notes: string,
    start: Date,
    end: Date,
    bgColor: string,
    user: UserType
}

export type EventPropGetterType = {
    event: CalendarEventType,
    start: Date,
    end: Date,
    isSelected: boolean
}