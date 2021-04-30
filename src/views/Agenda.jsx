import {useState, useCallback, useMemo, useEffect} from "react"
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import React from "react"
import { Eventcalendar, getJson, toast, localeEs } from '@mobiscroll/react';

function Agenda() {

    //const evento = [{"start":"2021-05-03T08:00:00.000Z","end":"2021-05-06T17:00:00.000Z","title":"Business of Software Conference","color":"#ff6d42"},{"start":"2021-05-01T12:00:00.000Z","end":"2021-05-02T20:00:00.000Z","title":"Friends binge marathon","color":"#7bde83"},{"start":"2021-05-08T12:00:00.000Z","end":"2021-05-09T20:00:00.000Z","title":"Friends binge marathon","color":"#7bde83"},{"start":"2021-04-30T06:00:00.000Z","end":"2021-04-30T07:00:00.000Z","title":"Product team mtg.","color":"#913aa7"},{"start":"2021-04-30T13:00:00.000Z","end":"2021-04-30T14:00:00.000Z","title":"General orientation","color":"#35bb5a"},{"start":"2021-04-30T17:00:00.000Z","end":"2021-04-30T18:00:00.000Z","title":"Clever Conference","color":"#a71111"},{"start":"2021-05-01T06:00:00.000Z","end":"2021-05-01T07:00:00.000Z","title":"Green box to post office","color":"#6e7f29"},{"start":"2021-04-29T07:45:00.000Z","end":"2021-04-29T09:00:00.000Z","title":"Quick mtg. with Martin","color":"#de3d83"},{"start":"2021-04-08T08:30:00.000Z","end":"2021-04-08T09:30:00.000Z","title":"Product team mtg.","color":"#f67944"},{"start":"2021-04-08T10:00:00.000Z","end":"2021-04-08T10:45:00.000Z","title":"Stakeholder mtg.","color":"#a144f6"},{"start":"2021-04-08T12:00:00.000Z","end":"2021-04-08T12:45:00.000Z","title":"Lunch @ Butcher's","color":"#00aabb"},{"recurring":{"repeat":"yearly","month":4,"day":14},"allDay":true,"title":"Dexter BD","color":"#37bbe4"},{"recurring":{"repeat":"yearly","month":4,"day":25},"allDay":true,"title":"Luke BD","color":"#37bbe4"},{"recurring":{"repeat":"weekly","weekDays":"WE"},"allDay":true,"title":"Employment (Semi-weekly)","color":"#228c73"},{"start":"2021-04-09T23:00:00.000Z","end":"2021-04-14T23:00:00.000Z","allDay":true,"title":"Sam OFF","color":"#ca4747"},{"start":"2021-04-17T23:00:00.000Z","end":"2021-04-28T23:00:00.000Z","allDay":true,"title":"Europe tour","color":"#56ca70"},{"start":"2021-02-06T23:00:00.000Z","end":"2021-02-24T23:00:00.000Z","allDay":true,"title":"Dean OFF","color":"#99ff33"},{"start":"2021-03-04T23:00:00.000Z","end":"2021-03-13T23:00:00.000Z","allDay":true,"title":"Mike OFF","color":"#e7b300"},{"start":"2021-05-06T23:00:00.000Z","end":"2021-05-15T23:00:00.000Z","allDay":true,"title":"John OFF","color":"#669900"},{"start":"2021-05-31T23:00:00.000Z","end":"2021-06-10T23:00:00.000Z","allDay":true,"title":"Carol OFF","color":"#6699ff"},{"start":"2021-07-01T23:00:00.000Z","end":"2021-07-16T23:00:00.000Z","allDay":true,"title":"Jason OFF","color":"#cc9900"},{"start":"2021-08-05T23:00:00.000Z","end":"2021-08-13T23:00:00.000Z","allDay":true,"title":"Ashley OFF","color":"#339966"},{"start":"2021-09-09T23:00:00.000Z","end":"2021-09-19T23:00:00.000Z","allDay":true,"title":"Marisol OFF","color":"#8701a9"},{"start":"2021-09-30T23:00:00.000Z","end":"2021-10-11T23:00:00.000Z","allDay":true,"title":"Sharon OFF","color":"#cc6699"},{"recurring":{"repeat":"yearly","month":12,"day":25},"allDay":true,"title":"Christmas Day","color":"#ff0066"},{"recurring":{"repeat":"yearly","month":1,"day":1},"allDay":true,"title":"New Year's day","color":"#99ccff"},{"recurring":{"repeat":"yearly","month":4,"day":1},"allDay":true,"title":"April Fool's Day","color":"#ff6666"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 720 for the third quarter","color":"#147ea6"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 730 and pay tax on wagers accepted during September","color":"#a73a4e"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 2290 and pay the tax for vehicles first used during September","color":"#218e0d"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 941 for the third quarter","color":"#a67914"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"Deposit FUTA owed through Sep if more than $500","color":"#3c0707"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies","color":"#14a618"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"File Form 730 and pay tax on wagers accepted during October","color":"#722ac1"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"File Form 2290 and pay the tax for vehicles first used during October","color":"#256069"}];

    const [myEvents, setEvents] = useState([]);
    //setEvents(evento)
    useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
            console.log(events)
        }, 'jsonp');
    }, []);
    
    const onEventClick = useCallback((event) => {
        toast({
            message: event.event.title
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