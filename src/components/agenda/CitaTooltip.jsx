import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Room from "@material-ui/icons/Room";
import { withStyles } from "@material-ui/core/styles";

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: "center",
  },
  header: {
    height: "260px",
    backgroundSize: "cover",
  },
  commandButton: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
});

const Header = withStyles(style, { name: "Header" })(
  ({ children, style, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Header
      {...restProps}
      style={{
        ...style,
        background: `url(${appointmentData.fondo})`,
        height: "260px",
        backgroundSize: "cover",
      }}
      appointmentData={appointmentData}
    >
      <IconButton
        onClick={() => alert(JSON.stringify(appointmentData))}
        className={classes.commandButton}
      >
        <MoreIcon />
      </IconButton>
    </AppointmentTooltip.Header>
  )
);

const Content = withStyles(style, { name: "Content" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Grid container alignItems="center">
        <Grid item xs={2} className={classes.textCenter}>
          <Room className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{appointmentData.location}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )
);

const CommandButton = withStyles(style, {
  name: "CommandButton",
})(({ classes, ...restProps }) => (
  <AppointmentTooltip.CommandButton
    {...restProps}
    className={classes.commandButton}
  />
));

export { Header, Content, CommandButton };
