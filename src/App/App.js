import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
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
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
