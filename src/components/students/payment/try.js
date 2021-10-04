import React, { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { InputGroup } from 'react-bootstrap';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import { Link, Element } from 'react-scroll';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let newDate = new Date();
const currentMonth = newDate.getMonth() + 1;

let s;

export default function Try(props) {
  const [allstudent, setAllStudent] = useState([]);
  const [Info, setInfo] = useState('');
  const [Onestudent, setOneStudent] = useState({});
  const [OnestudentBatch, setOneStudentBatch] = useState([]);
  const [selected, setSelected] = useState(Object.keys(allstudent)[0]);
  const [valueMonth, setValueMonth] = useState();
  const [state, setState] = useState({});
  const [state1, setState1] = useState({});
  const [state2, setState2] = useState({});
  const [payment1, setPayment1] = useState(false);
  const [payment2, setPayment2] = useState(false);
  const divRef = useRef();
  // const [newDate, setNewDate] = useState(new Date());

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

  const onChange = (event) => {
    setSelected(event.target.value);
  };

  const onChangeValueMonth = (e) => {
    // setValueMonth(event.target.value);
    setValueMonth(e.target.value);
  };

  const onChangesetState = (e) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };

  const onChangesetState1 = (e) => {
    const { value } = e.target;
    setState1({
      value,
    });
  };

  const onChangesetState2 = (e) => {
    const { value } = e.target;
    setState2({
      value,
    });
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let url = 'https://mht-backend-1.herokuapp.com/students';
      const response = await axios(url);
      setAllStudent(response.data);
    }
    fetchMyAPI();
  }, []);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let url = 'https://mht-backend-1.herokuapp.com/students/' + Info;
  //     const response = await axios(url);
  //     console.log(response.data);
  //     setOneStudent(response.data);
  //   }
  //   Info === '' ? console.log('nothing') : fetchMyAPI();
  // }, []);

  useEffect(() => {
    // action on update of movies
}, [allstudent]);

  const onChangeName = (event) => {
    setInfo(event.target.value);
    // setMovies(prevMovies => ([...prevMovies, ...result]));
    // setInfo({ Info: event.target.value }, function () {
    //   console.log(Info);
    // });
    // var selections = allstudent;
    // var newSelections = selections.concat(Info);
    // console.log('newSelections: ' + newSelections);
    // setInfo({ allstudent: newSelections }, () => {
    //   console.log(allstudent);
    // });
    // setTimeout
    // setInfo({ Info: event.target.value }, () => {
    //   console.log(Info);
    // });
    // console.log(event.target.value);
    // console.log('info11: ' + Info);
    // setInfo({ Info: newSelections }, () => {
    //   console.log(Info);
    // });
    axios
      .get('https://mht-backend-1.herokuapp.com/students/' + Info)
      .then((res) => {
        // console.log(res.data);
        setOneStudent(res.data);
        // console.log('InfoStudent:' + Onestudent);
      });
  };

  const options = ['regular', 'due', 'discount'];

  // console.log(allstudent);
  // console.log(onChangeName);

  // const Click = () => {
  //   axios
  //     .get('https://mht-backend-1.herokuapp.com/students/' + Info)
  //     .then((res) => {
  //       console.log(res.data);
  //       setOneStudent(res.data);
  //       console.log('InfoStudent:' + Onestudent);
  //     });
  // };

  // React.useEffect(() => {
  //   s = setInterval(() => {
  //     setInfo((state) => state);
  //   }, 1000);
  // }, []);

  console.log('studentid:' + Info);

  const {
    // studentPhoto,
    studentFullName,
    fatherName,
    motherName,
    studentPhoneNumber,
    guardianPhoneNumber,
    email,
    studentSchool,
    sllabys,
    specialNote,
    studentPermentId,
  } = Onestudent;

  console.log(
    studentFullName,
    fatherName,
    motherName,
    studentPhoneNumber,
    guardianPhoneNumber,
    email,
    studentSchool,
    sllabys,
    specialNote,
    studentPermentId
  );

  return (
    <div style={{ marginTop: '5em' }}>
      {/* {console.log(Info)} */}
      {/* {console.log('https://mht-backend-1.herokuapp.com/students/' + Info)} */}
      {/* {console.log(Info + 'infostudent: ' + Onestudent)} */}
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
              {/* <button onClick={Click}> */}
              <select
                className="custom-select mr-sm-2"
                onChange={onChangeName}
                value={Info}
                // onClick={Click}
              >
                <option defaultChecked>Choose...</option>
                {allstudent.map((key) => (
                  <option
                    // onClick={Click}
                    key={key.studentFullName}
                    value={key._id}
                  >
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
              >
                <Link
                  activeclass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-decoration-none"
                  to={'test1'}
                >
                  Show Info
                </Link>
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
      <hr style={{ clear: 'both', marginBottom: '1rem' }} />
      <Card>
        <Element name="test1">Test1</Element>
      </Card>
      {allstudent[selected] === undefined ? (
        ''
      ) : (
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
              <Grid container direction="row" key={allstudent[selected]._id}>
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
                      School Name: {allstudent[selected].studentSchool}
                    </Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Name:
                    </Typography>
                    <Typography>
                      {allstudent[selected].studentFullName}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Father's Name:
                    </Typography>
                    <Typography>{allstudent[selected].fatherName}</Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Mother's Name:
                    </Typography>
                    <Typography>{allstudent[selected].motherName}</Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Phone Number:
                    </Typography>
                    <Typography>
                      {allstudent[selected].studentPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Guardian's Phone Number:
                    </Typography>
                    <Typography>
                      {allstudent[selected].guardianPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Email:
                    </Typography>
                    <Typography>{allstudent[selected].email}</Typography>
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
                      Due
                    </th>
                    <th scope="col" style={{ width: '5em' }}>
                      Discount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(newDate)} */}
                  {allstudent[selected].Batch09.map((thebatch) =>
                    thebatch.open1 === '' ? (
                      <tr key={thebatch._id}></tr>
                    ) : (
                      <React.Fragment>
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
                              value={
                                currentMonth -
                                new Date(thebatch.open3).getMonth()
                              }
                              onChange={onChangeValueMonth}
                            >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          {/* {console.log(
                             - new Date(thebatch.open3).getMonth()
                          )} */}
                          {/* {console.log(
                            (valueMonth =
                              currentMonth - new Date(thebatch.open3).getMonth())
                          )} */}
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              value={
                                valueMonth === undefined
                                  ? 0
                                  : state1.value
                                  ? parseInt(thebatch.open2) * valueMonth -
                                    state1.value
                                  : state2.value
                                  ? parseInt(thebatch.open2) * valueMonth -
                                    state2.value
                                  : parseInt(thebatch.open2) * valueMonth
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
                                      Boolean(state[thebatch.open1]) &&
                                      state[thebatch.open1] === option
                                    }
                                    onChange={onChangesetState}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={state1[thebatch.open1]}
                                      name={thebatch.open1}
                                      onChange={onChangesetState1}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={state2[thebatch.open1]}
                                        name={thebatch.open1}
                                        onChange={onChangesetState2}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                        {/* {console.log(
                          state1.value === undefined
                            ? console.log("it's fine1")
                            : console.log(state1.value)
                        )}
                        {console.log(
                          state2.value === undefined
                            ? console.log("it's fine2")
                            : console.log(state2.value)
                        )} */}
                      </React.Fragment>
                    )
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
                          valueMonth === undefined
                            ? 0
                            : state1.value
                            ? allstudent[selected].Batch09.reduce(
                                (totalPrice, price) =>
                                  totalPrice +
                                  parseInt(
                                    price.open2 === ''
                                      ? (price.open2 = 0)
                                      : price.open2,
                                    10
                                  ),
                                0
                              ) *
                                valueMonth -
                              state1.value
                            : state2.value
                            ? allstudent[selected].Batch09.reduce(
                                (totalPrice, price) =>
                                  totalPrice +
                                  parseInt(
                                    price.open2 === ''
                                      ? (price.open2 = 0)
                                      : price.open2,
                                    10
                                  ),
                                0
                              ) *
                                valueMonth -
                              state2.value
                            : allstudent[selected].Batch09.reduce(
                                (totalPrice, price) =>
                                  totalPrice +
                                  parseInt(
                                    price.open2 === ''
                                      ? (price.open2 = 0)
                                      : price.open2,
                                    10
                                  ),
                                0
                              ) * valueMonth
                        }
                      />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {/* {allstudent[selected].studentFullName === 'yoha' ? (
                <Button
                  onClick={onChangePayment1}
                  style={{
                    background: payment1 === true ? 'lightgreen' : '#00a65a',
                    color: 'white',
                  }}
                >
                  Payment
                </Button>
              ) : allstudent[selected].studentFullName === 'mina ashido' ? (
                <Button
                  onClick={onChangePayment2}
                  style={{
                    background: payment2 === true ? 'lightgreen' : '#00a65a',
                    color: 'white',
                  }}
                >
                  Payment
                </Button>
              ) : null} */}
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
      )}
    </div>
  );
}

export default function Try() {
  const [allstudent, setAllStudent] = useState([]);
  const [selected, setSelected] = useState(Object.keys(allstudent)[0]);
  const [valueMonth, setValueMonth] = useState({});
  const [state, setState] = useState({});
  const [state1, setState1] = useState({});
  const [state2, setState2] = useState({});
  const [payment1, setPayment1] = useState(false);
  const [payment2, setPayment2] = useState(false);
  const [inputs, setInputs] = useState({ value: '' });
  const [value, setValue] = useState();
  // const [newDate, setNewDate] = useState(new Date());

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

  const onChange = (event) => {
    setSelected(event.target.value);
  };

  // const onChangeValue = (event) => {
  //   console.log(event.target.value);
  //   setValue(event.target.value);
  // };

  const onChangeValueMonth = (e) => {
    setValueMonth(e.target.value);
  };

  // const handleInputChange = (event) => {
  //   event.persist();
  //   setInputs((inputs) => ({
  //     ...inputs,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const onChangesetState = (e) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };

  const onChangesetState1 = (e) => {
    const { value } = e.target;
    setState1({
      value,
    });
  };

  const onChangesetState2 = (e) => {
    const { value } = e.target;
    setState2({
      value,
    });
  };

  const onChangePayment1 = (e) => {
    setPayment1({ payment1: true, payment2: false });
  };

  const onChangePayment2 = (e) => {
    setPayment2({ payment1: false, payment2: true });
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let url = 'https://mht-backend-1.herokuapp.com/students';
      const response = await axios(url);
      // console.log(response.data);
      setAllStudent(response.data);
    }
    fetchMyAPI();
  }, []);

  const options = ['regular', 'due', 'discount'];

  // console.log(allstudent);

  const hello1 = payment1 ? (
    <div>
      {allstudent[selected] === undefined ? (
        ''
      ) : (
        <div>
          <Alert severity="success">
            Payment Complete for {`${allstudent[selected].studentFullName}`}
          </Alert>
        </div>
      )}
    </div>
  ) : null;

  const hello2 = payment2 ? (
    <div>
      {allstudent[selected] === undefined ? (
        ''
      ) : (
        <div>
          <Alert severity="success">
            Payment Complete for {`${allstudent[selected].studentFullName}`}
          </Alert>
        </div>
      )}
    </div>
  ) : null;

  // var d = new Date('January 1, 2021');

  // var date = new Date();
  // var month = new Array();
  // month[0] = 'January';
  // month[1] = 'February';
  // month[2] = 'March';
  // month[3] = 'April';
  // month[4] = 'May';
  // month[5] = 'June';
  // month[6] = 'July';
  // month[7] = 'August';
  // month[8] = 'September';
  // month[9] = 'October';
  // month[10] = 'November';
  // month[11] = 'December';
  // var n = month[date.getMonth()];
  // const medate = allstudent[selected].Batch09.map((thebatch) =>
  // thebatch.open1 === '' ? (
  //   <tr key={thebatch._id}></tr>
  // ) : (
  //   {}
  // ))

  // const onChangeValue = (event) => {
  //   console.log(event.target.value);
  //   setValue(event.target.value);
  // };

  // const hello = (
  //   <div>
  //     {allstudent[selected] === undefined ? (
  //       ''
  //     ) : (
  //       <div>
  //         {allstudent[selected].Batch09.map((thebatch) =>
  //           thebatch.open1 === '' ? (
  //             <tr key={thebatch._id}></tr>
  //           ) : (
  //             <div
  //               value={value}
  //               onChange={(event) => setValue(event.target.value)}
  //             >
  //               <h6 value={thebatch._id}>{thebatch._id}</h6>
  //             </div>
  //           )
  //         )}
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div style={{ marginTop: '5em' }}>
      {/* {console.log(inputs)}
      {console.log('value: ' + value)}
      {console.log(hello)} */}
      {/* {console.log(inputs)} */}
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
              <select className="custom-select mr-sm-2" onChange={onChange}>
                <option defaultChecked>Choose...</option>
                {Object.keys(allstudent).map((key) => (
                  <option key={key} value={key}>
                    {allstudent[key].studentFullName}
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
                // onClick={this.showInfoButtonOpen}
                style={{
                  textTransform: 'none',
                  marginTop: '2em',
                  color: 'white',
                  background:
                    'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
                }}
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
      <hr style={{ clear: 'both', marginBottom: '1rem' }} />
      {allstudent[selected] === undefined ? (
        ''
      ) : (
        <React.Fragment>
          <Card elevation={0} style={{ margin: '1em', borderRadius: 0 }}>
            <CardContent>
              <Typography variant="h6">Student Information</Typography>
              <hr />
              <br />
              <Grid container direction="row" key={allstudent[selected]._id}>
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
                      School Name: {allstudent[selected].studentSchool}
                    </Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Name:
                    </Typography>
                    <Typography>
                      {allstudent[selected].studentFullName}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Father's Name:
                    </Typography>
                    <Typography>{allstudent[selected].fatherName}</Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Mother's Name:
                    </Typography>
                    <Typography>{allstudent[selected].motherName}</Typography>
                  </div>
                </Grid>
                <Grid item container direction="column" sm>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Student's Phone Number:
                    </Typography>
                    <Typography>
                      {allstudent[selected].studentPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Guardian's Phone Number:
                    </Typography>
                    <Typography>
                      {allstudent[selected].guardianPhoneNumber}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: '1em' }}>
                    <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                      Email:
                    </Typography>
                    <Typography>{allstudent[selected].email}</Typography>
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
              {/* {allstudent[selected].studentFullName === 'yoha'
                ? hello1
                : allstudent[selected].studentFullName === 'mina ashido'
                ? hello2
                : null} */}
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
                      Due
                    </th>
                    <th scope="col" style={{ width: '5em' }}>
                      Discount
                    </th>
                  </tr>
                </thead>
                <tbody key={allstudent[selected]._id}>
                  {/* {console.log(newDate)} */}
                  {allstudent[selected].Batch09.map((thebatch) =>
                    thebatch.open1 === '' ? (
                      <tr key={thebatch._id}></tr>
                    ) : (
                      <React.Fragment>
                        <tr key={thebatch._id}>
                          {/* {console.log(value)}
                          <div value={value} onChange={onChangeValue}>
                            <h6 value={thebatch._id}>{thebatch._id}</h6>
                          </div> */}
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
                            key={thebatch.open2}
                            value={thebatch.open2}
                          >
                            {thebatch.open2}
                          </td>
                          <td>
                            <select
                              className="custom-select"
                              id="length"
                              name="value"
                              value={valueMonth}
                              onChange={onChangeValueMonth}
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
                              value={
                                valueMonth === undefined
                                  ? 0
                                  : state1.value
                                  ? parseInt(thebatch.open2) * valueMonth -
                                    state1.value
                                  : state2.value
                                  ? parseInt(thebatch.open2) * valueMonth -
                                    state2.value
                                  : parseInt(thebatch.open2) * valueMonth
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
                                      Boolean(state[thebatch.open1]) &&
                                      state[thebatch.open1] === option
                                    }
                                    onChange={onChangesetState}
                                  />
                                </Grid>
                                <Grid item container direction="column" sm>
                                  {option === 'regular' ? (
                                    <div></div>
                                  ) : option === 'due' ? (
                                    <input
                                      type="number"
                                      value={state1[thebatch.open1]}
                                      name={thebatch.open1}
                                      onChange={onChangesetState1}
                                    />
                                  ) : (
                                    <div>
                                      <input
                                        type="number"
                                        value={state2[thebatch.open1]}
                                        name={thebatch.open1}
                                        onChange={onChangesetState2}
                                      />
                                    </div>
                                  )}
                                </Grid>
                              </Grid>
                            </td>
                          ))}
                        </tr>
                        {/* {console.log(
                          state1.value === undefined
                            ? console.log("it's fine1")
                            : console.log(state1.value)
                        )}
                        {console.log(
                          state2.value === undefined
                            ? console.log("it's fine2")
                            : console.log(state2.value)
                        )} */}
                      </React.Fragment>
                    )
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
                          valueMonth === undefined
                            ? 0
                            : state1.value
                            ? allstudent[selected].Batch09.reduce(
                                (totalPrice, price) =>
                                  totalPrice +
                                  parseInt(
                                    price.open2 === ''
                                      ? (price.open2 = 0)
                                      : price.open2,
                                    10
                                  ),
                                0
                              ) *
                                valueMonth -
                              state1.value
                            : state2.value
                            ? allstudent[selected].Batch09.reduce(
                                (totalPrice, price) =>
                                  totalPrice +
                                  parseInt(
                                    price.open2 === ''
                                      ? (price.open2 = 0)
                                      : price.open2,
                                    10
                                  ),
                                0
                              ) *
                                valueMonth -
                              state2.value
                            : allstudent[selected].Batch09.reduce(
                                (totalPrice, price) =>
                                  totalPrice +
                                  parseInt(
                                    price.open2 === ''
                                      ? (price.open2 = 0)
                                      : price.open2,
                                    10
                                  ),
                                0
                              ) * valueMonth
                        }
                      />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {/* {allstudent[selected].studentFullName === 'yoha' ? (
                <Button
                  onClick={onChangePayment1}
                  style={{
                    background: payment1 === true ? 'lightgreen' : '#00a65a',
                    color: 'white',
                  }}
                >
                  Payment
                </Button>
              ) : allstudent[selected].studentFullName === 'mina ashido' ? (
                <Button
                  onClick={onChangePayment2}
                  style={{
                    background: payment2 === true ? 'lightgreen' : '#00a65a',
                    color: 'white',
                  }}
                >
                  Payment
                </Button>
              ) : null} */}
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
      )}
      <br />
      <br />
      {<BatchPayments />}
    </div>
  );
}



<tbody>
                    {/* {console.log(newDate)} */}
                    {allstudent[selected].Batch09.map((thebatch) =>
                      thebatch.open1 === '' ? (
                        <tr key={thebatch._id}></tr>
                      ) : (
                        <React.Fragment>
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
                                value={
                                  currentMonth -
                                  new Date(thebatch.open3).getMonth()
                                }
                                onChange={onChangeValueMonth}
                              >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                            {/* {console.log(
                             - new Date(thebatch.open3).getMonth()
                          )} */}
                            {/* {console.log(
                            (valueMonth =
                              currentMonth - new Date(thebatch.open3).getMonth())
                          )} */}
                            <td>
                              <input
                                type="text"
                                className="form-control"
                                readOnly
                                value={
                                  valueMonth === undefined
                                    ? 0
                                    : state1.value
                                    ? parseInt(thebatch.open2) * valueMonth -
                                      state1.value
                                    : state2.value
                                    ? parseInt(thebatch.open2) * valueMonth -
                                      state2.value
                                    : parseInt(thebatch.open2) * valueMonth
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
                                        Boolean(state[thebatch.open1]) &&
                                        state[thebatch.open1] === option
                                      }
                                      onChange={onChangesetState}
                                    />
                                  </Grid>
                                  <Grid item container direction="column" sm>
                                    {option === 'regular' ? (
                                      <div></div>
                                    ) : option === 'due' ? (
                                      <input
                                        type="number"
                                        value={state1[thebatch.open1]}
                                        name={thebatch.open1}
                                        onChange={onChangesetState1}
                                      />
                                    ) : (
                                      <div>
                                        <input
                                          type="number"
                                          value={state2[thebatch.open1]}
                                          name={thebatch.open1}
                                          onChange={onChangesetState2}
                                        />
                                      </div>
                                    )}
                                  </Grid>
                                </Grid>
                              </td>
                            ))}
                          </tr>
                          {/* {console.log(
                          state1.value === undefined
                            ? console.log("it's fine1")
                            : console.log(state1.value)
                        )}
                        {console.log(
                          state2.value === undefined
                            ? console.log("it's fine2")
                            : console.log(state2.value)
                        )} */}
                        </React.Fragment>
                      )
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
                            valueMonth === undefined
                              ? 0
                              : state1.value
                              ? allstudent[selected].Batch09.reduce(
                                  (totalPrice, price) =>
                                    totalPrice +
                                    parseInt(
                                      price.open2 === ''
                                        ? (price.open2 = 0)
                                        : price.open2,
                                      10
                                    ),
                                  0
                                ) *
                                  valueMonth -
                                state1.value
                              : state2.value
                              ? allstudent[selected].Batch09.reduce(
                                  (totalPrice, price) =>
                                    totalPrice +
                                    parseInt(
                                      price.open2 === ''
                                        ? (price.open2 = 0)
                                        : price.open2,
                                      10
                                    ),
                                  0
                                ) *
                                  valueMonth -
                                state2.value
                              : allstudent[selected].Batch09.reduce(
                                  (totalPrice, price) =>
                                    totalPrice +
                                    parseInt(
                                      price.open2 === ''
                                        ? (price.open2 = 0)
                                        : price.open2,
                                      10
                                    ),
                                  0
                                ) * valueMonth
                          }
                        />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                

                import React, { useState, useEffect, Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { InputGroup } from 'react-bootstrap';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';

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

export default class BatchPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      Info: '',
      value: '',
      oneStudents: { studentFullName: '', email: '' },
      valueMonth: '',
      state: {},
      state1: {},
      state2: {},
    };

    this.onChangeValueMonth = this.onChangeValueMonth.bind(this);
    this.onChangestate = this.onChangestate.bind(this);
    this.onChangestate1 = this.onChangestate1.bind(this);
    this.onChangestate2 = this.onChangestate2.bind(this);
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
  }

  onChangeValueMonth(e) {
    // setValueMonth(event.target.value);
    this.setState({ valueMonth: e.target.value });
  }

  onChangestate(e) {
    const { name, value } = e.target;
    this.setState({ state: { [name]: value } });
  }

  onChangestate1(e) {
    const { value } = e.target;
    this.setState({
      state: value,
    });
  }

  onChangestate2(e) {
    const { value } = e.target;
    this.setState({
      state1: value,
    });
  }

  render() {
    const options = ['regular', 'due', 'discount'];
    const {
      _id,
      studentFullName,
      fatherName,
      motherName,
      studentPhoneNumber,
      guardianPhoneNumber,
      email,
    } = this.state.oneStudents;

    console.log(studentFullName);

    console.log(this.state.Info === undefined ? 'nothing' : this.state.Info);
    return (
      <div style={{ marginTop: '5em' }}>
        {/* {console.log(Info)} */}
        {/* {console.log('https://mht-backend-1.herokuapp.com/students/' + Info)} */}
        {/* {console.log(Info + 'infostudent: ' + Onestudent)} */}
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
                {/* <button onClick={Click}> */}
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
                >
                  {/* <Link
                  activeclass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-decoration-none"
                  to={'test1'}
                > */}
                  Show Info
                  {/* </Link> */}
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
        <hr style={{ clear: 'both', marginBottom: '1rem' }} />
        {/* {allstudent[selected] === undefined ? (
          ''
        ) : (
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
                        Due
                      </th>
                      <th scope="col" style={{ width: '5em' }}>
                        Discount
                      </th>
                    </tr>
                  </thead>
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
        )} */}
      </div>
      // <div>
      //   {/* <div>Input value: {value}</div> */}
      //   {/* <input placeholder="Type a value" value={value} onChange={onChange} /> */}
      //   {/* <button onClick={this.Click}> */}
      //   <div>
      //     {/* {this.state.oneStudents.map((value, i) => (
      //       <div key={i}>{value.studentFullName}</div>
      //     ))} */}
      //   </div>
      //   <select
      //     className="custom-select mr-sm-2"
      //     onChange={this.onChangeName}
      //     value={this.state.Info}
      //   >
      //     <option defaultChecked>Choose...</option>
      //     {this.state.students.map((key) => (
      //       <option key={key.studentFullName} value={key._id}>
      //         {key.studentFullName}
      //       </option>
      //     ))}
      //   </select>
      //   {/* </button> */}
      // </div>
    );
  }
}