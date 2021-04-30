import {useState, useCallback, useMemo, useEffect} from "react"
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import React from "react"
import { Eventcalendar, getJson, toast, localeEs } from '@mobiscroll/react';

function Agenda() {

    const evento = [{"start":"2021-05-03T08:00:00.000Z","end":"2021-05-06T17:00:00.000Z"}];

    const [myEvents, setEvents] = useState([]);
    useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(evento);
        }, 'jsonp');
    }, []);
    
    const onEventClick = useCallback((event) => {
        toast({
            message: event.event.title,
            duration: 10000
        });
    }, []);
    
    const view = useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);

    return (
            <Eventcalendar
                locale={localeEs}
                theme="ios" 
                themeVariant="light"
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                height={697}
                data={myEvents}
                view={view}
                onEventClick={onEventClick}
           />
    ); 
}

export default Agenda