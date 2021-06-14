import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import './App.css';
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});
function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}

export default App;
