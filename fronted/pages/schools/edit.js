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
  const [schoolName, setSchoolName] = React.useState('');
  const [schoolDescription, setSchoolDescription] = React.useState('');
  const [schoolAddress, setSchoolAddress] = React.useState('');
  const [rows, setRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRow = () => {
    let item = {
      id: rows.length + 1,
      schoolName,
      schoolDescription,
      schoolAddress,
    };
    setRows([...rows, item]);
  };

  const handleRemoveSpecificRow = (item) => () => {
    // const rows = [...rows];
    // rows.splice(index, 1);
    // setRows(rows);
    let items = rows.filter((row) => row.id != item.id);
    setRows(items);
  };

  return (
    <Grid style={{ marginTop: '6em' }}>
      <Typography variant="h4">School</Typography>
      <hr style={{ marginTop: 0, marginBottom: 0 }} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add School
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                School Name
              </Typography>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="School Name"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Description
              </Typography>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="Description"
                  value={schoolDescription}
                  onChange={(e) => setSchoolDescription(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                Address
              </Typography>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  id="standard-uncontrolled"
                  className={clsx(classes.margin)}
                  placeholder="Address"
                  value={schoolAddress}
                  onChange={(e) => setSchoolAddress(e.target.value)}
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
                schoolName.length === 0 ||
                schoolDescription.length === 0 ||
                schoolAddress.length === 0
              }
            >
              Update
            </Button>
          </form>
        </Paper>
      </Container>
      {/* <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">School Id</th>
            <th scope="col">School Name</th>
            <th scope="col">Description</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>#</td>
              <td>{item.id}</td>
              <td>{item.schoolName}</td>
              <td>{item.schoolDescription}</td>
              <td>{item.schoolAddress}</td>
              <td>
                <Button outline style={{ background: 'green' }}>
                  <Link href="/schools/editModal">Edit</Link>
                </Button>
                <Button outline color="secondary" onClick={handleOpen}>
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
          Are you sure you want to delete? After that you can not get it back!
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ margin: '0.5em' }}
          >
            Cancel
          </Button>
          {rows.map((item, index) => (
            <Button
              autoFocus
              style={{ margin: '0.5em', background: 'red' }}
              onClick={handleRemoveSpecificRow(item)}
            >
              Delete
            </Button>
          ))}
        </DialogActions>
      </Dialog> */}
    </Grid>
  );
}
