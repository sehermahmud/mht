import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import StudentPhoto from '../../image/student/StudentPhoto';

class AddStudents extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentFullname = this.onChangeStudentFullname.bind(this);
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
    this.onChangeEducationboard = this.onChangeEducationboard.bind(this);
    this.onChangeStudentSubject = this.onChangeStudentSubject.bind(this);
    this.onChangeBatch = this.onChangeBatch.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange10.bind(this);
    this.handleChange11 = this.handleChange11.bind(this);
    this.handleChange12 = this.handleChange12.bind(this);
    this.handleChange13 = this.handleChange13.bind(this);
    this.handleChange14 = this.handleChange14.bind(this);
    this.handleChange15 = this.handleChange15.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.deleteTeacher = this.deleteTeacher.bind(this);

    this.state = {
      studentPermentId: new Date(),
      clicks: JSON.parse(localStorage.getItem('clicks')) || 27001,
      studentFullName: '',
      email: '',
      fatherName: '',
      motherName: '',
      studentPhoneNumber: '',
      guardianPhoneNumber: '',
      specialNote: '',
      studentPhoto: null,
      studentSchool: '',
      sllabys: '',
      subject: '',
      checked: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
      checked13: false,
      checked14: false,
      checked15: false,
      schools: [],
      allsllabys: [],
      subjects: [],
      batchs: [],
      Batch: '',
      StartDate: new Date(),
    };
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleChange1() {
    this.setState({
      checked1: !this.state.checked1,
    });
  }

  handleChange2() {
    this.setState({
      checked2: !this.state.checked2,
    });
  }

  handleChange3() {
    this.setState({
      checked3: !this.state.checked3,
    });
  }

  handleChange4() {
    this.setState({
      checked4: !this.state.checked4,
    });
  }

  handleChange5() {
    this.setState({
      checked5: !this.state.checked5,
    });
  }

  handleChange6() {
    this.setState({
      checked6: !this.state.checked6,
    });
  }

  handleChange7() {
    this.setState({
      checked7: !this.state.checked7,
    });
  }

  handleChange8() {
    this.setState({
      checked8: !this.state.checked8,
    });
  }

  handleChange9() {
    this.setState({
      checked9: !this.state.checked9,
    });
  }

  handleChange10() {
    this.setState({
      checked10: !this.state.checked10,
    });
  }

  handleChange11() {
    this.setState({
      checked11: !this.state.checked11,
    });
  }

  handleChange12() {
    this.setState({
      checked12: !this.state.checked12,
    });
  }

  handleChange13() {
    this.setState({
      checked13: !this.state.checked13,
    });
  }

  handleChange14() {
    this.setState({
      checked14: !this.state.checked14,
    });
  }

  handleChange15() {
    this.setState({
      checked15: !this.state.checked15,
    });
  }

  onChangeStudentFullname(e) {
    this.setState({ studentFullName: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeFatherName(e) {
    this.setState({ fatherName: e.target.value });
  }

  onChangeMotherName(e) {
    this.setState({ motherName: e.target.value });
  }

  onChangeStudentPhoneNumber(e) {
    this.setState({ studentPhoneNumber: e.target.value });
  }

  onChangeGuardianPhoneNumber(e) {
    this.setState({ guardianPhoneNumber: e.target.value });
  }

  onChangeSpecialNote(e) {
    this.setState({ specialNote: e.target.value });
  }

  onChangeStudentPhoto(e) {
    this.setState({ studentPhoto: e.target.value });
  }

  onChangeStudentSchool(e) {
    this.setState({ studentSchool: e.target.value });
  }

  onChangeEducationboard(e) {
    this.setState({ sllabys: e.target.value });
  }

  onChangeStudentSubject(e) {
    this.setState({ subject: e.target.value });
  }

  onChangeBatch(e) {
    this.setState({
      Batch: e.target.value,
    });
  }

  onChangeStartDate(date) {
    this.setState({
      StartDate: date,
    });
  }

  componentDidMount(id) {
    axios.get('https://mht-backend.herokuapp.com/schools/').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          schools: response.data.map((school) => school.school),
        });
      }

      console.log(this.state.schools);
    });

    axios.get('https://mht-backend.herokuapp.com/sllabys/').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          allsllabys: response.data.map((sllabys) => sllabys.sllabys),
        });
      }

      console.log(this.state.allsllabys);
    });

    axios
      .get('https://mht-backend.herokuapp.com/subjects/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            subjects: response.data.map((subject) => subject.subject),
            subject: response.data[0].subject,
          });
        }

        console.log(this.state.subjects);
      });

    axios
      .get(
        `https://mht-backend.herokuapp.com/teachersBatch/5f90440a838fe20a3e1520d6/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            batchs: response.data.teacher.teacherBatch.map((batch) => batch),
          });
        }

        console.log(this.state.batchs);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const components = [
      this.state.studentPermentId.getFullYear(),
      this.state.studentPermentId.getMonth() + 1,
      // this.state.studentPermentId.getDate(),
      this.setState({ clicks: this.state.clicks + 1 }, () => {
        localStorage.setItem('clicks', JSON.stringify(this.state.clicks));
      }),
    ];

    if (this.state.clicks >= 100000) {
      this.setState({ clicks: this.state.clicks });
    } else {
      this.setState({ clicks: this.state.clicks + 1 });
    }

    // this.setState({ clicks: this.state.clicks + 1 });

    const id = components.join('');

    console.log(id + this.state.clicks);

    const newStudent = {
      studentPermentId: id + this.state.clicks,
      studentFullName: this.state.studentFullName,
      email: this.state.email,
      fatherName: this.state.fatherName,
      motherName: this.state.motherName,
      studentPhoneNumber: this.state.studentPhoneNumber,
      guardianPhoneNumber: this.state.guardianPhoneNumber,
      specialNote: this.state.specialNote,
      studentPhoto: this.state.studentPhoto,
      studentSchool: this.state.studentSchool,
      sllabys: this.state.sllabys,
      subject: this.state.subject,
      checked: this.state.checked,
      checked1: this.state.checked1,
      checked2: this.state.checked2,
      checked3: this.state.checked3,
      checked4: this.state.checked4,
      checked5: this.state.checked5,
      checked6: this.state.checked6,
      checked7: this.state.checked7,
      checked8: this.state.checked8,
      checked9: this.state.checked9,
      checked10: this.state.checked10,
      checked11: this.state.checked11,
      checked12: this.state.checked12,
      checked13: this.state.checked13,
      checked14: this.state.checked14,
      checked15: this.state.checked15,
    };
    console.log(newStudent);

    axios
      .post('https://mht-backend.herokuapp.com/students/addStudent', newStudent)
      .then((res) => console.log(res.data));
  }

  render() {
    // const { batchSubject, sllabys, grade, EndDate, Batch } = this.state.batchs;

    const content = this.state.checked ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content1 = this.state.checked1 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content2 = this.state.checked2 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            value={this.state.subject}
            onChange={this.onChangeStudentSubject}
          >
            {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch.batchSubject}-{batch.sllabys}-{batch.grade}-
                  {batch.EndDate && batch.EndDate.substring(2, 4)}-{batch.Batch}
                </option>
              );
            })}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content3 = this.state.checked3 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option></option>
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content4 = this.state.checked4 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option></option>
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content5 = this.state.checked5 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option></option>
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content6 = this.state.checked6 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            <option></option>
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content7 = this.state.checked7 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;
    const content8 = this.state.checked8 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content9 = this.state.checked9 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content10 = this.state.checked10 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content11 = this.state.checked11 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content12 = this.state.checked12 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content13 = this.state.checked13 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content14 = this.state.checked14 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          ></select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    const content15 = this.state.checked15 ? (
      <div>
        <div
          style={{
            marginRight: '60px',
            marginBottom: '1em',
            marginTop: '1em',
          }}
        >
          <select
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            // value={this.state.subject}
            // onChange={this.onChangeStudentSubject}
          >
            {/* {this.state.batchs.map((batch) => {
              return (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              );
            })} */}
          </select>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            format="dd/MM/yyyy"
            label="Start Date"
            value={this.state.StartDate}
            onChange={this.onChangeStartDate}
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    return (
      <Grid style={{ marginTop: '4em' }}>
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
          Home-Student-AddStudent
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
        <Card style={{ width: '98%', margin: '1em' }}>
          <CardContent>
            <Typography variant="h6">Create New Students</Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '1em',
                border: '1px solid #009688',
                background: '#009688',
              }}
            />
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Student Fullname</Typography>
                  <input
                    className="form-control"
                    placeholder="student fullname"
                    value={this.state.studentFullName}
                    onChange={this.onChangeStudentFullname}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Email</Typography>
                  <input
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Father's Name</Typography>
                  <input
                    className="form-control"
                    placeholder="father's name"
                    value={this.state.fatherName}
                    onChange={this.onChangeFatherName}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Mother's Name</Typography>
                  <input
                    className="form-control"
                    placeholder="mother's name"
                    value={this.state.motherName}
                    onChange={this.onChangeMotherName}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Student's Phone Number</Typography>
                  <input
                    className="form-control"
                    placeholder="student's phone number"
                    value={this.state.studentPhoneNumber}
                    onChange={this.onChangeStudentPhoneNumber}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Guardian's Phone Number</Typography>
                  <input
                    className="form-control"
                    placeholder="guardian's phone number"
                    value={this.state.guardianPhoneNumber}
                    onChange={this.onChangeGuardianPhoneNumber}
                  />
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Special Note</Typography>
                  <input
                    className="form-control"
                    placeholder="special note"
                    value={this.state.specialNote}
                    onChange={this.onChangeSpecialNote}
                  />
                </div>
                <div
                  style={{
                    marginBottom: '1em',
                    marginTop: '1em',
                    width: '12em',
                    height: '12em',
                  }}
                >
                  <StudentPhoto
                    style={{
                      width: '12em',
                      height: '12em',
                      objectFit: 'cover',
                    }}
                    value={this.state.studentPhoto}
                    onChange={this.onChangeStudentPhoto}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <label>School</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.studentSchool}
                    onChange={this.onChangeStudentSchool}
                  >
                    <option>Choose...</option>
                    {this.state.schools.map(function (school) {
                      return (
                        <option key={school} value={school}>
                          {school}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <label>Sllabys</label>
                  <select
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    value={this.state.sllabys}
                    onChange={this.onChangeEducationboard}
                  >
                    <option>Choose...</option>
                    {this.state.allsllabys.map(function (sllabys) {
                      return (
                        <option key={sllabys} value={sllabys}>
                          {sllabys}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <Typography variant="h5">Choose Subject</Typography>
                {/* {this.state.subjects.map((subject) => {
                  return (
                    <div
                      key={subject}
                      style={{
                        marginRight: '60px',
                        marginBottom: '0.3em',
                        marginTop: '0.3em',
                        marginLeft: '20px',
                      }}
                    >
                      <input
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        type="checkbox"
                        style={{ marginRight: '0.5em' }}
                        value={subject}
                      />
                      <label value={subject} className="form-check-label">
                        {subject}
                      </label>
                      {content}
                    </div>
                  );
                })} */}
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">English</label>
                  {content}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked1}
                    onChange={this.handleChange1}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Bengali</label>
                  {content1}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked2}
                    onChange={this.handleChange2}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Physics</label>
                  {content2}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked3}
                    onChange={this.handleChange3}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Biology</label>
                  {content3}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked4}
                    onChange={this.handleChange4}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Chemistry</label>
                  {content4}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked5}
                    onChange={this.handleChange5}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Economics</label>
                  {content5}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked6}
                    onChange={this.handleChange6}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Accounting</label>
                  {content6}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked7}
                    onChange={this.handleChange7}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Commerce</label>
                  {content7}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked8}
                    onChange={this.handleChange8}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Business Studies</label>
                  {content8}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked9}
                    onChange={this.handleChange9}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">
                    General Mathematics
                  </label>
                  {content9}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked10}
                    onChange={this.handleChange10}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">
                    Additional Mathematics
                  </label>
                  {content10}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked11}
                    onChange={this.handleChange11}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Pure Mathematics</label>
                  {content11}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked12}
                    onChange={this.handleChange12}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Mathematics</label>
                  {content12}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked13}
                    onChange={this.handleChange13}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Lab-Bio</label>
                  {content13}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked14}
                    onChange={this.handleChange14}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">Programing</label>
                  {content14}
                </div>
                <div
                  style={{
                    marginRight: '60px',
                    marginBottom: '0.3em',
                    marginTop: '0.3em',
                    marginLeft: '20px',
                  }}
                >
                  <input
                    checked={this.state.checked15}
                    onChange={this.handleChange15}
                    type="checkbox"
                    style={{ marginRight: '0.5em' }}
                  />
                  <label className="form-check-label">art</label>
                  {content15}
                </div>
              </Grid>
            </Grid>
            <Grid>
              <Button
                onClick={this.onSubmit}
                style={{
                  marginLeft: '40em',
                  paddingRight: '15em',
                  paddingLeft: '15em',
                  background: '#4caf50',
                  textAlign: 'center',
                }}
              >
                Submit
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
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
    backgroundColor: '#00bfa5',
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
    backgroundColor: '#00bfa5',
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
        <AddStudents {...props} />
      </main>
    </div>
  );
}
