import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { InputGroup } from 'react-bootstrap';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';

// prmovies

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Try() {
  const [allstudent, setAllStudent] = useState([]);
  const [valueMonth, setValueMonth] = useState({});
  const [state, setState] = useState({});
  const [state1, setState1] = useState({});
  const [state2, setState2] = useState({});
  const [payment1, setPayment1] = useState(false);
  const [payment2, setPayment2] = useState(false);
  const [selected, setSelected] = useState(Object.keys(allstudent)[0]);

  const onChange = (event) => {
    setSelected(event.target.value);
  };

  const onChangeValueMonth = (e) => {
    // setValueMonth(event.target.value);
    const { value } = e.target;
    setValueMonth({
      value,
    });
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
      console.log(response.data);
      setAllStudent(response.data);
    }
    fetchMyAPI();
  }, []);

  const options = ['regular', 'due', 'discount'];

  console.log(allstudent);

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
              style={{ marginLeft: '1em' }}
            >
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: '1em' }}
              >
                <Button
                  style={{
                    textTransform: 'none',
                    marginTop: '2em',
                    color: 'white',
                    background:
                      'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                  }}
                >
                  Show Due
                </Button>
              </Grid>
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
              {allstudent[selected].studentFullName === 'yoha'
                ? hello1
                : allstudent[selected].studentFullName === 'mina ashido'
                ? hello2
                : null}
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
                  {allstudent[selected].Batch09.map((thebatch) =>
                    thebatch.open1 === '' ? (
                      <tr key={thebatch._id}></tr>
                    ) : (
                      <React.Fragment>
                        <tr key={thebatch._id}>
                          <td key={thebatch.open1} value={thebatch.open1}>
                            {thebatch.open1}
                          </td>
                          <td></td>
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
                              value={valueMonth[thebatch.open1]}
                              onChange={onChangeValueMonth}
                              // selected={
                              //   Boolean(valueMonth[thebatch.open1]) &&
                              //   valueMonth[thebatch.open1] === valueMonth
                              // }
                            >
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </td>
                          {console.log('month:' + valueMonth.value)}
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              // name="input"
                              readOnly
                              value={
                                valueMonth.value === undefined
                                  ? 0
                                  : state1.value
                                  ? parseInt(thebatch.open2) *
                                      valueMonth.value -
                                    state1.value
                                  : state2.value
                                  ? parseInt(thebatch.open2) *
                                      valueMonth.value -
                                    state2.value
                                  : parseInt(thebatch.open2) * valueMonth.value
                              }

                              // checked={
                              //     ? parseInt(thebatch.open2) * valueMonth -
                              //       state1.value
                              //     : state2.value
                              //     ? parseInt(thebatch.open2) * valueMonth -
                              //       state2.value
                              //     : parseInt(thebatch.open2) * valueMonth
                              // }
                            />
                          </td>
                          {console.log(
                            valueMonth.value === undefined ? 0 : null
                          )}
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
                        {console.log(
                          state1.value === undefined
                            ? console.log("it's fine1")
                            : console.log(state1.value)
                        )}
                        {console.log(
                          state2.value === undefined
                            ? console.log("it's fine2")
                            : console.log(state2.value)
                        )}
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
                          valueMonth.value === undefined
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
                                valueMonth.value -
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
                                valueMonth.value -
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
                              ) * valueMonth.value
                        }
                      />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {allstudent[selected].studentFullName === 'yoha' ? (
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
              ) : null}
            </CardContent>
          </Card>
        </React.Fragment>
      )}
    </div>
  );
}
