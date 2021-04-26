import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
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

  // onChangeStudentSubject(e) {
  //   this.setState({ subject: e.target.value });
  // }

  onChangeStudentSubject(newCurrency) {
    this.setState({
      subject: newCurrency.value,
    });
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
    axios
      .get('https://mht-backend-edu.herokuapp.com/schools/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            schools: response.data.map((school) => school.school),
          });
        }

        console.log(this.state.schools);
      });

    axios
      .get('https://mht-backend-edu.herokuapp.com/sllabys/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            allsllabys: response.data.map((sllabys) => sllabys.sllabys),
          });
        }

        console.log(this.state.allsllabys);
      });

    axios
      .get('https://mht-backend-edu.herokuapp.com/subjects/')
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
        `https://mht-backend-edu.herokuapp.com/teachersBatch/5f90440a838fe20a3e1520d6/allTeacherBatch`
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
      .post(
        'https://mht-backend-edu.herokuapp.com/students/addStudent',
        newStudent
      )
      .then((res) => console.log(res.data));
  }

  render() {
    const { batchSubject, sllabys, grade, EndDate, Batch } = this.state.batchs;

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
                <option
                  key={batchSubject}
                  value={
                    batchSubject - sllabys - grade - EndDate &&
                    EndDate.substring(2, 4) - Batch
                  }
                >
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

export default withRouter(AddStudents);
