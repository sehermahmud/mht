import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  DialogContent,
  DialogContentText,
  Input,
  Paper,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: '2em',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Grade() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [grade, setGrade] = React.useState('');
  const [gradeRows, setGradeRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const update = (item) => {
    console.log(
      'update (works in inside but does display if connection to backend)'
    );
  };

  const handleChange = (item) => (e) => {
    const { name, value } = e.target;
    // const gradeRows = [...gradeRows];
    // gradeRows[index] = {
    //     [name]: value
    // };
    let items = gradeRows.map((row) => {
      if (row.sn === item.sn) {
        row[name] = value;
      }
      return row;
    });
    setGradeRows(items);
  };
  const handleAddRow = () => {
    let item = {
      sn: gradeRows.length + 1,
      grade,
    };
    setGradeRows([...gradeRows, item]);
  };

  const handleRemoveSpecificRow = (item) => () => {
    // const gradeRows = [...gradeRows];
    // gradeRows.splice(index, 1);
    // setGradeRows(gradeRows);
    let items = gradeRows.filter((row) => row.sn != item.sn);
    setGradeRows(items);
  };

  return (
    <Grid style={{ marginTop: '6em' }}>
      <Typography variant="h4">Grade</Typography>
      <hr style={{ marginTop: 0, marginBottom: 0 }} />
      <br />
      <br />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Grade
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  placeholder="Grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              style={{ background: '#1de9b6' }}
              className={classes.submit}
              onClick={handleAddRow}
              disabled={grade.length === 0}
            >
              done
            </Button>
          </form>
        </Paper>
      </Container>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">sl</th>
            <th scope="col">Grade</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {gradeRows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>#</td>
              <td>{item.sn}</td>
              <td>{item.grade}</td>
              <td>
                <Button
                  outline="false"
                  style={{ color: 'green' }}
                  onClick={handleOpen}
                >
                  Edit
                </Button>
                <Button
                  outline="false"
                  color="secondary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {' '}
          Are you sure you want to edit!, please think what you are doing?
        </DialogTitle>
        <DialogContent>
          <form className={classes.form}>
            <Typography
              variant="h6"
              style={{
                marginLeft: '0.3em',
                marginTop: '0.6em',
                textAlign: 'center',
              }}
            >
              Edit Grade
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  placeholder="Level"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ margin: '0.5em' }}
          >
            Cancel
          </Button>
          {gradeRows.map((item, index) => (
            <Button
              key={index}
              autoFocus
              style={{ margin: '0.5em', background: 'green' }}
              onClick={update}
            >
              Update
            </Button>
          ))}
        </DialogActions>
      </Dialog>

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
                Are you sure you want to delete? After that you can not get it
                back!
              </h5>
            </div>
            <div className="modal-footer">
              <Button
                data-dismiss="modal"
                color="primary"
                style={{ margin: '0.5em' }}
              >
                Cancel
              </Button>
              {gradeRows.map((item, index) => (
                <Button
                  key={index}
                  autoFocus
                  style={{ margin: '0.5em', background: 'red' }}
                  onClick={handleRemoveSpecificRow(item)}
                >
                  Delete
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
