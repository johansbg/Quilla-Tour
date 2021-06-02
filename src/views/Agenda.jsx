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
import img1 from './../assets/img/eventos/carnaval.jpg';
import img2 from './../assets/img/eventos/batalla.jpg';
import img3 from './../assets/img/eventos/junior.jpeg';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

const appointments = [
  {
    title: "Carnaval",
    startDate: new Date(2018, 5, 25, 12, 35),
    endDate: new Date(2018, 5, 25, 15, 0),
    fondo: img1,
    // link:
    
  },
  {
    title: "Batalla de flores",
    startDate: new Date(2018, 5, 26, 12, 35),
    endDate: new Date(2018, 5, 26, 15, 0),
    fondo: img2,
    // link:
  },
  {
    title: "Junior vs Nacional",
    startDate: new Date(2018, 5, 29, 12, 35),
    endDate: new Date(2018, 5, 29, 15, 0),
    fondo: img3,
    // link:
  }
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
              <img src={model.data.fondo} className="imagenCita" alt="Quilla-Tour" />
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
