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


export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [schoolName, setSchoolName] = React.useState('');
  const [schoolDescription, setSchoolDescription] = React.useState('');
  const [schoolAddress, setSchoolAddress] = React.useState('');
  const [rows, setRows] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    rows.schoolName = schoolName;
    rows.schoolDescription = schoolDescription;
    rows.schoolAddress = schoolAddress;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const update = (item) => {
    console.log(
      'update (works in inside but does display if connection to backend)'
    );
  };

  const replaceModalItem = (index) => {
    requiredItem(index);
  };

  const onClick = (event) => {
    handleOpen;
    replaceModalItem(index);
  },

  const requiredItem = requiredItem;
  let modalData = rows[requiredItem];


  return (
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
          {rows.map((item, index) => (
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
  );
}
