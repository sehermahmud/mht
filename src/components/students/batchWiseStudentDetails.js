import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import DashboardIcon from '@material-ui/icons/Dashboard';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import ReactToPrint from 'react-to-print';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [];

const drawerWidth = 300;

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered"
        width="100%"
        style={{
          // marginLeft: '0.5em',
          // marginRight: '0.5em',
          marginTop: '0.5em',
          marginBottom: '0.5em',
        }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: '12em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student's Number
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Guardian's Number
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Email Address
            </th>
            <th scope="col" style={{ width: '8em' }}>
              School Name
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Special Note
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export class BatchWiseStudentDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      batch: '',
      batchs: [],
    };
  }

  generatePDF = () => {
    var doc = new jsPDF('p', 'pt');

    doc.autoTable({
      theme: 'plain',
      head: [
        [
          'Student Name',
          "Student's Number",
          "Guardian's Number",
          'Email Address',
          'School Name',
          'Special Note',
        ],
      ],
      body: [[]],
    });

    doc.save('activeStudent.pdf');
  };

  componentDidMount(id) {
    axios
      .get(
        'https://mht-backend.herokuapp.com/subjects/' +
          '5f846ec167f0f40472a094ac/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ batchs: response.data });
        console.log('batchs: ', this.state.batchs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {
      batchSubject,
      sllabys,
      grade,
      EndDate,
      Batch,
      batchSchedule,
      expectedStudents,
    } = this.state.batchs;

    const csvData = [
      {
        StudentName: '',
        StudentNumber: '',
        GuardianNumber: '',
        EmailAddress: '',
        SchoolName: '',
        SpecialNote: '',
      },
    ];

    return (
      <div style={{ marginTop: '4em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Batch Details
        </Typography>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '1rem',
            color: 'white',
          }}
        >
          Home-Student-BatchWiseStudent {batchSubject}-{sllabys}-{grade}-
          {EndDate && EndDate.substring(2, 4)}-{Batch}
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #00695c',
            background: '#00695c',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  batch Name: {batchSubject}-{sllabys}-{grade}-
                  {EndDate && EndDate.substring(2, 4)}-{Batch}
                </Typography>
                <Typography
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                  variant="h5"
                >
                  Schedule: {batchSchedule}
                </Typography>
                <Typography
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                  variant="h5"
                >
                  Expected Student: {expectedStudents}
                </Typography>
              </Grid>
              <Grid item container direction="column" sm>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  Atmited Students:{' '}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  Active Students:
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginBottom: '0.3em', marginTop: '0.3em' }}
                >
                  InActive Students:
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <hr
          style={{
            marginBottom: '1em',
            marginTop: '1em',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: '0.8em' }}>
              Active Student List
            </Typography>
            <div style={{ margin: 0 }}>
              <Button
                elevation={1}
                variant="contained"
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
              >
                <CSVLink
                  data={csvData}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  CSV
                </CSVLink>
              </Button>
              <ExcelFile
                element={
                  <Button
                    elevation={1}
                    variant="contained"
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                  >
                    Excel
                  </Button>
                }
              >
                <ExcelSheet data={dataSet1} name="Employees">
                  <ExcelColumn label="Student name" value="name" />
                  <ExcelColumn label="Student's Number" value="StudentNumber" />
                  <ExcelColumn
                    label="Guardian's Number"
                    value="GuardianNumber"
                  />
                  <ExcelColumn label="EmailAddress" value="EmailAddress" />
                  <ExcelColumn label="SchoolName" value="SchoolName" />
                  <ExcelColumn label="SpecialNote" value="SpecialNote" />
                </ExcelSheet>
              </ExcelFile>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
                variant="contained"
                onClick={this.generatePDF}
              >
                PDF
              </Button>
              <ReactToPrint
                trigger={() => (
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    <Typography
                      style={{ color: 'black', textDecoration: 'none' }}
                      href="#"
                    >
                      Print
                    </Typography>
                  </Button>
                )}
                content={() => this.componentRef}
              />
            </div>
            <br />
            <ComponentToPrint ref={(el) => (this.componentRef = el)} />
          </CardContent>
        </Card>
        <hr
          style={{
            marginBottom: '1em',
            marginTop: '1em',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: '0.8em' }}>
              InActive Students List
            </Typography>
            <br />
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col" style={{ width: '12em' }}>
                    Student Name
                  </th>
                  <th scope="col" style={{ width: '5em' }}>
                    Student's Number
                  </th>
                  <th scope="col" style={{ width: '5em' }}>
                    Guardian's Number
                  </th>
                  <th scope="col" style={{ width: '10em' }}>
                    Email Address
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    School Name
                  </th>
                  <th scope="col" style={{ width: '8em' }}>
                    Special Note
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}

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
    background: 'linear-gradient(45deg, #6a1b9a 30%, #e91e63 50%, #2196f3 90%)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'linear-gradient(45deg, #6a1b9a 30%, #e91e63 50%, #2196f3 90%)',
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
    backgroundColor: '#00bfa5',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: '#00bfa5',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: '#00bfa5',
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
    padding: theme.spacing(0),
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
  hover: {
    '&:hover': {
      background: 'none',
    },
  },
  Summary: {
    padding: 0,
  },
  icon: {
    marginRight: '2.2em',
  },
  TeacherIcon: {
    marginRight: '20px',
  },
  ReportingIcon: {
    marginRight: '1px',
  },
  UserIcon: {
    marginRight: '3px',
  },
  studentPaymentIcon: {
    marginleft: '10px',
  },
  paymentsSummary: {
    color: '#7c4dff',
  },
  fontStyle: {
    '&:hover': {
      textDecoration: 'none',
    },
    color: 'white',
    margin: 0,
    padding: 0,
    marginLeft: '1em',
  },
  ChevronLeftIcon: {
    marginRight: '28px',
  },
  MHT: {
    fontSize: '2.5em',
    fontFamily: 'Merienda One',
    marginRight: '1.5em',
  },
}));

export default function MiniDrawer(props) {
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
      <CssBaseline />
      <AppBar
        style={{ color: '#004d40' }}
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            className={classes.MHT}
            style={{ color: 'black' }}
          >
            MHT
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ background: 'red' }}
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
          // paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <div className={classes.MHTfont}>
            <Typography className={classes.MHT}>MHT</Typography>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <MenuIcon style={{ color: 'white', marginRight: '0.5em' }} />
            ) : (
              <MenuIcon style={{ color: 'white', marginRight: '0.5em' }} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon style={{ marginLeft: '0.7em' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  className={classes.fontStyle}
                  style={{
                    textDecoration: 'none',
                    hover: {
                      '&:hover': {
                        background: 'none',
                        textDecoration: 'none',
                        color: 'white',
                      },
                    },
                  }}
                >
                  Dashboard
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Students</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '3.8em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <Link to="/students/addStudent">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      All Students
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/activeStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Active Students
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/batchwise">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Batch wise Student
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/allStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Add New Student
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Accordion elevation={0} style={{ background: '#00bfa5' }}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <Typography style={{ color: 'white' }}>
                    Payment Section
                  </Typography>
                  <ListItemIcon>
                    <ChevronLeftIcon style={{ marginLeft: '1.3em' }} />
                  </ListItemIcon>
                </AccordionSummary>
                <Link to="/students/payments/batchPayment">
                  <ListItem button>
                    <ListItemIcon>
                      <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography style={{ color: 'white' }}>
                        Batch payments
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link to="/students/payments/otherPayment">
                  <ListItem button>
                    <ListItemIcon>
                      <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography style={{ color: 'white' }}>
                        other payments
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Link>
              </Accordion>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Teacher</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '4.1em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <Link to="/teacher">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Add Teacher
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/teachers/teacherPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Teacher payment
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Reporting</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '3.5em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <Link to="">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Reporting Dashboard
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/dailyPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Daily payment
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/otherPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Other payment
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
          <ListItem button>
            <Accordion
              elevation={0}
              className={classes.hover}
              style={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <Typography style={{ color: 'white' }}>Settings</Typography>
                <ListItemIcon>
                  <ChevronLeftIcon style={{ marginLeft: '4em' }} />
                </ListItemIcon>
              </AccordionSummary>
              <ListItem button>
                <Accordion
                  elevation={0}
                  className={classes.hover}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItemIcon>
                      <FileCopyIcon />
                    </ListItemIcon>
                    <Typography style={{ color: 'white' }}>User</Typography>
                    <ListItemIcon>
                      <ChevronLeftIcon style={{ marginLeft: '5.1em' }} />
                    </ListItemIcon>
                  </AccordionSummary>
                  <Link to="/user/allUser">
                    <ListItem button>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon
                          style={{ marginLeft: '0.7em' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography style={{ color: 'white' }}>
                          All User
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/user/addUser">
                    <ListItem button>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon
                          style={{ marginLeft: '0.7em' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography style={{ color: 'white' }}>
                          Add User
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/user/editUser">
                    <ListItem button>
                      <ListItemIcon>
                        <RadioButtonUncheckedIcon
                          style={{ marginLeft: '0.7em' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography style={{ color: 'white' }}>
                          Edit User
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                </Accordion>
              </ListItem>
              <Link to="/sllabys">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>
                      Sllabys
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/school">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>
                      School
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/subject">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>
                      Subjects
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/grade">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.fontStyle}>Grade</Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <BatchWiseStudentDetails {...props} />
      </main>
    </div>
  );
}
