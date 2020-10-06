import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
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
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function allSllabys() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [sllabysName, setSllabysName] = React.useState('');
  const [sllabysCode, setSllabysCode] = React.useState('');
  const [sllabysRows, setSllabysRows] = useState([]);

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
    // const sllabysRows = [...sllabysRows];
    // sllabysRows[index] = {
    //     [name]: value
    // };
    let items = sllabysRows.map((row) => {
      if (row.sn === item.sn) {
        row[name] = value;
      }
      return row;
    });
    setSllabysRows(items);
  };
  const handleAddRow = () => {
    let item = {
      sn: sllabysRows.length + 1,
      sllabysName,
      sllabysCode,
    };
    setSllabysRows([...sllabysRows, item]);
  };

  const handleRemoveSpecificRow = (item) => () => {
    // const sllabysRows = [...sllabysRows];
    // sllabysRows.splice(index, 1);
    // setSllabysRows(sllabysRows);
    let items = sllabysRows.filter((row) => row.sn != item.sn);
    setSllabysRows(items);
  };

  return (
    <Grid style={{ marginTop: '6em' }}>
      <Typography variant="h4">Sllabys</Typography>
      <hr style={{ marginTop: 0, marginBottom: 0 }} />
      <br />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Sllabys
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  className={clsx(classes.margin)}
                  id="standard-uncontrolled"
                  placeholder="Sllabys Name"
                  value={sllabysName}
                  onChange={(e) => setSllabysName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  className={clsx(classes.margin)}
                  id="standard-uncontrolled"
                  placeholder="Sllabys Code"
                  value={sllabysCode}
                  onChange={(e) => setSllabysCode(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              style={{ background: '#1de9b6' }}
              className={classes.submit}
              onClick={handleAddRow}
              disabled={sllabysName.length === 0 || sllabysCode.length === 0}
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
            <th scope="col">Sllabys Name</th>
            <th scope="col">Sllabys Code</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sllabysRows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>#</td>
              <td>{item.sn}</td>
              <td>{item.sllabysName}</td>
              <td>{item.sllabysCode}</td>
              <td>
                <Button
                  outline="true"
                  style={{ color: 'green' }}
                  onClick={handleOpen}
                >
                  Edit
                </Button>
                <Button
                  outline="true"
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
          Are you sure you want to edit the sllabys!, please think what you are
          doing?
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
              Edit Sllabys
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Typography style={{ marginLeft: '1em', marginTop: '0.6em' }}>
                sllabys
              </Typography>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  className={clsx(classes.margin)}
                  id="standard-uncontrolled"
                  placeholder="Sllabys"
                  value={sllabysName}
                  onChange={(e) => setSllabysName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  className={clsx(classes.margin)}
                  id="standard-uncontrolled"
                  placeholder="Sllabys"
                  value={sllabysCode}
                  onChange={(e) => setSllabysCode(e.target.value)}
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
          {sllabysRows.map((item, index) => (
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
                Are you sure you want to delete the sllabys? After that you can
                not get it back!
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
              {sllabysRows.map((item, index) => (
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
