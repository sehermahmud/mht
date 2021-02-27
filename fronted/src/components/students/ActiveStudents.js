import React, { useState, Component } from 'react';
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
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputBase,
  Paper,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

const drawerWidth = 300;

const Students = (props) => (
  <tr>
    <td>{props.student.studentFullName}</td>
    <td>{props.student.studentPhoneNumber}</td>
    <td>{props.student.guardianPhoneNumber}</td>
    <td>{props.student.specialNote}</td>
    <td>{props.student.checked}</td>
    <td></td>
    <td>
      <Button
        style={{
          color: 'white',
          background: 'linear-gradient(45deg, #311b92 30%, #673ab7 90%)',
          marginLeft: '0.5em',
          marginRight: '0.5em',
          marginTop: '0.3em',
          marginBottom: '0.3em',
          textTransform: 'none',
          fontSize: '0.9em',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/students/StudentDetails/' + props.student._id}
        >
          Details
        </Link>
      </Button>
      <Button
        style={{
          color: 'white',
          marginLeft: '0.5em',
          marginRight: '0.5em',
          marginTop: '0.3em',
          marginBottom: '0.3em',
          background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
          textTransform: 'none',
          fontSize: '0.9em',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/editStudent/' + props.student._id}
        >
          Edit
        </Link>
      </Button>
    </td>
  </tr>
);

export class AllStudents extends Component {
  constructor(props) {
    super(props);

    // this.handleChange15 = this.handleChange15.bind(this);
    this.onChangeStudentFullName = this.onChangeStudentFullName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeMotherName = this.onChangeMotherName.bind(this);
    this.onChangeStudentPhoneNumber = this.onChangeStudentPhoneNumber.bind(
      this
    );
    this.onChangeGuardianPhoneNumber = this.onChangeGuardianPhoneNumber.bind(
      this
    );
    this.onChangeSpecialNote = this.onChangeSpecialNote.bind(this);
    this.onChangeStudentPhoto = this.onChangeStudentPhoto.bind(this);
    this.onChangeStudentSchool = this.onChangeStudentSchool.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);

    this.state = {
      studentFullName: '',
      email: '',
      fatherName: '',
      motherName: '',
      studentPhoneNumber: '',
      guardianPhoneNumber: '',
      specialNote: '',
      studentPhoto: '',
      studentSchool: '',
      sllabys: '',
      subject: '',
      StartDate: new Date(),
      students: [],
      query: '',
      filteredData: [],
    };
  }

  onChangeStudentFullName(e) {
    this.setState({
      studentFullName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeFatherName(e) {
    this.setState({
      fatherName: e.target.value,
    });
  }

  onChangeMotherName(e) {
    this.setState({
      motherName: e.target.value,
    });
  }

  onChangeStudentPhoneNumber(e) {
    this.setState({
      studentPhoneNumber: e.target.value,
    });
  }

  onChangeGuardianPhoneNumber(e) {
    this.setState({
      guardianPhoneNumber: e.target.value,
    });
  }

  onChangeSpecialNote(e) {
    this.setState({
      specialNote: e.target.value,
    });
  }

  onChangeStudentPhoto(e) {
    this.setState({
      studentPhoto: e.target.value,
    });
  }

  onChangeStudentSchool(e) {
    this.setState({
      studentSchool: e.target.value,
    });
  }

  onChangeSllabys(e) {
    this.setState({
      sllabys: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeStartDate(e) {
    this.setState({
      StartDate: e.target.value,
    });
  }

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.students.filter((student) => {
        return (
          student.studentFullName.toLowerCase().includes(query.toLowerCase()) ||
          student.studentPhoneNumber
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          student.guardianPhoneNumber
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          student.specialNote.toLowerCase().includes(query.toLowerCase())
        );
      });

      return {
        query,
        filteredData,
      };
    });
  };

  // && student.specialNote

  getData = () => {
    fetch('http://localhost:4000/students/')
      .then((response) => response.json())
      .then((students) => {
        const { query } = this.state;
        const filteredData = students.filter((student) => {
          return (
            student.studentFullName
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            student.studentPhoneNumber
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            student.guardianPhoneNumber
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            student.specialNote.toLowerCase().includes(query.toLowerCase())
          );
        });

        this.setState({
          students,
          filteredData,
        });
      });
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/students/')
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.state);

    // this.getData();
  }

  studentlist() {
    return this.state.students.map((currentStudents) => {
      return <Students student={currentStudents} key={currentStudents._id} />;
    });
  }

  render() {
    const userAttributes = [];
    this.state.students.forEach((el) => {
      userAttributes.push({
        StudentName: el.studentFullName,
        StudentNumber: el.studentPhoneNumber,
        GuardianNumber: el.guardianPhoneNumber,
        SpecialNote: el.specialNote,
        Batch: el.checked,
        TotalPayableAmount: '',
        Actions: (
          <React.Fragment>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #311b92 30%, #673ab7 90%)',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/students/StudentDetails/' + el._id}
                target="_blank"
              >
                Details
              </Link>
            </Button>
            <Button
              style={{
                color: 'white',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/editStudent/' + el._id}
              >
                Edit
              </Link>
            </Button>
          </React.Fragment>
        ),
      });
    });

    const data = {
      columns: [
        {
          label: 'Student Name',
          field: 'StudentName',
          sort: 'asc',
          width: '20em',
        },
        {
          label: 'Student Number',
          field: 'StudentNumber',
          sort: 'asc',
          width: '11em',
        },
        {
          label: 'Guardian Number',
          field: 'GuardianNumber',
          sort: 'asc',
          width: '11em',
        },
        {
          label: 'Special Note',
          field: 'SpecialNote',
          sort: 'asc',
          width: '15em',
        },
        {
          label: 'Batch',
          field: 'Batch',
          width: '18em',
        },
        {
          label: 'Total Payable amount/=',
          field: 'TotalPayableAmount',
          sort: 'asc',
          width: '18em',
        },
        {
          label: 'Actions',
          field: 'Actions',
          maxWidth: '10em',
        },
      ],
      rows: userAttributes,
    };
    return (
      <div style={{ marginTop: '3em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Student Module
        </Typography>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '5rem',
            color: 'white',
          }}
        >
          Home-Student-ActiveStudent
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            width: '100%',
          }}
        />
        <Card
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h5" style={{ marginBottom: '0.1em' }}>
              Active Student List
            </Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '0.5em',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
              }}
            />
            {/* <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <td scope="col" style={{ width: '12em' }}>
                    Student Name
                  </td>
                  <td scope="col" style={{ width: '8em' }}>
                    Student Number
                  </td>
                  <td scope="col" style={{ width: '8em' }}>
                    Guardian Number
                  </td>
                  <td scope="col" style={{ width: '6em' }}>
                    Special Note
                  </td>
                  <td scope="col" style={{ width: '18em' }}>
                    Batch
                  </td>
                  <td scope="col" style={{ width: '8em' }}>
                    Total Payable amount/=
                  </td>
                  <td scope="col" style={{ width: '3em' }}>
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>{this.studentlist()}</tbody>
            </table> */}
            <br />
            <MDBDataTable bordered striped data={data} />
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

export default function MiniDrawer() {
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
            style={{
              color: 'black',
              fontSize: '2.5em',
              fontFamily: 'Merienda One',
              marginRight: '1.5em',
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
              <CloseIcon style={{ color: 'white', marginRight: '0.5em' }} />
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
              <Link to="/students/addStudent">
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
        <AllStudents />
      </main>
    </div>
  );
}