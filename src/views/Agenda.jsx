import { useState, useCallback, useMemo, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import img from './../assets/img/backgroundHomeS1.jpg';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

const appointments = [
  {
    title: "Carnaval",
    startDate: new Date(2018, 5, 25, 12, 35),
    endDate: new Date(2018, 5, 25, 15, 0)
    
  },
  {
    title: "Batalla de flores",
    startDate: new Date(2018, 5, 26, 12, 35),
    endDate: new Date(2018, 5, 26, 15, 0)
  },
  {
    title: "Paro",
    startDate: new Date(2018, 5, 27, 12, 35),
    endDate: new Date(2018, 5, 27, 15, 0)
  },
  {
    title: "asdasdsa",
    startDate: new Date(2018, 5, 28, 12, 35),
    endDate: new Date(2018, 5, 28, 15, 0)
  },
  {
    title: "Junior vs Nacional",
    startDate: new Date(2018, 5, 29, 12, 35),
    endDate: new Date(2018, 5, 29, 15, 0)
  },
];


const initialState = {
  data: appointments
};

const renderAppointment = (model) => {
  return(
    <>
      <Container fluid>
        <div className="bgGreenCita">
          <Row>
            <Col xs="4"> 
              <img src={img} className="imagenCita" alt="Quilla-Tour" />
            </Col>
            <Col xs="8">
              <p className="m-0 tituloCita">{model.data.title}</p>
              <Link to="/" className="m-0" >Ver informacion del Evento</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

function Agenda(props) {
  const [ state ] = useState(initialState);

  const { data } = state;

  return (
    <>
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2018-07-27"
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments appointmentComponent={renderAppointment}/>
        </Scheduler>
      </Paper>
    </>
  );
}

export default Agenda;
