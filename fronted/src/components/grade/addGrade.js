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
import { MDBDataTable } from 'mdbreact';
// import CreateGrade from './components/grade/addGrade';
// import EditGrade from './components/grade/editGrade';
// import CreateSubject from './components/subject/subject';
// import EditSubject from './components/subject/editSubject';
// import CreateSllabys from './components/sllabys.js/sllabys';
// import EditSllabys from './components/sllabys.js/editSllabys';
// import CreateSchool from './components/school/school';
// import EditSchool from './components/school/editSchool';
// import CreateTeacher from './components/teacher/teacher';
// import EditTeacher from './components/teacher/editTeacher';
// import TeacherDetails from './components/teacher/teacherDetails';
// import EditTeacherBatch from './components/teacher/editBatch';
// import AddStudents from './components/students/addStudents';

import './grade.css';

const Grade = (props) => (
  <tr>
    <td></td>
    <td>{props.grade.grade}</td>
    <td>{props.grade.description}</td>
    <td>
      <Button
        style={{
          color: 'white',
          background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
          marginRight: '1em',
          marginLeft: '1em',
          marginBottom: '0.1em',
          marginTop: '0.1em',
        }}
      >
        <Link
          style={{ color: 'white' }}
          className="text-decoration-none"
          to={'/edit/' + props.grade._id}
        >
          edit
        </Link>{' '}
      </Button>
      <Button
        style={{
          color: 'white',
          background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
          marginRight: '1em',
          marginLeft: '1em',
          marginBottom: '0.1em',
          marginTop: '0.1em',
        }}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <a
          className="text-decoration-none"
          href="#"
          data-toggle="modal"
          data-id="props.grade._id"
          data-target="#exampleModal"
          style={{ color: 'white' }}
        >
          delete{' '}
        </a>
      </Button>
    </td>
    <div
      data-id="props.grade._id"
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
              Are you sure you want to delete? After that you can not get it
              back!
            </h5>
          </div>
          <div className="modal-footer">
            <Button
              data-dismiss="modal"
              color="primary"
              style={{
                margin: '0.5em',
                marginRight: '20em',
                border: '1px solid #2196f3',
                color: '#2196f3',
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{
                margin: '0.5em',
                background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
              }}
              onClick={() => {
                props.deleteGrade(props.grade._id);
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

// const columns = [
//   {
//     dataField: "id",
//     text: "sl",
//     sort: true,
//     scope: "col" ,
//     width: '4em'
//   },
//   {
//     dataField: "name",
//     text: "Grade",
//     sort: true,
//     scope: "col" ,
//     width: '15em'
//   },
//   {
//     dataField: "name",
//     text: "Description",
//     sort: true,
//     scope: "col" ,
//     width: '30em'
//   },
//   {
//     dataField: "name",
//     text: "Actions",
//     sort: true,
//     scope: "col" ,
//     width: '20em'
//   },
// ]

{
  /* <thead className="">
                <th scope="col" style={{ width: '4em' }}>
                  sl
                </th>
                <th scope="col" style={{ width: '15em' }}>
                  Grade
                </th>
                <th scope="col" style={{ width: '30em' }}>
                  Description
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Actions
                </th>
              </thead> */
}

class CreateGrade extends Component {
  constructor(props) {
    super(props);

    this.onOpen = this.onOpen.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.onChangepage = this.onChangepage.bind(this);
    this.onChangerowPage = this.onChangerowPage.bind(this);

    this.state = {
      grade: '',
      description: '',
      grades: [],
      open: false,
      search: '',
      page: 0,
      rowPage: '',
    };
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }

  onOpen(e) {
    this.setState({
      open: e.target.value,
    });
  }

  onChangeGrade(e) {
    this.setState({
      grade: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newGrade = {
      grade: this.state.grade,
      description: this.state.description,
    };

    console.log(newGrade);

    axios
      .post('http://localhost:4000/grades/add', newGrade)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/grades/')
      .then((response) => {
        this.setState({ grades: response.data });
        console.log(this.state.grades);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteGrade(id) {
    axios
      .delete('http://localhost:4000/grades/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      grades: this.state.grades.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  onChangepage(e) {
    this.setState({
      page: 0,
    });
  }
  onChangerowPage(e) {
    this.setState({
      rowPage: +e.target.value,
    });
  }

  gradelist() {
    return this.state.grades.map((currentgrade) => {
      return (
        <Grade
          grade={currentgrade}
          deleteGrade={this.deleteGrade}
          key={currentgrade._id}
        />
      );
    });
  }

  handleSearch(event) {
    const rowData = this.state.grades.map((gradeRow) =>
      Object.values(gradeRow).filter(
        (option) => option !== true && option !== false
      )
    );

    const matches = rowData.map((gradeRow) =>
      gradeRow.map((option) =>
        option.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );

    const newRows = [...this.state.grades];
    matches.map((gradeRow, index) =>
      gradeRow.includes(true)
        ? (newRows[index].search = true)
        : (newRows[index].search = false)
    );

    this.setState(newRows);
  }

  handleSearch(event) {
    const rowData = this.state.grade;
  }

  render() {
    const userAttributes = [];
    this.state.grades.forEach((el) => {
      userAttributes.push({
        sl: 1,
        Grade: el.grade,
        Description: el.description,
        Action: (
          <React.Fragment>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
                marginRight: '1em',
                marginLeft: '1em',
                marginBottom: '0.1em',
                marginTop: '0.1em',
              }}
            >
              <Link
                style={{ color: 'white' }}
                className="text-decoration-none"
                to={'/edit/' + el._id}
              >
                edit
              </Link>{' '}
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                marginRight: '1em',
                marginLeft: '1em',
                marginBottom: '0.1em',
                marginTop: '0.1em',
              }}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <a
                className="text-decoration-none"
                href="#"
                data-toggle="modal"
                data-id="props.grade._id"
                data-target="#exampleModal"
                style={{ color: 'white' }}
              >
                delete{' '}
              </a>
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
          width: 150,
        },
        {
          label: 'Grade',
          field: 'Grade',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Description',
          field: 'Description',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Action',
          field: 'Action',
          sort: 'asc',
          width: 100,
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
          Grade Module
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
          Home-Grade
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
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
            <Typography variant="h6">Create New Grade</Typography>
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
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em', marginRight: '3em' }}>
                    Write Grade Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      marginRight: '4em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Grade"
                    className="form-control"
                    value={this.state.grade}
                    onChange={this.onChangeGrade}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em' }}>
                    Write Grade Description:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Grade Description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginTop: '10em' }}
              >
                <Button
                  type="submit"
                  value="Create Subject"
                  className="btn btn-danger"
                  onClick={this.onSubmit}
                  style={{
                    background:
                      'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: 18,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
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
              Grade List
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
            {/* <Grid container direction="row">
              <Grid item container direction="column" sm>
                <section id="search_processes" class="center">
                  <div id="filter_content">
                    <table id="table_filters">
                      <tr id="row_special"> */}
            {/* <label style={{ marginRight: '0.5em' }}>
                            Show entries of
                          </label> */}
            {/* <select class="form-control" id="records_comboBox">
                          <option id="10" value="10">
                            10
                          </option>
                          <option id="25" value="25">
                            25
                          </option>
                          <option id="50" value="50">
                            50
                          </option>
                        </select>
                      </tr>
                    </table>
                  </div>
                </section>
              </Grid> */}
            {/* <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: '40em', marginTop: '0.5em' }}
              >
                <Paper
                  elevation={0}
                  component="form"
                  style={{
                    padding: '2px 3px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 400,
                    border: '1px solid black',
                  }}
                >
                  <InputBase
                    style={{
                      marginLeft: '1em',
                      flex: 1,
                    }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                  />
                  <IconButton
                    type="submit"
                    style={{ padding: 10 }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid> */}
            {/* <br /> */}
            {/* <table
              id="team-list"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead className="">
                <th scope="col" style={{ width: '4em' }}>
                  sl
                </th>
                <th scope="col" style={{ width: '15em' }}>
                  Grade
                </th>
                <th scope="col" style={{ width: '30em' }}>
                  Description
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Actions
                </th>
              </thead>
              <tbody>{this.gradelist()}</tbody>
            </table> */}
            {/* <br /> */}
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

CreateGrade.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

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
    background: 'linear-gradient(45deg, #1565c0 30%, #ec407a 50%, #6a1b9a 90%)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#004d40',
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
            className={classes.MHT}
            style={{ color: 'white' }}
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
        <CreateGrade {...props} />
      </main>
    </div>
  );
}
