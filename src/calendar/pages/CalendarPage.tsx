import { Calendar, EventPropGetter } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';

import { CalendarEvent, Navbar } from "../components";
import { CalendarEventType } from '../../types';
import { getMessagesES, localizer } from '../../helpers';

const events: CalendarEventType[] | undefined = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Hacer que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Camilo'
  }
}]


const CalendarPage = () => {

  const eventStyleGetter: EventPropGetter<CalendarEventType> = (event: CalendarEventType, start: Date, end: Date, isSelected: boolean) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    console.log({ onDoubleClick: event })
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={
          {
            event: CalendarEvent
          }
        }
      />
    </>
  )
}

export default CalendarPage