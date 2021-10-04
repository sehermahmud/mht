import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { InputGroup } from 'react-bootstrap';
import axios from 'axios';
// import MuiAlert from '@material-ui/lab/Alert';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

let newDate = new Date();
const currentMonth = newDate.getMonth() + 1;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const batch0 = {};
const batch1 = {};
const batch2 = {};
const batch3 = {};
const batch4 = {};

export default class BatchPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      Info: '',
      value: '',
      batch: [],
      batch0,
      batch1,
      batch2,
      batch3,
      batch4,
      oneStudents: {},
      oneStudentsBatch: [],
      valueMonth: `${currentMonth - new Date(batch0.open3).getMonth()}`,
      state: {},
      state1: '',
      state2: '',
      valueMonth1: `${currentMonth - new Date(batch1.open3).getMonth()}`,
      stateNo1: {},
      state3: '',
      state4: '',
      valueMonth2: `${currentMonth - new Date(batch2.open3).getMonth()}`,
      stateNo2: {},
      state5: '',
      state6: '',
      valueMonth3: `${currentMonth - new Date(batch3.open3).getMonth()}`,
      stateNo3: {},
      state7: '',
      state8: '',
      valueMonth4: `${currentMonth - new Date(batch4.open3).getMonth()}`,
      stateNo4: {},
      state9: '',
      state10: '',
      totalPrice: '',
      showMessage: false,
      totalPrice1: '',
      totalPrice2: '',
      totalPrice3: '',
      totalPrice4: '',
      totalPrice5: '',
      totalPrice5: '',
      studentPermentId: new Date(),
      clicks: JSON.parse(localStorage.getItem('clicks')) || 10000,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeValueMonth = this.onChangeValueMonth.bind(this);
    this.onChangesetState = this.onChangesetState.bind(this);
    this.onChangesetState1 = this.onChangesetState1.bind(this);
    this.onChangesetState2 = this.onChangesetState2.bind(this);

    this.onChangeValueMonth1 = this.onChangeValueMonth1.bind(this);
    this.onChangesetStateNo1 = this.onChangesetStateNo1.bind(this);
    this.onChangesetState3 = this.onChangesetState3.bind(this);
    this.onChangesetState4 = this.onChangesetState4.bind(this);

    this.onChangeValueMonth2 = this.onChangeValueMonth2.bind(this);
    this.onChangesetStateNo2 = this.onChangesetStateNo2.bind(this);
    this.onChangesetState5 = this.onChangesetState5.bind(this);
    this.onChangesetState6 = this.onChangesetState6.bind(this);

    this.onChangeValueMonth3 = this.onChangeValueMonth3.bind(this);
    this.onChangesetStateNo3 = this.onChangesetStateNo3.bind(this);
    this.onChangesetState7 = this.onChangesetState7.bind(this);
    this.onChangesetState8 = this.onChangesetState8.bind(this);

    this.onChangeValueMonth4 = this.onChangeValueMonth4.bind(this);
    this.onChangesetStateNo4 = this.onChangesetStateNo4.bind(this);
    this.onChangesetState9 = this.onChangesetState9.bind(this);
    this.onChangesetState10 = this.onChangesetState10.bind(this);

    this.onChangeTotalPrice1 = this.onChangeTotalPrice1.bind(this);
    this.onChangeTotalPrice2 = this.onChangeTotalPrice2.bind(this);
    this.onChangeTotalPrice3 = this.onChangeTotalPrice3.bind(this);
    this.onChangeTotalPrice4 = this.onChangeTotalPrice4.bind(this);
    this.onChangeTotalPrice5 = this.onChangeTotalPrice5.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeValueMonth(e) {
    this.setState({ valueMonth: e.target.value });
  }

  onChangesetState(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onChangesetState1(e) {
    const { value } = e.target;
    this.setState({ state1: value });
  }

  onChangesetState2(e) {
    const { value } = e.target;
    this.setState({ state2: value });
  }

  onChangeValueMonth1(e) {
    this.setState({ valueMonth1: e.target.value });
  }

  onChangesetStateNo1(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onChangesetState3(e) {
    this.setState({ state3: e.target.value });
  }

  onChangesetState4(e) {
    this.setState({ state4: e.target.value });
  }

  onChangeValueMonth2(e) {
    this.setState({ valueMonth2: e.target.value });
  }

  onChangesetStateNo2(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onChangesetState5(e) {
    this.setState({ state5: e.target.value });
  }

  onChangesetState6(e) {
    this.setState({ state6: e.target.value });
  }

  onChangeValueMonth3(e) {
    this.setState({ valueMonth3: e.target.value });
  }

  onChangesetStateNo3(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onChangesetState7(e) {
    this.setState({ state7: e.target.value });
  }

  onChangesetState8(e) {
    this.setState({ state8: e.target.value });
  }

  onChangeValueMonth4(e) {
    this.setState({ valueMonth4: e.target.value });
  }

  onChangesetStateNo4(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onChangesetState9(e) {
    this.setState({ state9: e.target.value });
  }

  onChangesetState10(e) {
    this.setState({ state10: e.target.value });
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-1.herokuapp.com/students/')
      .then((response) => {
        this.setState({ students: response.data });
        // console.log(this.state.students);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({ Info: e.target.value });

    axios
      .get('https://mht-backend-1.herokuapp.com/students/' + e.target.value)
      .then((response) => {
        this.setState({
          oneStudents: response.data,
        });
        console.log(this.state.oneStudents);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('https://mht-backend-1.herokuapp.com/students/' + e.target.value)
      .then((response) => {
        if (response.data.Batch09.length > 0) {
          this.setState({
            batch: response.data.Batch09.map((batch) => batch),
            batch0: response.data.Batch09[0],
            batch1: response.data.Batch09[1],
            batch2: response.data.Batch09[2],
            batch3: response.data.Batch09[3],
            batch4: response.data.Batch09[4],
          });
        }
        console.log('studentBatch: ', this.state.batch);
        console.log('studentBatch1: ', this.state.batch0);
        console.log('studentBatch1: ', this.state.batch1);
        console.log('studentBatch2: ', this.state.batch2);
        console.log('studentBatch3: ', this.state.batch3);
        console.log('studentBatch3: ', this.state.batch4);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool,
    });
  };

  onChangeTotalPrice1(e) {
    this.setState({ totalPrice1: e.target.value });
  }

  onChangeTotalPrice2(e) {
    this.setState({ totalPrice2: e.target.value });
  }

  onChangeTotalPrice3(e) {
    this.setState({ totalPrice3: e.target.value });
  }

  onChangeTotalPrice4(e) {
    this.setState({ totalPrice4: e.target.value });
  }

  onChangeTotalPrice5(e) {
    this.setState({ totalPrice5: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // var num = 0;

    // const com = [
    //   new Date().getFullYear(),
    //   new Date().getMonth() + 1,
    //   new Date().getDate(),
    // ];

    // var str = '' + 1;
    // var pad = '0000';
    // var ans = pad.substring(0, pad.length - str.length) + str;
    // const counting = ans++;

    // console.log(counting);
    // const id = com.join('');
    // console.log(id + ans);

    const components = [
      this.state.studentPermentId.getFullYear(),
      this.state.studentPermentId.getMonth() + 1,
      // this.state.studentPermentId.getDate(),
      this.setState({ clicks: this.state.clicks + 1 }, () => {
        localStorage.setItem('clicks', JSON.stringify(this.state.clicks));
      }),
    ];

    if (this.state.clicks >= 10000) {
      this.setState({ clicks: this.state.clicks });
    } else {
      this.setState({ clicks: this.state.clicks + 1 });
    }

    const id = components.join('');

    console.log(id + this.state.clicks);
  }

  render() {
    const {
      // studentPhoto,
      _id,
      studentFullName,
      fatherName,
      motherName,
      studentPhoneNumber,
      guardianPhoneNumber,
      email,
      studentSchool,
    } = this.state.oneStudents;

    const options = ['regular', 'Pending', 'discount'];
    const options1 = ['regular', 'Pending', 'discount'];
    const options2 = ['regular', 'Pending', 'discount'];
    const options3 = ['regular', 'Pending', 'discount'];
    const options4 = ['regular', 'Pending', 'discount'];

    console.log(this.state.Info === undefined ? 'nothing' : this.state.Info);

    console.log(this.state.state3, this.state.state2);

    // console.log(this.state.totalPrice1);
    return (
      <div style={{ marginTop: '5em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Batch Payment Dashboard
        </Typography>
        <Typography
          style={{
            textAlign: 'right',
            float: 'right',
            marginRight: '1rem',
            color: 'white',
          }}
        >
          Home-Student-Payment-StudentPaymentPage
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
        <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
          <CardContent>
            <Typography variant="h6" style={{ marginBottom: '0.5em' }}>
              Search for a Student
            </Typography>
            <Grid container direction="row">
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginRight: '1em' }}
              >
                <label htmlFor="exampleInputEmail1">Student</label>
                <select
                  className="custom-select mr-sm-2"
                  onChange={this.onChangeName}
                  value={this.state.Info}
                >
                  <option defaultChecked>Choose...</option>
                  {this.state.students.map((key) => (
                    <option key={key.studentFullName} value={key._id}>
                      {key.studentFullName}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: '1em', marginRight: '1em' }}
              >
                {' '}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Number"
                  />
                </div>{' '}
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginRight: '1em' }}
              >
                <Button
                  style={{
                    textTransform: 'none',
                    marginTop: '2em',
                    color: 'white',
                    background:
                      'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
                  }}
                  onClick={this._showMessage.bind(null, true)}
                >
                  Show Info
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00897b',
            background: '#00897b',
            width: '100%',
          }}
        />
        <Button onClick={this.onSubmit}>submit</Button>
        {this.state.showMessage ? (
          <div>
            <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
              <CardContent>
                <Typography variant="h6">Due Information</Typography>
                <br />
                <table
                  className="table table-striped table-bordered"
                  cellSpacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '4em' }}>
                        Batch
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Name
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        PaymentDate
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Duefor
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        PaidAmount
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        DueAmount
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Clear
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
            <hr
              style={{
                clear: 'both',
                marginBottom: '1em',
                marginTop: '1rem',
                border: '3px solid #26a69a',
                background: '#26a69a',
                width: '100%',
              }}
            />
            <React.Fragment>
              <Card
                name={'test1'}
                elevation={0}
                style={{ margin: '1em', borderRadius: 0 }}
              >
                <CardContent>
                  <Typography variant="h6">Student Information</Typography>
                  <hr />
                  <br />
                  <Grid container direction="row" key={_id}>
                    <Grid item container direction="column" sm>
                      <div
                        style={{
                          width: '10em',
                          height: '10em',
                          marginTop: '1rem',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '1em',
                        }}
                      >
                        <img
                          src=""
                          alt="student"
                          style={{
                            border: '1px solid black',
                            width: '10em',
                            height: '10em',
                            objectFit: 'cover',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            textAlign: 'center',
                          }}
                        >
                          School Name: {studentSchool}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item container direction="column" sm>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                          Student's Name:
                        </Typography>
                        <Typography>{studentFullName}</Typography>
                      </div>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                          Father's Name:
                        </Typography>
                        <Typography>{fatherName}</Typography>
                      </div>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                          Mother's Name:
                        </Typography>
                        <Typography>{motherName}</Typography>
                      </div>
                    </Grid>
                    <Grid item container direction="column" sm>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                          Student's Phone Number:
                        </Typography>
                        <Typography>{studentPhoneNumber}</Typography>
                      </div>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                          Guardian's Phone Number:
                        </Typography>
                        <Typography>{guardianPhoneNumber}</Typography>
                      </div>
                      <div style={{ marginBottom: '1em' }}>
                        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                          Email:
                        </Typography>
                        <Typography>{email}</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <hr
                style={{
                  clear: 'both',
                  marginBottom: '1em',
                  marginTop: '1rem',
                  border: '3px solid #80cbc4',
                  background: '#80cbc4',
                  width: '100%',
                }}
              />
              <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
                <CardContent>
                  <Typography variant="h6">Payment</Typography>
                  <br />
                  <br />
                  <table
                    className="table table-striped table-bordered"
                    cellSpacing="0"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: '10em' }}>
                          Batch Name
                        </th>
                        <th scope="col" style={{ width: '2em' }}>
                          Payment form
                        </th>
                        <th scope="col" style={{ width: '3em' }}>
                          Unit Price/=
                        </th>
                        <th scope="col" style={{ width: '3em' }}>
                          no. of month
                        </th>
                        <th scope="col" style={{ width: '6em' }}>
                          Total Price Per Course /=
                        </th>
                        <th scope="col" style={{ width: '2em' }}>
                          Regular
                        </th>
                        <th scope="col" style={{ width: '5em' }}>
                          Pending
                        </th>
                        <th scope="col" style={{ width: '5em' }}>
                          Discount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.batch0.open1 === '' ? (
                        <tr key={this.state.batch0._id}></tr>
                      ) : (
                        <tr>
                          <td>{this.state.batch0.open1}</td>
                          <td>{this.state.batch0.open2}</td>
                          <td>
                            {months[
                              new Date(this.state.batch0.open3).getMonth()
                            ] +
                              '-' +
                              new Date(this.state.batch0.open3).getFullYear()}
                          </td>
                          <td>
                            <select
                              className="custom-select"
                              id="length"
                              value={this.state.valueMonth}
                              // defaultValue={
                              //   currentMonth -
                              //   new Date(this.state.batch0.open3).getMonth()
                              // }
                              onChange={this.onChangeValueMonth}
                            >
                              <option
                                value={
                                  currentMonth -
                                  new Date(this.state.batch0.open3).getMonth()
                                }
                              >
                                {currentMonth -
                                  new Date(this.state.batch0.open3).getMonth()}
                              </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              onChange={this.onChangeTotalPrice1}
                              value={
                                (this.state.totalPrice1 =
                                  this.state.valueMonth === undefined
                                    ? 0
                                    : this.state.valueMonth === '-1'
                                    ? 0
                                    : this.state.valueMonth === '-2'
                                    ? 0
                                    : this.state.valueMonth === '-3'
                                    ? 0
                                    : this.state.state1
                                    ? parseInt(this.state.batch0.open2) *
                                        this.state.valueMonth -
                                      this.state.state1
                                    : this.state.state2
                                    ? parseInt(this.state.batch0.open2) *
                                        this.state.valueMonth -
                                      this.state.state2
                                    : parseInt(this.state.batch0.open2) *
                                      this.state.valueMonth)
                              }
                            />
                          </td>
                          {console.log(this.state.valueMonth)}
                          {options.map((option) => (
                            <td key={`${this.state.batch0.open1}_${option}`}>
                              <Grid container direction="row">
                                <Grid
                                  item
                                  container
                                  direction="column"
                                  sm
                                  style={{ marginRight: '1px' }}
                                >
                                  <InputGroup.Checkbox
                                    style={{
                                      display: 'flex',
                                      padding: '0',
                                      marginBottom: 0,
                                      fontSize: '0',
                                      fontWeight: 0,
                                      lineHeight: 0,
                                      color: ' #495057',
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                      backgroundColor: '#e9ecef',
                                      border: 0,
                                    }}
                                    type="radio"
                                    aria-label="radio 1"
                                    value={option}
                                    name={this.state.batch0.open1}
                                    defaultChecked={
                                      option === 'regular' ? true : false
                                    }
                                    selected={
                                      Boolean(
                                        this.state.state[
                                          this.state.batch0.open1
                                        ]
                                      ) &&
                                      this.state.state[
                                        this.state.batch0.open1
                                      ] === option
                                    }
                                    onChange={this.onChangesetState}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={
                                        this.state.state1[
                                          this.state.batch0.open1
                                        ]
                                      }
                                      name={this.state.batch0.open1}
                                      onChange={this.onChangesetState1}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={
                                          this.state.state2[
                                            this.state.batch0.open1
                                          ]
                                        }
                                        name={this.state.batch0.open1}
                                        onChange={this.onChangesetState2}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                      )}
                      {this.state.batch1.open1 === '' ? (
                        <tr key={this.state.batch1._id}></tr>
                      ) : (
                        <tr>
                          <td>{this.state.batch1.open1}</td>
                          <td>{this.state.batch1.open2}</td>
                          <td>
                            {months[
                              new Date(this.state.batch1.open3).getMonth()
                            ] +
                              '-' +
                              new Date(this.state.batch1.open3).getFullYear()}
                          </td>
                          <td>
                            <select
                              className="custom-select"
                              id="length"
                              value={this.state.valueMonth1}
                              onChange={this.onChangeValueMonth1}
                            >
                              <option
                                value={
                                  currentMonth -
                                  new Date(this.state.batch1.open3).getMonth()
                                }
                              >
                                {currentMonth -
                                  new Date(this.state.batch1.open3).getMonth()}
                              </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              onChange={this.onChangeTotalPrice2}
                              value={
                                (this.state.totalPrice2 =
                                  this.state.valueMonth1 === undefined
                                    ? 0
                                    : this.state.valueMonth1 === '-1'
                                    ? 0
                                    : this.state.valueMonth1 === '-2'
                                    ? 0
                                    : this.state.valueMonth1 === '-3'
                                    ? 0
                                    : this.state.state3
                                    ? parseInt(this.state.batch1.open2) *
                                        this.state.valueMonth1 -
                                      this.state.state3
                                    : this.state.state4
                                    ? parseInt(this.state.batch1.open2) *
                                        this.state.valueMonth1 -
                                      this.state.state4
                                    : parseInt(this.state.batch1.open2) *
                                      this.state.valueMonth1)
                              }
                            />
                          </td>
                          {options1.map((option) => (
                            <td key={`${this.state.batch1.open1}_${option}`}>
                              <Grid container direction="row">
                                <Grid
                                  item
                                  container
                                  direction="column"
                                  sm
                                  style={{ marginRight: '1px' }}
                                >
                                  <InputGroup.Checkbox
                                    style={{
                                      display: 'flex',
                                      padding: '0',
                                      marginBottom: 0,
                                      fontSize: '0',
                                      fontWeight: 0,
                                      lineHeight: 0,
                                      color: ' #495057',
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                      backgroundColor: '#e9ecef',
                                      border: 0,
                                    }}
                                    type="radio"
                                    aria-label="radio 1"
                                    value={option}
                                    name={this.state.batch1.open1}
                                    defaultChecked={
                                      option === 'regular' ? true : false
                                    }
                                    selected={
                                      Boolean(
                                        this.state.stateNo1[
                                          this.state.batch1.open1
                                        ]
                                      ) &&
                                      this.state.stateNo1[
                                        this.state.batch1.open1
                                      ] === option
                                    }
                                    onChange={this.onChangesetStateNo1}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={
                                        this.state.state3[
                                          this.state.batch1.open1
                                        ]
                                      }
                                      name={this.state.batch1.open1}
                                      onChange={this.onChangesetState4}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={
                                          this.state.state4[
                                            this.state.batch1.open1
                                          ]
                                        }
                                        name={this.state.batch1.open1}
                                        onChange={this.onChangesetState3}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                      )}

                      {this.state.batch2.open1 === '' ? (
                        <tr key={this.state.batch2._id}></tr>
                      ) : (
                        <tr>
                          <td>{this.state.batch2.open1}</td>
                          <td>{this.state.batch2.open2}</td>
                          <td>
                            {months[
                              new Date(this.state.batch2.open3).getMonth()
                            ] +
                              '-' +
                              new Date(this.state.batch2.open3).getFullYear()}
                          </td>
                          <td>
                            <select
                              className="custom-select"
                              id="length"
                              value={this.state.valueMonth2}
                              onChange={this.onChangeValueMonth2}
                            >
                              <option
                                value={
                                  currentMonth -
                                  new Date(this.state.batch2.open3).getMonth()
                                }
                              >
                                {currentMonth -
                                  new Date(this.state.batch2.open3).getMonth()}
                              </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              onChange={this.onChangeTotalPrice3}
                              value={
                                (this.state.totalPrice3 =
                                  this.state.valueMonth2 === undefined
                                    ? 0
                                    : this.state.valueMonth2 === '-1'
                                    ? 0
                                    : this.state.valueMonth2 === '-2'
                                    ? 0
                                    : this.state.valueMonth2 === '-3'
                                    ? 0
                                    : this.state.state5
                                    ? parseInt(this.state.batch2.open2) *
                                        this.state.valueMonth2 -
                                      this.state.state5
                                    : this.state.state6
                                    ? parseInt(this.state.batch2.open2) *
                                        this.state.valueMonth2 -
                                      this.state.state6
                                    : parseInt(this.state.batch2.open2) *
                                      this.state.valueMonth2)
                              }
                            />
                          </td>
                          {options2.map((option) => (
                            <td key={`${this.state.batch2.open1}_${option}`}>
                              <Grid container direction="row">
                                <Grid
                                  item
                                  container
                                  direction="column"
                                  sm
                                  style={{ marginRight: '1px' }}
                                >
                                  <InputGroup.Checkbox
                                    style={{
                                      display: 'flex',
                                      padding: '0',
                                      marginBottom: 0,
                                      fontSize: '0',
                                      fontWeight: 0,
                                      lineHeight: 0,
                                      color: ' #495057',
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                      backgroundColor: '#e9ecef',
                                      border: 0,
                                    }}
                                    type="radio"
                                    aria-label="radio 1"
                                    value={option}
                                    name={this.state.batch2.open1}
                                    defaultChecked={
                                      option === 'regular' ? true : false
                                    }
                                    selected={
                                      Boolean(
                                        this.state.stateNo2[
                                          this.state.batch2.open1
                                        ]
                                      ) &&
                                      this.state.stateNo2[
                                        this.state.batch2.open1
                                      ] === option
                                    }
                                    onChange={this.onChangesetStateNo2}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={
                                        this.state.state5[
                                          this.state.batch2.open1
                                        ]
                                      }
                                      name={this.state.batch2.open1}
                                      onChange={this.onChangesetState5}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={
                                          this.state.state6[
                                            this.state.batch2.open1
                                          ]
                                        }
                                        name={this.state.batch2.open1}
                                        onChange={this.onChangesetState6}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                      )}

                      {this.state.batch3.open1 === '' ? (
                        <tr key={this.state.batch3._id}></tr>
                      ) : (
                        <tr>
                          <td>{this.state.batch3.open1}</td>
                          <td>{this.state.batch3.open2}</td>
                          <td>
                            {months[
                              new Date(this.state.batch3.open3).getMonth()
                            ] +
                              '-' +
                              new Date(this.state.batch3.open3).getFullYear()}
                          </td>
                          <td>
                            <select
                              className="custom-select"
                              id="length"
                              value={this.state.valueMonth3}
                              onChange={this.onChangeValueMonth3}
                            >
                              <option
                                value={
                                  currentMonth -
                                  new Date(this.state.batch3.open3).getMonth()
                                }
                              >
                                {currentMonth -
                                  new Date(this.state.batch3.open3).getMonth()}
                              </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              onChange={this.onChangeTotalPrice4}
                              value={
                                (this.state.totalPrice4 =
                                  this.state.valueMonth3 === undefined
                                    ? 0
                                    : this.state.valueMonth3 === '-1'
                                    ? 0
                                    : this.state.valueMonth3 === '-2'
                                    ? 0
                                    : this.state.valueMonth3 === '-3'
                                    ? 0
                                    : this.state.state7
                                    ? parseInt(this.state.batch3.open2) *
                                        this.state.valueMonth3 -
                                      this.state.state7
                                    : this.state.state8
                                    ? parseInt(this.state.batch3.open2) *
                                        this.state.valueMonth3 -
                                      this.state.state8
                                    : parseInt(this.state.batch3.open2) *
                                      this.state.valueMonth3)
                              }
                            />
                          </td>
                          {options3.map((option) => (
                            <td key={`${this.state.batch3.open1}_${option}`}>
                              <Grid container direction="row">
                                <Grid
                                  item
                                  container
                                  direction="column"
                                  sm
                                  style={{ marginRight: '1px' }}
                                >
                                  <InputGroup.Checkbox
                                    style={{
                                      display: 'flex',
                                      padding: '0',
                                      marginBottom: 0,
                                      fontSize: '0',
                                      fontWeight: 0,
                                      lineHeight: 0,
                                      color: ' #495057',
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                      backgroundColor: '#e9ecef',
                                      border: 0,
                                    }}
                                    type="radio"
                                    aria-label="radio 1"
                                    value={option}
                                    name={this.state.batch3.open1}
                                    defaultChecked={
                                      option === 'regular' ? true : false
                                    }
                                    selected={
                                      Boolean(
                                        this.state.stateNo3[
                                          this.state.batch3.open1
                                        ]
                                      ) &&
                                      this.state.stateNo3[
                                        this.state.batch3.open1
                                      ] === option
                                    }
                                    onChange={this.onChangesetStateNo3}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={
                                        this.state.state7[
                                          this.state.batch3.open1
                                        ]
                                      }
                                      name={this.state.batch3.open1}
                                      onChange={this.onChangesetState7}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={
                                          this.state.state8[
                                            this.state.batch3.open1
                                          ]
                                        }
                                        name={this.state.batch3.open1}
                                        onChange={this.onChangesetState8}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                      )}

                      {this.state.batch4.open1 === '' ? (
                        <tr key={this.state.batch4._id}></tr>
                      ) : (
                        <tr>
                          <td>{this.state.batch4.open1}</td>
                          <td>{this.state.batch4.open2}</td>
                          <td>
                            {months[
                              new Date(this.state.batch4.open3).getMonth()
                            ] +
                              '-' +
                              new Date(this.state.batch4.open3).getFullYear()}
                          </td>
                          <td>
                            <select
                              className="custom-select"
                              id="length"
                              value={this.state.valueMonth4}
                              onChange={this.onChangeValueMonth4}
                            >
                              <option
                                value={
                                  currentMonth -
                                  new Date(this.state.batch4.open3).getMonth()
                                }
                              >
                                {currentMonth -
                                  new Date(this.state.batch4.open3).getMonth()}
                              </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              onChange={this.onChangeTotalPrice5}
                              value={
                                (this.state.totalPrice5 =
                                  this.state.valueMonth4 === undefined
                                    ? 0
                                    : this.state.valueMonth4 === '-1'
                                    ? 0
                                    : this.state.valueMonth4 === '-2'
                                    ? 0
                                    : this.state.valueMonth4 === '-3'
                                    ? 0
                                    : this.state.state9
                                    ? parseInt(this.state.batch4.open2) *
                                        this.state.valueMonth4 -
                                      this.state.state9
                                    : this.state.state10
                                    ? parseInt(this.state.batch4.open2) *
                                        this.state.valueMonth4 -
                                      this.state.state10
                                    : parseInt(this.state.batch4.open2) *
                                      this.state.valueMonth4)
                              }
                            />
                          </td>
                          {options4.map((option) => (
                            <td key={`${this.state.batch4.open1}_${option}`}>
                              <Grid container direction="row">
                                <Grid
                                  item
                                  container
                                  direction="column"
                                  sm
                                  style={{ marginRight: '1px' }}
                                >
                                  <InputGroup.Checkbox
                                    style={{
                                      display: 'flex',
                                      padding: '0',
                                      marginBottom: 0,
                                      fontSize: '0',
                                      fontWeight: 0,
                                      lineHeight: 0,
                                      color: ' #495057',
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                      backgroundColor: '#e9ecef',
                                      border: 0,
                                    }}
                                    type="radio"
                                    aria-label="radio 1"
                                    value={option}
                                    name={this.state.batch4.open1}
                                    defaultChecked={
                                      option === 'regular' ? true : false
                                    }
                                    selected={
                                      Boolean(
                                        this.state.stateNo4[
                                          this.state.batch4.open1
                                        ]
                                      ) &&
                                      this.state.stateNo4[
                                        this.state.batch4.open1
                                      ] === option
                                    }
                                    onChange={this.onChangesetStateNo4}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={
                                        this.state.state9[
                                          this.state.batch4.open1
                                        ]
                                      }
                                      name={this.state.batch4.open1}
                                      onChange={this.onChangesetState9}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={
                                          this.state.state10[
                                            this.state.batch4.open1
                                          ]
                                        }
                                        name={this.state.batch4.open1}
                                        onChange={this.onChangesetState10}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                      )}

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total Price</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="input"
                            readOnly
                            value={
                              parseInt(
                                this.state.totalPrice1 === NaN
                                  ? (this.state.totalPrice1 = 0)
                                  : this.state.totalPrice1
                              ) +
                              parseInt(
                                this.state.totalPrice2 === NaN
                                  ? (this.state.totalPrice2 = 0)
                                  : this.state.totalPrice2
                              ) +
                              parseInt(
                                this.state.totalPrice3 === NaN
                                  ? (this.state.totalPrice3 = 0)
                                  : this.state.totalPrice3
                              ) +
                              parseInt(
                                this.state.totalPrice4 === NaN
                                  ? (this.state.totalPrice4 = 0)
                                  : this.state.totalPrice4
                              ) +
                              parseInt(
                                this.state.totalPrice5 === NaN
                                  ? (this.state.totalPrice5 = 0)
                                  : this.state.totalPrice5
                              )

                              // this.state.valueMonth === undefined
                              //   ? 0
                              //   : this.state.valueMonth1 === undefined
                              //   ? 0
                              //   : this.state.valueMonth2 === undefined
                              //   ? 0
                              //   : this.state.valueMonth3 === undefined
                              //   ? 0
                              //   : this.state.valueMonth4 === undefined
                              //   ? 0
                              // :
                              // this.state.batch0.reduce(
                              //   (totalPrice, price) =>
                              //     totalPrice +
                              //     parseInt(
                              //       price.open2 === ''
                              //         ? (price.open2 = 0)
                              //         : price.open2,
                              //       10
                              //     ),
                              //   0
                              // )

                              // this.state.valueMonth === undefined
                              //   ? 0
                              //   : this.state.valueMonth === '-1'
                              //   ? 0
                              //   : this.state.valueMonth === '-2'
                              //   ? 0
                              //   : this.state.valueMonth === '-3'
                              //   ? 0
                              //   : parseInt(
                              //       this.state.batch0.open2 === ''
                              //         ? (this.state.batch0.open2 = 0)
                              //         : this.state.batch0.open2
                              //     ) *
                              //       this.state.valueMonth +
                              //       this.state.valueMonth1 ===
                              //     undefined
                              //   ? 0
                              //   : this.state.valueMonth1 === '-1'
                              //   ? 0
                              //   : this.state.valueMonth1 === '-2'
                              //   ? 0
                              //   : this.state.valueMonth1 === '-3'
                              //   ? 0
                              //   : parseInt(
                              //       this.state.batch1.open2 === ''
                              //         ? (this.state.batch1.open2 = 0)
                              //         : this.state.batch1.open2
                              //     ) *
                              //       this.state.valueMonth1 +
                              //     parseInt(
                              //       this.state.batch2.open2 === ''
                              //         ? (this.state.batch2.open2 = 0)
                              //         : this.state.batch2.open2
                              //     ) *
                              //       this.state.valueMonth2 +
                              //     parseInt(
                              //       this.state.batch3.open2 === ''
                              //         ? (this.state.batch3.open2 = 0)
                              //         : this.state.batch3.open2
                              //     ) *
                              //       this.state.valueMonth3 +
                              //     parseInt(
                              //       this.state.batch4.open2 === ''
                              //         ? (this.state.batch4.open2 = 0)
                              //         : this.state.batch4.open2
                              //     ) *
                              //       this.state.valueMonth4
                              // *
                              // this.state.valueMonth *
                              // this.state.valueMonth *
                              // this.state.valueMonth1 *
                              // this.state.valueMonth2 *
                              // this.state.valueMonth3 *
                              // this.state.valueMonth4

                              // valueMonth === undefined
                              //   ? 0
                              //   : state1.value
                              //   ? allstudent[selected].Batch09.reduce(
                              //       (totalPrice, price) =>
                              //         totalPrice +
                              //         parseInt(
                              //           price.open2 === ''
                              //             ? (price.open2 = 0)
                              //             : price.open2,
                              //           10
                              //         ),
                              //       0
                              //     ) *
                              //       valueMonth -
                              //     state1.value
                              //   : state2.value
                              //   ? allstudent[selected].Batch09.reduce(
                              //       (totalPrice, price) =>
                              //         totalPrice +
                              //         parseInt(
                              //           price.open2 === ''
                              //             ? (price.open2 = 0)
                              //             : price.open2,
                              //           10
                              //         ),
                              //       0
                              //     ) *
                              //       valueMonth -
                              //     state2.value
                              //   : allstudent[selected].Batch09.reduce(
                              //       (totalPrice, price) =>
                              //         totalPrice +
                              //         parseInt(
                              //           price.open2 === ''
                              //             ? (price.open2 = 0)
                              //             : price.open2,
                              //           10
                              //         ),
                              //       0
                              //     ) * valueMonth
                            }
                          />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      {console.log(this.state.totalPrice1)}
                      {console.log(this.state.totalPrice2)}
                      {console.log(this.state.totalPrice3)}
                      {console.log(this.state.totalPrice4)}
                      {console.log(this.state.totalPrice5)}
                      {/* {this.state.batch.map((thebatch) =>
                        thebatch.open1 === '' ? (
                          <tr key={thebatch._id}></tr>
                        ) : (
                          <tr key={thebatch._id}>
                            <td key={thebatch.open1} value={thebatch.open1}>
                              {thebatch.open1}
                            </td>
                            <td>
                              {months[new Date(thebatch.open3).getMonth()] +
                                '-' +
                                new Date(thebatch.open3).getFullYear()}
                            </td>
                            <td
                              id="height"
                              key={thebatch._id}
                              value={thebatch.open2}
                            >
                              {thebatch.open2}
                            </td>
                            <td>
                              <select
                                className="custom-select"
                                id="length"
                                value={this.state.valueMonth}
                                onChange={this.onChangeValueMonth}
                              >
                                <option
                                  value={
                                    currentMonth -
                                    new Date(thebatch.open3).getMonth()
                                  }
                                >
                                  {currentMonth -
                                    new Date(thebatch.open3).getMonth()}
                                </option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                readOnly
                                onChange={this.onChangeTotalPrice}
                                value={
                                  this.state.valueMonth === undefined
                                    ? 0
                                    : this.state.state1.value
                                    ? parseInt(thebatch.open2) *
                                        this.state.valueMonth -
                                      this.state.state1.value
                                    : this.state.state2.value
                                    ? parseInt(thebatch.open2) *
                                        this.state.valueMonth -
                                      this.state.state2.value
                                    : parseInt(thebatch.open2) *
                                      this.state.valueMonth
                                }
                              />
                            </td>
                            {options.map((option) => (
                              <td key={`${thebatch.open1}_${option}`}>
                                <Grid container direction="row">
                                  <Grid
                                    item
                                    container
                                    direction="column"
                                    sm
                                    style={{ marginRight: '1px' }}
                                  >
                                    <InputGroup.Checkbox
                                      style={{
                                        display: 'flex',
                                        padding: '0',
                                        marginBottom: 0,
                                        fontSize: '0',
                                        fontWeight: 0,
                                        lineHeight: 0,
                                        color: ' #495057',
                                        textAlign: 'left',
                                        whiteSpace: 'nowrap',
                                        backgroundColor: '#e9ecef',
                                        border: 0,
                                      }}
                                      type="radio"
                                      aria-label="radio 1"
                                      value={option}
                                      name={thebatch.open1}
                                      defaultChecked={
                                        option === 'regular' ? true : false
                                      }
                                      selected={
                                        Boolean(
                                          this.state.state[thebatch.open1]
                                        ) &&
                                        this.state.state[thebatch.open1] ===
                                          option
                                      }
                                      onChange={this.onChangesetState}
                                    />
                                  </Grid>
                                  <Grid item container direction="column" sm>
                                    {option === 'regular' ? (
                                      <div></div>
                                    ) : option === 'due' ? (
                                      <input
                                        type="number"
                                        value={
                                          this.state.state1[thebatch.open1]
                                        }
                                        name={thebatch.open1}
                                        onChange={this.onChangesetState1}
                                      />
                                    ) : (
                                      <div>
                                        <input
                                          type="number"
                                          value={
                                            this.state.state2[thebatch.open1]
                                          }
                                          name={thebatch.open1}
                                          onChange={this.onChangesetState2}
                                        />
                                      </div>
                                    )}
                                  </Grid>
                                </Grid>
                              </td>
                            ))}
                          </tr>
                        )
                      )} */}
                    </tbody>
                  </table>
                  <Button
                    style={{
                      background: '#00a65a',
                      color: 'white',
                    }}
                  >
                    Payment
                  </Button>
                </CardContent>
              </Card>
            </React.Fragment>
          </div>
        ) : (
          <div>
            <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
              <CardContent>
                <Typography variant="h6">Due Information</Typography>
                <br />
                <table
                  className="table table-striped table-bordered"
                  cellSpacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '4em' }}>
                        Batch
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Name
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        PaymentDate
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Duefor
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        PaidAmount
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        DueAmount
                      </th>
                      <th scope="col" style={{ width: '4em' }}>
                        Clear
                      </th>
                    </tr>
                  </thead>
                </table>
              </CardContent>
            </Card>
            <hr
              style={{
                clear: 'both',
                marginBottom: '1em',
                marginTop: '1rem',
                border: '3px solid #26a69a',
                background: '#26a69a',
                width: '100%',
              }}
            />
            <React.Fragment>
              <Card
                name={'test1'}
                elevation={0}
                style={{ margin: '1em', borderRadius: 0 }}
              >
                <CardContent>
                  <Typography variant="h6">Student Information</Typography>
                  <hr />
                </CardContent>
              </Card>
              <hr
                style={{
                  clear: 'both',
                  marginBottom: '1em',
                  marginTop: '1rem',
                  border: '3px solid #80cbc4',
                  background: '#80cbc4',
                  width: '100%',
                }}
              />
              <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
                <CardContent>
                  <Typography variant="h6">Payment</Typography>
                </CardContent>
              </Card>
            </React.Fragment>
          </div>
        )}
      </div>
    );
  }
}

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// let newDate = new Date();
// const currentMonth = newDate.getMonth() + 1;

// export default function Try(props) {
//   const [allstudent, setAllStudent] = useState([]);
//   const [Info, setInfo] = useState('');
//   const [oneStudents, setOneStudent] = useState({});
//   const [OnestudentBatch, setOneStudentBatch] = useState([]);
//   const [selected, setSelected] = useState(Object.keys(allstudent)[0]);
//   const [valueMonth, setValueMonth] = useState();
//   const [state, setState] = useState({});
//   const [state1, setState1] = useState({});
//   const [state2, setState2] = useState({});
//   const [payment1, setPayment1] = useState(false);
//   const [payment2, setPayment2] = useState(false);
//   // const [newDate, setNewDate] = useState(new Date());

//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const onChange = (event) => {
//     setSelected(event.target.value);
//   };

//   const onChangeValueMonth = (e) => {
//     // setValueMonth(event.target.value);
//     setValueMonth(e.target.value);
//   };

//   const onChangesetState = (e) => {
//     const { name, value } = e.target;
//     setState({
//       [name]: value,
//     });
//   };

//   const onChangesetState1 = (e) => {
//     const { value } = e.target;
//     setState1({
//       value,
//     });
//   };

//   const onChangesetState2 = (e) => {
//     const { value } = e.target;
//     setState2({
//       value,
//     });
//   };

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let url = 'https://mht-backend-1.herokuapp.com/students';
//       const response = await axios(url);
//       setAllStudent(response.data);
//     }
//     fetchMyAPI();
//   }, []);

//   const onChangeName = (e) => {
//     axios
//       .get('https://mht-backend-1.herokuapp.com/students/' + e.target.value)
//       .then((response) => {
//         setOneStudent(response.data);
//         console.log('hello: ' + oneStudents);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const options = ['regular', 'due', 'discount'];

//   // console.log(allstudent);
//   // console.log(onChangeName);

//   console.log('studentid:' + Info);

//   const {
//     // studentPhoto,
//     studentFullName,
//     fatherName,
//     motherName,
//     studentPhoneNumber,
//     guardianPhoneNumber,
//     email,
//     studentSchool,
//     sllabys,
//     specialNote,
//     studentPermentId,
//   } = oneStudents;

//   // console.log(
//   //   studentFullName,
//   //   fatherName,
//   //   motherName,
//   //   studentPhoneNumber,
//   //   guardianPhoneNumber,
//   //   email,
//   //   studentSchool,
//   //   sllabys,
//   //   specialNote,
//   //   studentPermentId
//   // );

//   return (
//     <div style={{ marginTop: '5em' }}>
//       {/* {console.log(Info)} */}
//       {/* {console.log('https://mht-backend-1.herokuapp.com/students/' + Info)} */}
//       {/* {console.log(Info + 'infostudent: ' + Onestudent)} */}
//       <Typography
//         style={{
//           marginLeft: '1rem',
//           textAlign: 'left',
//           float: 'left',
//           color: 'white',
//         }}
//       >
//         Batch Payment Dashboard
//       </Typography>
//       <Typography
//         style={{
//           textAlign: 'right',
//           float: 'right',
//           marginRight: '1rem',
//           color: 'white',
//         }}
//       >
//         Home-Student-Payment-StudentPaymentPage
//       </Typography>
//       <hr
//         style={{
//           clear: 'both',
//           marginBottom: '1em',
//           marginTop: '1rem',
//           border: '3px solid #00796b',
//           background: '#00796b',
//           width: '100%',
//         }}
//       />
//       <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
//         <CardContent>
//           <Typography variant="h6" style={{ marginBottom: '0.5em' }}>
//             Search for a Student
//           </Typography>
//           <Grid container direction="row">
//             <Grid
//               item
//               container
//               direction="column"
//               sm
//               style={{ marginRight: '1em' }}
//             >
//               <label htmlFor="exampleInputEmail1">Student</label>
//               {/* <button onClick={Click}> */}
//               <select
//                 className="custom-select mr-sm-2"
//                 onChange={onChangeName}
//                 value={Info}
//               >
//                 <option defaultChecked>Choose...</option>
//                 {allstudent.map((key) => (
//                   <option key={key.studentFullName} value={key._id}>
//                     {key.studentFullName}
//                   </option>
//                 ))}
//               </select>
//             </Grid>
//             <Grid
//               item
//               container
//               direction="column"
//               sm
//               style={{ marginLeft: '1em', marginRight: '1em' }}
//             >
//               {' '}
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Phone Number</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Number"
//                 />
//               </div>{' '}
//             </Grid>
//             <Grid
//               item
//               container
//               direction="column"
//               sm
//               style={{ marginRight: '1em' }}
//             >
//               <Button
//                 style={{
//                   textTransform: 'none',
//                   marginTop: '2em',
//                   color: 'white',
//                   background:
//                     'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
//                 }}
//               >
//                 {/* <Link
//                   activeclass="active"
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   className="text-decoration-none"
//                   to={'test1'}
//                 > */}
//                 Show Info
//                 {/* </Link> */}
//               </Button>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//       <hr
//         style={{
//           clear: 'both',
//           marginBottom: '1em',
//           marginTop: '1rem',
//           border: '3px solid #00897b',
//           background: '#00897b',
//           width: '100%',
//         }}
//       />
//       <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
//         <CardContent>
//           <Typography variant="h6">Due Information</Typography>
//           <br />
//           <table
//             className="table table-striped table-bordered"
//             cellSpacing="0"
//             width="100%"
//           >
//             <thead>
//               <tr>
//                 <th scope="col" style={{ width: '4em' }}>
//                   Batch
//                 </th>
//                 <th scope="col" style={{ width: '4em' }}>
//                   Name
//                 </th>
//                 <th scope="col" style={{ width: '4em' }}>
//                   PaymentDate
//                 </th>
//                 <th scope="col" style={{ width: '4em' }}>
//                   Duefor
//                 </th>
//                 <th scope="col" style={{ width: '4em' }}>
//                   PaidAmount
//                 </th>
//                 <th scope="col" style={{ width: '4em' }}>
//                   DueAmount
//                 </th>
//                 <th scope="col" style={{ width: '4em' }}>
//                   Clear
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>
//       <hr
//         style={{
//           clear: 'both',
//           marginBottom: '1em',
//           marginTop: '1rem',
//           border: '3px solid #26a69a',
//           background: '#26a69a',
//           width: '100%',
//         }}
//       />
//       <hr style={{ clear: 'both', marginBottom: '1rem' }} />
//       {allstudent[selected] === undefined ? (
//         ''
//       ) : (
//         <React.Fragment>
//           <Card
//             name={'test1'}
//             elevation={0}
//             style={{ margin: '1em', borderRadius: 0 }}
//           >
//             <CardContent>
//               <Typography variant="h6">Student Information</Typography>
//               <hr />
//               <br />
//               <Grid container direction="row" key={allstudent[selected]._id}>
//                 <Grid item container direction="column" sm>
//                   <div
//                     style={{
//                       width: '10em',
//                       height: '10em',
//                       marginTop: '1rem',
//                       display: 'block',
//                       marginLeft: 'auto',
//                       marginRight: 'auto',
//                       marginBottom: '1em',
//                     }}
//                   >
//                     <img
//                       src=""
//                       alt="student"
//                       style={{
//                         border: '1px solid black',
//                         width: '10em',
//                         height: '10em',
//                         objectFit: 'cover',
//                         display: 'block',
//                         marginLeft: 'auto',
//                         marginRight: 'auto',
//                       }}
//                     />
//                   </div>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography
//                       style={{
//                         fontSize: 16,
//                         fontWeight: 600,
//                         textAlign: 'center',
//                       }}
//                     >
//                       School Name: {allstudent[selected].studentSchool}
//                     </Typography>
//                   </div>
//                 </Grid>
//                 <Grid item container direction="column" sm>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography style={{ fontSize: 16, fontWeight: 600 }}>
//                       Student's Name:
//                     </Typography>
//                     <Typography>
//                       {allstudent[selected].studentFullName}
//                     </Typography>
//                   </div>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography style={{ fontSize: 16, fontWeight: 600 }}>
//                       Father's Name:
//                     </Typography>
//                     <Typography>{allstudent[selected].fatherName}</Typography>
//                   </div>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography style={{ fontSize: 16, fontWeight: 600 }}>
//                       Mother's Name:
//                     </Typography>
//                     <Typography>{allstudent[selected].motherName}</Typography>
//                   </div>
//                 </Grid>
//                 <Grid item container direction="column" sm>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography style={{ fontSize: 16, fontWeight: 600 }}>
//                       Student's Phone Number:
//                     </Typography>
//                     <Typography>
//                       {allstudent[selected].studentPhoneNumber}
//                     </Typography>
//                   </div>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography style={{ fontSize: 16, fontWeight: 600 }}>
//                       Guardian's Phone Number:
//                     </Typography>
//                     <Typography>
//                       {allstudent[selected].guardianPhoneNumber}
//                     </Typography>
//                   </div>
//                   <div style={{ marginBottom: '1em' }}>
//                     <Typography style={{ fontSize: 16, fontWeight: 600 }}>
//                       Email:
//                     </Typography>
//                     <Typography>{allstudent[selected].email}</Typography>
//                   </div>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//           <hr
//             style={{
//               clear: 'both',
//               marginBottom: '1em',
//               marginTop: '1rem',
//               border: '3px solid #80cbc4',
//               background: '#80cbc4',
//               width: '100%',
//             }}
//           />
//           <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
//             <CardContent>
//               <Typography variant="h6">Payment</Typography>
//               <br />
//               <br />
//               <table
//                 className="table table-striped table-bordered"
//                 cellSpacing="0"
//                 width="100%"
//               >
//                 <thead>
//                   <tr>
//                     <th scope="col" style={{ width: '10em' }}>
//                       Batch Name
//                     </th>
//                     <th scope="col" style={{ width: '2em' }}>
//                       Payment form
//                     </th>
//                     <th scope="col" style={{ width: '3em' }}>
//                       Unit Price/=
//                     </th>
//                     <th scope="col" style={{ width: '3em' }}>
//                       no. of month
//                     </th>
//                     <th scope="col" style={{ width: '6em' }}>
//                       Total Price Per Course /=
//                     </th>
//                     <th scope="col" style={{ width: '2em' }}>
//                       Regular
//                     </th>
//                     <th scope="col" style={{ width: '5em' }}>
//                       Due
//                     </th>
//                     <th scope="col" style={{ width: '5em' }}>
//                       Discount
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* {console.log(newDate)} */}
//                   {allstudent[selected].Batch09.map((thebatch) =>
//                     thebatch.open1 === '' ? (
//                       <tr key={thebatch._id}></tr>
//                     ) : (
//                       <React.Fragment>
//                         <tr key={thebatch._id}>
//                           <td key={thebatch.open1} value={thebatch.open1}>
//                             {thebatch.open1}
//                           </td>
//                           <td>
//                             {months[new Date(thebatch.open3).getMonth()] +
//                               '-' +
//                               new Date(thebatch.open3).getFullYear()}
//                           </td>
//                           <td
//                             id="height"
//                             key={thebatch._id}
//                             value={thebatch.open2}
//                           >
//                             {thebatch.open2}
//                           </td>
//                           <td>
//                             <select
//                               className="custom-select"
//                               id="length"
//                               value={
//                                 currentMonth -
//                                 new Date(thebatch.open3).getMonth()
//                               }
//                               onChange={onChangeValueMonth}
//                             >
//                               <option value="0">0</option>
//                               <option value="1">1</option>
//                               <option value="2">2</option>
//                               <option value="3">3</option>
//                               <option value="4">4</option>
//                               <option value="5">5</option>
//                             </select>
//                           </td>
//                           {/* {console.log(
//                              - new Date(thebatch.open3).getMonth()
//                           )} */}
//                           {/* {console.log(
//                             (valueMonth =
//                               currentMonth - new Date(thebatch.open3).getMonth())
//                           )} */}
//                           <td>
//                             <input
//                               type="text"
//                               className="form-control"
//                               readOnly
//                               value={
//                                 valueMonth === undefined
//                                   ? 0
//                                   : state1.value
//                                   ? parseInt(thebatch.open2) * valueMonth -
//                                     state1.value
//                                   : state2.value
//                                   ? parseInt(thebatch.open2) * valueMonth -
//                                     state2.value
//                                   : parseInt(thebatch.open2) * valueMonth
//                               }
//                             />
//                           </td>
//                           {options.map((option) => (
//                             <td key={`${thebatch.open1}_${option}`}>
//                               <Grid container direction="row">
//                                 <Grid
//                                   item
//                                   container
//                                   direction="column"
//                                   sm
//                                   style={{ marginRight: '1px' }}
//                                 >
//                                   <InputGroup.Checkbox
//                                     style={{
//                                       display: 'flex',
//                                       padding: '0',
//                                       marginBottom: 0,
//                                       fontSize: '0',
//                                       fontWeight: 0,
//                                       lineHeight: 0,
//                                       color: ' #495057',
//                                       textAlign: 'left',
//                                       whiteSpace: 'nowrap',
//                                       backgroundColor: '#e9ecef',
//                                       border: 0,
//                                     }}
//                                     type="radio"
//                                     aria-label="radio 1"
//                                     value={option}
//                                     name={thebatch.open1}
//                                     defaultChecked={
//                                       option === 'regular' ? true : false
//                                     }
//                                     selected={
//                                       Boolean(state[thebatch.open1]) &&
//                                       state[thebatch.open1] === option
//                                     }
//                                     onChange={onChangesetState}
//                                   />
//                                 </Grid>
//                                 <Grid item container direction="column" sm>
//                                   {option === 'regular' ? (
//                                     <div></div>
//                                   ) : option === 'due' ? (
//                                     <input
//                                       type="number"
//                                       value={state1[thebatch.open1]}
//                                       name={thebatch.open1}
//                                       onChange={onChangesetState1}
//                                     />
//                                   ) : (
//                                     <div>
//                                       <input
//                                         type="number"
//                                         value={state2[thebatch.open1]}
//                                         name={thebatch.open1}
//                                         onChange={onChangesetState2}
//                                       />
//                                     </div>
//                                   )}
//                                 </Grid>
//                               </Grid>
//                             </td>
//                           ))}
//                         </tr>
//                         {/* {console.log(
//                           state1.value === undefined
//                             ? console.log("it's fine1")
//                             : console.log(state1.value)
//                         )}
//                         {console.log(
//                           state2.value === undefined
//                             ? console.log("it's fine2")
//                             : console.log(state2.value)
//                         )} */}
//                       </React.Fragment>
//                     )
//                   )}
//                   <tr>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td>Total Price</td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="input"
//                         readOnly
//                         value={
//                           valueMonth === undefined
//                             ? 0
//                             : state1.value
//                             ? allstudent[selected].Batch09.reduce(
//                                 (totalPrice, price) =>
//                                   totalPrice +
//                                   parseInt(
//                                     price.open2 === ''
//                                       ? (price.open2 = 0)
//                                       : price.open2,
//                                     10
//                                   ),
//                                 0
//                               ) *
//                                 valueMonth -
//                               state1.value
//                             : state2.value
//                             ? allstudent[selected].Batch09.reduce(
//                                 (totalPrice, price) =>
//                                   totalPrice +
//                                   parseInt(
//                                     price.open2 === ''
//                                       ? (price.open2 = 0)
//                                       : price.open2,
//                                     10
//                                   ),
//                                 0
//                               ) *
//                                 valueMonth -
//                               state2.value
//                             : allstudent[selected].Batch09.reduce(
//                                 (totalPrice, price) =>
//                                   totalPrice +
//                                   parseInt(
//                                     price.open2 === ''
//                                       ? (price.open2 = 0)
//                                       : price.open2,
//                                     10
//                                   ),
//                                 0
//                               ) * valueMonth
//                         }
//                       />
//                     </td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                 </tbody>
//               </table>
//               {/* {allstudent[selected].studentFullName === 'yoha' ? (
//                 <Button
//                   onClick={onChangePayment1}
//                   style={{
//                     background: payment1 === true ? 'lightgreen' : '#00a65a',
//                     color: 'white',
//                   }}
//                 >
//                   Payment
//                 </Button>
//               ) : allstudent[selected].studentFullName === 'mina ashido' ? (
//                 <Button
//                   onClick={onChangePayment2}
//                   style={{
//                     background: payment2 === true ? 'lightgreen' : '#00a65a',
//                     color: 'white',
//                   }}
//                 >
//                   Payment
//                 </Button>
//               ) : null} */}
//               <Button
//                 style={{
//                   background: '#00a65a',
//                   color: 'white',
//                 }}
//               >
//                 Payment
//               </Button>
//             </CardContent>
//           </Card>
//         </React.Fragment>
//       )}
//       {<BatchPayments />}
//     </div>
//   );
// }
