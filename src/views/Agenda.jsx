import { useState, useCallback, useMemo, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import NavbarComponent from "../components/home/NavbarComponent";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import img1 from "./../assets/img/eventos/carnaval.jpg";
import img2 from "./../assets/img/eventos/batalla.jpg";
import img3 from "./../assets/img/eventos/junior.jpeg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {
  Header,
  Content,
  CommandButton,
} from "./../components/agenda/CitaTooltip";

const appointments = [
  {
    title: "Carnaval",
    startDate: new Date(2021, 5,3 , 12, 35),
    endDate: new Date(2021, 5, 3, 15, 0),
    fondo: img1,
    // link:
  },
  {
    title: "Batalla de flores",
    startDate: new Date(2021, 5, 4, 12, 35),
    endDate: new Date(2021, 5, 4, 15, 0),
    fondo: img2,
    // link:
  },
  {
    title: "Junior vs Nacional",
    startDate: new Date(2021, 5, 1, 12, 35),
    endDate: new Date(2021, 5, 1, 15, 0),
    fondo: img3,
    // link:
  },
];

const Appointment = ({
  style,
  children,
  data,
  onClick,
  classes,
  updateEverything,
  ...restProps
}) => {
  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#FFFFFF",
      }}
    >
      <>
        <div
          className="card_horario"
          onClick={({ target }) => {
            updateEverything({
              target:
                target.parentElement.parentElement.parentElement.parentElement
                  .parentElement.parentElement,
              data,
            });
          }}
        >
          <div className="bgGreenCita">
            <Row>
              <Col xs="12" className="image_card">
                <img
                  src={data.fondo}
                  className="imagenCita"
                  alt="Quilla-Tour"
                />
                <h5 className="tituloCita">{data.title}</h5>
              </Col>
            </Row>
          </div>
        </div>
      </>
    </Appointments.Appointment>
  );
};

const initialState = {
  data: appointments,
  visible: false,
  appointmentMeta: {
    target: null,
    data: {},
  },
};

const Agenda = (props) => {
  const [state, setState] = useState(initialState);

  const { data, appointmentMeta, visible } = state;

  const toggleVisibility = () => {
    const { visible: tooltipVisibility } = state;
    setState({ ...state, visible: !tooltipVisibility });
  };

  const onAppointmentMetaChange = ({ data, target }) => {
    setState({ ...state, appointmentMeta: { data, target } });
  };

  const updateEverything = ({ data, target }) => {
    const { visible: tooltipVisibility } = state;
    setState({
      ...state,
      visible: !tooltipVisibility,
      appointmentMeta: { data, target },
    });
  };

  const renderAppointment = (props) => {
    return <Appointment {...props} updateEverything={updateEverything} />;
  };

  return (
    <>
    <NavbarComponent color={"dark"} />
      <Paper style = {{marginTop: "75px"}}>
        <Scheduler data={data}>
          <ViewState defaultCurrentDate="2021-06-03" />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments appointmentComponent={renderAppointment} />
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            visible={visible}
            onVisibilityChange={toggleVisibility}
            appointmentMeta={appointmentMeta}
            onAppointmentMetaChange={onAppointmentMetaChange}
            showCloseButton
          />
        </Scheduler>
      </Paper>
    </>
  );
};

export default Agenda;
