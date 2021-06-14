import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    left: '0px',
    width: '320px',
    position: 'absolute',
    backgroundColor: '#253053',
  },
});

function SideMenu() {
  const classes = useStyles();
  console.log(classes);
  return <div className={classes.sideMenu}></div>;
}

export default SideMenu;
