import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Grid } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  link: {
    fontFamily: 'Handlee',
    textTransform: 'none',
    fontSize: '1.2em',
    fontWeight: 600,
    background: '#651fff',
    color: 'white',
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
    },
  },
}));

export default function header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link href="/">
              <a></a>
            </Link>
          </Typography>
          <Grid container direction="row" justify="flex-end">
            <Button className={classes.link}>
              <Link underline="none" href="/auth/signin">
                <a className="padding: 0">
                  <Typography>SignIn</Typography>
                </a>
              </Link>
            </Button>
            <Button className={classes.link}>
              <Link underline="none" href="/auth/signup">
                <a className="padding: 0">
                  <Typography>SignUp</Typography>
                </a>
              </Link>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText>
              <Link href="/Dashboard">
                <a>Dashboard</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Students</Typography>
              </AccordionSummary>
              <ListItem button>
                <ListItemText>
                  <Link href="/students/allStudents">
                    <a>All Students</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link href="/students/activeStudents">
                    <a>Active Students</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link href="/students/addStudents">
                    <a>Add New Students</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>payments</Typography>
                </AccordionSummary>
                <ListItem button>
                  <ListItemText>
                    <Link href="/students/payments/batchPayment">
                      <a>Batch payments</a>
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link href="/students/payments/otherPayment">
                      <a>other payments</a>
                    </Link>
                  </ListItemText>
                </ListItem>
              </Accordion>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Teacher</Typography>
              </AccordionSummary>
              <ListItem button>
                <ListItemText>
                  <Link href="/teachers/Teacher">
                    <a>Add Teacher</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link href="/teachers/teacherPayment">
                    <a>Teacher payment</a>
                  </Link>
                </ListItemText>
              </ListItem>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Reporting</Typography>
              </AccordionSummary>
              <ListItem button>
                <ListItemText>
                  <Link href="/reporting/dailyPayment">
                    <a>Daily payment</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link href="/reporting/otherPayment">
                    <a>Other payment</a>
                  </Link>
                </ListItemText>
              </ListItem>
            </Accordion>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/sllabys/allSllabys">
                <a>Sllabys</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/schools/school">
                <a>School</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/subjects/subject">
                <a>Subjects</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Link href="/grade/grade">
                <a>Grade</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>User</Typography>
              </AccordionSummary>
              <ListItem button>
                <ListItemText>
                  <Link href="/user/allUser">
                    <a>All User</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link href="/user/addUser">
                    <a>Add User</a>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link href="/user/editUser">
                    <a>Edit User</a>
                  </Link>
                </ListItemText>
              </ListItem>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Settings</Typography>
              </AccordionSummary>
              <ListItem button>
                <ListItemText>
                  <Link href="/user/editUser">
                    <a>asas</a>
                  </Link>
                </ListItemText>
              </ListItem>
            </Accordion>
          </ListItem>
        </List>
      </Drawer>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main> */}
    </div>
  );
}
