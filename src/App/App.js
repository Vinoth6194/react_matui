import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import SideMenu from "../components/SideMenu";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import "./App.css";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});
const useStyes = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyes();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="New Employee"
          subTitle="Form design with validation"
          icon={<PeopleOutlineTwoToneIcon />}
        ></PageHeader>
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
