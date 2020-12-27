import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import '../CSS/Drawer.css';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Resume from '../Screens/Resume';
import Contact from '../Screens/Contact';


const history = createBrowserHistory();




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    // borderWidth:2,
    // borderColor:'brown' 
    backgroundColor:'violet'
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: 'pink',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: 'pink',
    borderRight:'black',
    borderWidth:1,
    borderStyle:'solid',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    // box-shadow: 2px 0 3px 3px grey;
    

    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // backgroundColor:'grey',
    padding: theme.spacing(0),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

	const iconArr = [
		<HomeIcon />,
		<InfoIcon />,
		<DescriptionIcon />,
		<ContactPhoneIcon />,
	];
	const toArr = ["/home", "/about", "/resume", "/contact"];



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar id='appBar'
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
          id='iconButton'
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon id='MenuIcon'/>
          </IconButton>
          <Typography id='appbarTitle' variant="h6" noWrap>
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Router history={history}>
      <Drawer 
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton id='backbutton'onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'About', 'Resume', 'Contact'].map((text, index) => (
            <ListItem button key={text} component={Link} to={toArr[index]} id='listItem'>
              <ListItemIcon id='listItemicon'> {iconArr[index]}</ListItemIcon>
              <ListItemText  primary={text} />
            </ListItem>
          ))}
        </List>
       
      </Drawer >
      <main className={classes.content}>
					<div className={classes.toolbar} />
					{/* <Typography><StickyHeadTable/></Typography> */}
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
          <Route
						exact
						path="/resume"
						component={Resume}
					/>
					<Route exact path="/contact" component={Contact} />
				 
					
				</main>
        
      
      </Router>
    </div>
  );
}
