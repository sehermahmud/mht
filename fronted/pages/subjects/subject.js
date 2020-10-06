import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  DialogContent,
  DialogContentText,
  Paper,
  TextField,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(),
      width: '25ch',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: '2em',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function allStudents() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [subjectName, setSubjectName] = React.useState('');
  const [subjectDescription, setSubjectDescription] = React.useState('');
  const [subjectRows, setSubjectRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRow = () => {
    let item = {
      sn: subjectRows.length + 1,
      subjectName,
      subjectDescription,
    };
    setSubjectRows([...subjectRows, item]);
  };

  const handleRemoveSpecificRow = (item) => () => {
    // const subjectRows = [...subjectRows];
    // subjectRows.splice(index, 1);
    // setSubjectRows(subjectRows);
    let items = subjectRows.filter((row) => row.sn != item.sn);
    setSubjectRows(items);
  };

  const update = (item) => {
    console.log(
      'update (works in inside but does display if connection to backend)'
    );
  };

  return (
    <Grid style={{ marginTop: '6em' }}>
      <Typography variant="h4">Subject</Typography>
      <hr style={{ marginTop: 0, marginBottom: 0 }} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Subject
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Subject Name
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="Subject Name"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Description
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="Description"
                  value={subjectDescription}
                  onChange={(e) => setSubjectDescription(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              className={clsx(classes.margin)}
              style={{
                background: '#1de9b6',
                marginTop: '2em',
                marginLeft: '0.5em',
              }}
              className={classes.submit}
              onClick={handleAddRow}
              disabled={
                subjectName.length === 0 || subjectDescription.length === 0
              }
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subject sl</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjectRows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>#</td>
              <td>{item.sn}</td>
              <td>{item.subjectName}</td>
              <td>{item.subjectDescription}</td>
              <td>
                <Button
                  type="button"
                  outline="false"
                  style={{ color: 'green' }}
                  onClick={handleOpen}
                >
                  Edit
                </Button>
                <Button
                  type="button"
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
          <form className={classes.form} noValidate autoComplete="off">
            <Typography
              variant="h6"
              style={{
                marginLeft: '0.3em',
                marginTop: '0.6em',
                textAlign: 'center',
              }}
            >
              Edit Subject
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Subject Name
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="Subject Name"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Description
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="Description"
                  value={subjectDescription}
                  onChange={(e) => setSubjectDescription(e.target.value)}
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
          {subjectRows.map((item, index) => (
            <Button
              key={index}
              onClick={update}
              autoFocus
              style={{ margin: '0.5em', background: 'green' }}
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
              {subjectRows.map((item, index) => (
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
