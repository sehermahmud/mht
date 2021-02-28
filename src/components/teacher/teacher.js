import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
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
import { Button, Grid } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import DashboardIcon from '@material-ui/icons/Dashboard';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import TeacherPhoto from '../../image/teacher/teacherPhoto';
import TeacherNID from '../../image/teacher/teacherNID';
import TeacherLastCertificate from '../../image/teacher/teacherlastCertificate';
import { MDBDataTable } from 'mdbreact';

const Teacher = (props) => (
  <tr>
    <td></td>
    <td>{props.teacher.teacherName}</td>
    <td>{props.teacher.subject}</td>
    <td>
      <Button
        style={{
          color: 'white',
          background: 'purple',
          marginLeft: '1em',
          marginRight: '1em',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/teacherdetails/' + props.teacher._id}
        >
          details
        </Link>{' '}
      </Button>
      |
      <Button
        style={{
          color: 'white',
          marginLeft: '1em',
          marginRight: '1em',
          background: '#fdd835',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/editTeacher/' + props.teacher._id}
        >
          edit
        </Link>
      </Button>
      |{' '}
      <Button
        style={{
          color: 'white',
          background: '#ef5350',
          marginLeft: '1em',
          marginRight: '1em',
        }}
      >
        <Typography
          className="text-decoration-none"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            color: 'white',
          }}
        >
          delete{' '}
        </Typography>
      </Button>
    </td>
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Are you sure you want to delete the Subject? After that you can
              not get it back!
            </h5>
          </div>
          <div className="modal-footer">
            <Button
              data-dismiss="modal"
              color="primary"
              style={{
                margin: '0.5em',
                marginRight: '20em',
                color: '#2196f3',
                border: '1px solid #2196f3',
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{ margin: '0.5em', background: 'red', color: 'white' }}
              onClick={() => {
                props.deleteTeacher(props.teacher._id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  </tr>
);

export class CreateTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangePercentage = this.onChangePercentage.bind(this);
    this.onChangeTeacherPhoto = this.onChangeTeacherPhoto.bind(this);
    this.onChangeTeacherNIDPhoto = this.onChangeTeacherNIDPhoto.bind(this);
    this.onChangeTeacherLastCertificatePhoto = this.onChangeTeacherLastCertificatePhoto.bind(
      this
    );
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTeacher = this.deleteTeacher.bind(this);

    this.state = {
      teacherName: '',
      email: '',
      contactNumber: '',
      subject: '',
      percentage: 0,
      teacherPhoto: '',
      teacherNIDPhoto: '',
      teacherLastCertificatePhoto: '',
      teachers: [],
    };
  }

  onChangeTeacherName(e) {
    this.setState({
      teacherName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeContactNumber(e) {
    this.setState({
      contactNumber: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangePercentage(e) {
    this.setState({
      percentage: e.target.value,
    });
  }

  onChangeTeacherPhoto(e) {
    this.setState({
      teacherPhoto: e.target.value,
    });
  }

  onChangeTeacherNIDPhoto(e) {
    this.setState({
      teacherNIDPhoto: e.target.value,
    });
  }

  onChangeTeacherLastCertificatePhoto(e) {
    this.setState({
      teacherLastCertificatePhoto: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newTeacher = {
      teacherName: this.state.teacherName,
      email: this.state.email,
      contactNumber: this.state.contactNumber,
      subject: this.state.subject,
      percentage: this.state.percentage,
      teacherPhoto: this.state.teacherPhoto,
      teacherNIDPhoto: this.state.teacherNIDPhoto,
      teacherLastCertificatePhoto: this.state.teacherLastCertificatePhoto,
    };

    console.log(newTeacher);

    axios
      .post('https://mht-backend.herokuapp.com/teachers/add', newTeacher)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('https://mht-backend.herokuapp.com/teachers/')
      .then((response) => {
        this.setState({ teachers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTeacher(id) {
    axios
      .delete('https://mht-backend.herokuapp.com/teachers/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      teachers: this.state.teachers.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  teacherlist() {
    return this.state.teachers.map((currentTeacher) => {
      return (
        <Teacher
          teacher={currentTeacher}
          deleteTeacher={this.deleteTeacher}
          key={currentTeacher._id}
        />
      );
    });
  }

  render() {
    const userAttributes = [];
    this.state.teachers.forEach((el) => {
      userAttributes.push({
        sl: (
          <table id="team-list">
            <tr>
              <td></td>
            </tr>
          </table>
        ),
        TeacherName: el.teacherName,
        Subject: el.subject,
        Action: (
          <React.Fragment>
            <Button
              style={{
                color: 'white',
                background: 'purple',
                marginLeft: '1em',
                marginRight: '1em',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/teacherdetails/' + el._id}
              >
                details
              </Link>{' '}
            </Button>
            <Button
              style={{
                color: 'white',
                marginLeft: '1em',
                marginRight: '1em',
                background: '#fdd835',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/editTeacher/' + el._id}
              >
                edit
              </Link>
            </Button>
            <Button
              style={{
                color: 'white',
                background: '#ef5350',
                marginLeft: '1em',
                marginRight: '1em',
              }}
            >
              <Typography
                className="text-decoration-none"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{
                  color: 'white',
                }}
              >
                delete{' '}
              </Typography>
            </Button>
          </React.Fragment>
        ),
      });
    });

    const data = {
      columns: [
        {
          label: 'sl',
          field: 'sl',
          sort: 'asc',
          width: 10,
        },
        {
          label: 'Teacher Name',
          field: 'TeacherName',
          sort: 'asc',
          width: 150,
        },
        { label: 'Subject', field: 'Subject', sort: 'asc', width: 150 },
        { label: 'Action', field: 'Action', sort: 'asc', width: 150 },
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
          Teacher Module
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
          Home-Teacher
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
          }}
        />
        <Card
          style={{
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: 0,
            background: '#f3e5f5',
          }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">Create New Subject</Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '2em',
                border: '1px solid #009688',
                background: '#009688',
              }}
            />
            <div className="form-group row">
              <label className="col-sm-4">
                <Grid item container spacing={2} xs={12}>
                  <input
                    placeholder="Teacher Name"
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    type="text"
                    required
                    className="form-control"
                    value={this.state.teacherName}
                    onChange={this.onChangeTeacherName}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    placeholder="Teacher Email"
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    placeholder="Teacher Contact Number"
                    type="text"
                    required
                    className="form-control"
                    value={this.state.contactNumber}
                    onChange={this.onChangeContactNumber}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    placeholder="Teacher Subject"
                    type="text"
                    required
                    className="form-control"
                    value={this.state.subject}
                    onChange={this.onChangeSubject}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    placeholder="Teacher Percentage"
                    type="number"
                    required
                    className="form-control"
                    value={this.state.percentage}
                    onChange={this.onChangePercentage}
                  />
                </Grid>
              </label>
              <div
                className="row"
                style={{
                  marginLeft: '1.2em',
                  marginTop: '0.6em',
                }}
              >
                <TeacherPhoto
                  required
                  value={this.state.teacherPhoto}
                  onChange={this.onChangeTeacherPhoto}
                />
                <TeacherNID
                  required
                  value={this.state.teacherNIDPhoto}
                  onChange={this.onChangeTeacherNIDPhoto}
                />
                <TeacherLastCertificate
                  required
                  value={this.state.teacherLastCertificatePhoto}
                  onChange={this.onChangeTeacherLastCertificatePhoto}
                />
              </div>
              <br />
              <Grid container spacing={2} item xs={12}>
                <Button
                  style={{
                    background: '#4a148c',
                    color: 'white',
                    marginTop: '5em',
                    marginLeft: '2em',
                  }}
                  onClick={this.onSubmit}
                >
                  Create Teacher
                </Button>
              </Grid>
            </div>
          </CardContent>
        </Card>
        <br />
        <hr
          style={{
            marginRight: '0rem',
            marginLeft: '0rem',
            marginTop: '0',
            marginBottom: '1.1em',
            border: '15px solid #4db6ac',
            background: '#4db6ac',
          }}
        />
        <Card
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6" style={{}}>
              Teacher List
            </Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '1em',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
              }}
            />
            <br />
            <MDBDataTable striped bordered data={data} />
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

export function MiniDrawer(props) {
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
              <Link to="/students/allStudents">
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
              <Link to="/students/addStudent">
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
                <Link>
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
              <Link>
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
              <Link>
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
              <Link>
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
                  <Link>
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
                  <Link>
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
                  <Link>
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
        <CreateTeacher {...props} />
      </main>
    </div>
  );
}

export default withRouter(MiniDrawer);
