import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase,
  Paper,
  Hidden,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class EditBatchTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeBatch = this.onChangeBatch.bind(this);
    this.onChangeBatchPrice = this.onChangeBatchPrice.bind(this);
    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeBatchSchedule = this.onChangeBatchSchedule.bind(this);
    this.onChangeExpectedStudents = this.onChangeExpectedStudents.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Batch: '',
      batchPrice: 0,
      sllabys: '',
      grade: '',
      batchSubject: '',
      batchSchedule: '',
      expectedStudents: '',
      StartDate: new Date(),
      EndDate: new Date(),
      allsllabys: [],
      grades: [],
      subjects: [],
    };
  }

  // /:teacherBatchId

  componentDidMount() {
    axios
      .get(
        'http://localhost:4000/teachersBatch/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          Batch: response.data.Batch,
          batchPrice: response.data.batchPrice,
          sllabys: response.data.sllabys,
          grade: response.data.grade,
          batchSubject: response.data.batchSubject,
          batchSchedule: response.data.batchSchedule,
          expectedStudents: response.data.expectedStudents,
          StartDate: new Date(response.data.StartDate),
          EndDate: new Date(response.data.EndDate),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('http://localhost:4000/grades/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            grades: response.data.map((grading) => grading.grade),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://localhost:4000/subjects/').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          subjects: response.data.map((subject) => subject.subject),
        });
      }
    });

    axios.get('http://localhost:4000/sllabys/').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          allsllabys: response.data.map((sllabys) => sllabys.sllabys),
        });
      }
    });
  }

  onChangeBatch(e) {
    this.setState({ Batch: e.target.value });
  }

  onChangeBatchPrice(e) {
    this.setState({ batchPrice: e.target.value });
  }

  onChangeSllabys(e) {
    this.setState({ sllabys: e.target.value });
  }

  onChangeSubject(e) {
    this.setState({ batchSubject: e.target.value });
  }

  onChangeGrade(e) {
    this.setState({ grade: e.target.value });
  }

  onChangeBatchSchedule(e) {
    this.setState({ batchSchedule: e.target.value });
  }

  onChangeExpectedStudents(e) {
    this.setState({ expectedStudents: e.target.value });
  }

  onChangeStartDate(date) {
    this.setState({ StartDate: date });
  }

  onChangeEndDate(date) {
    this.setState({ EndDate: date });
  }

  onSubmit(e) {
    e.preventDefault();

    const teacher = {
      Batch: this.state.Batch,
      batchPrice: this.state.batchPrice,
      sllabys: this.state.sllabys.substring(0, 3),
      batchSubject: this.state.batchSubject.substring(0, 3),
      grade: this.state.grade,
      batchSchedule: this.state.batchSchedule,
      expectedStudents: this.state.expectedStudents,
      StartDate: this.state.StartDate,
      EndDate: this.state.EndDate,
    };

    console.log(teacher);

    axios
      .post(
        'http://localhost:4000/teachersBatch/update/' +
          this.props.match.params.id,
        teacher
      )
      .then((res) => console.log(res.data));

    axios
      .post(
        'http://localhost:4000/batchs/update/' + this.props.match.params.id,
        teacher
      )
      .then((res) => console.log(res.data));

    window.location = '/teacher';
  }

  render() {
    return (
      <div style={{ marginTop: '3em' }}>
        <Card
          style={{
            marginRight: '1em',
            marginLeft: '1em',
            display: 'flex',
            flexWrap: 'wrap',
          }}
          elevation={1}
        >
          <CardContent>
            <from>
              <Typography
                variant="h5"
                style={{
                  margin: '2px',
                }}
              >
                Edit Batch
              </Typography>
              <hr
                style={{
                  border: '1px solid #00796b',
                  background: '#00796b',
                  marginTop: '0em',
                }}
              />
              <br />
              <div className="form-row">
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Batch No.</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Batch"
                    value={this.state.Batch}
                    onChange={this.onChangeBatch}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    value={this.state.batchPrice}
                    onChange={this.onChangeBatchPrice}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Education Board</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.sllabys}
                    onChange={this.onChangeSllabys}
                  >
                    {this.state.allsllabys.map(function (sllabys) {
                      return (
                        <option key={sllabys} value={sllabys}>
                          {sllabys}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Grade</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.grade}
                    onChange={this.onChangeGrade}
                  >
                    {this.state.grades.map(function (grading) {
                      return (
                        <option key={grading} value={grading}>
                          {grading}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Subject</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.batchSubject}
                    onChange={this.onChangeSubject}
                  >
                    {this.state.subjects.map(function (subject) {
                      return (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Schedule</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Schedule"
                    value={this.state.batchSchedule}
                    onChange={this.onChangeBatchSchedule}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <label>Expected Students</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expected Students"
                    value={this.state.expectedStudents}
                    onChange={this.onChangeExpectedStudents}
                  />
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      margin="normal"
                      format="dd/MM/yyyy"
                      label="Start Date"
                      value={this.state.StartDate}
                      onChange={this.onChangeStartDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="col-4" style={{ marginBottom: '1.5rem' }}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      margin="normal"
                      format="dd/MM/yyyy"
                      label="End Date"
                      value={this.state.EndDate}
                      onChange={this.onChangeEndDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <Button
                  style={{
                    color: '#2196f3',
                    border: '1px solid #2196f3',
                    marginTop: '5em',
                    marginLeft: '1em',
                  }}
                >
                  <Link to="/teacher">Cancel</Link>
                </Button>
                <Button
                  className="btn btn-danger"
                  style={{
                    background: '#00e676',
                    color: 'white',
                    marginTop: '5em',
                    marginLeft: '62em',
                  }}
                  onClick={this.onSubmit}
                >
                  Update
                </Button>
              </div>
            </from>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const drawerWidth = 300;

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
    background: 'linear-gradient(45deg, #1565c0 30%, #ffffff 50%, #6a1b9a 90%)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'linear-gradient(45deg, #1565c0 30%, #ffffff 50%, #6a1b9a 90%)',
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
    padding: theme.spacing(3),
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
            style={{
              fontSize: '2.5em',
              fontFamily: 'Merienda One',
              marginRight: '1.5em',
              color: 'black',
            }}
            className={clsx({
              [classes.hide]: open,
            })}
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
          <Link to="/Dashboard">
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon style={{ marginLeft: '0.7em' }} />
              </ListItemIcon>
              <ListItemText>
                <a
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
                </a>
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
              <Link to="/students/addStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>All Students</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/activeStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>Active Students</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/batchwise">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>Batch wise Student</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/students/allStudents">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>Add New Student</a>
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
                      <a style={{ color: 'white' }}>Batch payments</a>
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link to="/students/payments/otherPayment">
                  <ListItem button>
                    <ListItemIcon>
                      <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <a style={{ color: 'white' }}>other payments</a>
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
                    <a style={{ color: 'white' }}>Add Teacher</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/teachers/teacherPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>Teacher payment</a>
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
                    <a style={{ color: 'white' }}>Reporting Dashboard</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/dailyPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>Daily payment</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/otherPayment">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <a style={{ color: 'white' }}>Other payment</a>
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
                        <a style={{ color: 'white' }}>All User</a>
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
                        <a style={{ color: 'white' }}>Add User</a>
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
                        <a style={{ color: 'white' }}>Edit User</a>
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
                    <a className={classes.fontStyle}>Sllabys</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/school">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <a className={classes.fontStyle}>School</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/subject">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <a className={classes.fontStyle}>Subjects</a>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/grade">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon style={{ marginLeft: '0.7em' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <a className={classes.fontStyle}>Grade</a>
                  </ListItemText>
                </ListItem>
              </Link>
            </Accordion>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <EditBatchTeacher {...props} />
      </main>
    </div>
  );
}
