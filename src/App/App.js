import { makeStyles } from "@material-ui/core";
import SideMenu from "../components/SideMenu";
import "./App.css";
const useStyes = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyes();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>Here we go</div>;
    </>
  );
}

export default App;
