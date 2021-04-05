import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import AsyncSelect from 'react-select/async';
import { stateOptions } from './docs/data';

const LoadingIndicator = (props) => {
  return (
    <Tooltip content={'Custom Loader'}>
      <CircularProgress {...props} delay={0} />
    </Tooltip>
  );
};

const filterColors = (inputValue) =>
  stateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export class OtherPayments extends Component {
  render() {
    return (
      <div style={{ marginTop: '5em' }}>
        <Typography
          variant="h5"
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Payment Dashboard
        </Typography>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '1rem',
            color: 'white',
            marginBottom: '1rem',
          }}
        >
          Home - Students - Payment - Student Payment Page
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
          }}
        />
        <Card
          style={{
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: 0,
            background: 'white',
          }}
        >
          <CardContent elevation={3}>
            <Typography>Search for a Student</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <div className="form-row" style={{ marginTop: '1em' }}>
              <div className="form-group col-md-4">
                <AsyncSelect
                  menuPortalTarget={document.querySelector('body')}
                  cacheOptions
                  defaultOptions
                  loadOptions={promiseOptions}
                  components={{ LoadingIndicator }}
                />
              </div>
              <div className="form-group col-md-4">
                <button
                  type="button"
                  className="btn btn-block btn-lg"
                  style={{ background: '#001f3f', color: 'white' }}
                >
                  Show Student Info & Admission Status
                </button>
              </div>
              <div className="form-group col-md-4">
                <button
                  type="button"
                  className="btn btn-block btn-lg"
                  style={{ background: '#39cccc', color: 'white' }}
                >
                  Buy Other Equipment
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
          }}
        />
        <Card
          style={{
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: 0,
            background: 'white',
          }}
        >
          <CardContent>
            <Typography variant="h6">Student Information</Typography>
            <Grid container direction="row">
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
                    School Name: test
                  </Typography>
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div style={{ marginBottom: '1em' }}>
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Student Name:
                  </Typography>
                  <Typography>test</Typography>
                </div>
                <div style={{ marginBottom: '1em' }}>
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Father's Name:
                  </Typography>
                  <Typography>test</Typography>
                </div>
                <div style={{ marginBottom: '1em' }}>
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Mother's Name:
                  </Typography>
                  <Typography>test</Typography>
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div style={{ marginBottom: '1em' }}>
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Student's Phone Number:
                  </Typography>
                  <Typography>test</Typography>
                </div>
                <div style={{ marginBottom: '1em' }}>
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Guardian's Phone Number:
                  </Typography>
                  <Typography>test</Typography>
                </div>
                <div style={{ marginBottom: '1em' }}>
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography>test@gmail.com</Typography>
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
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
          }}
        />
        <Card
          style={{
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: 0,
            background: 'white',
          }}
        >
          <CardContent elevation={3}>
            <Typography>Admission Payment Section</Typography>
            <div className="alert alert-success" role="alert">
              Admission fee is paid for this student !
            </div>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
          }}
        />
        <Card
          style={{
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: 0,
            background: 'white',
          }}
        >
          <CardContent elevation={3}>
            <Typography>Other Payment Section</Typography>
            <br />
            <table
              className="table table-striped table-bordered"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col" style={{ width: '8em', textAlign: 'center' }}>
                    Payment Type
                  </th>
                  <th scope="col" style={{ width: '4em', textAlign: 'center' }}>
                    Description
                  </th>
                  <th scope="col" style={{ width: '3em', textAlign: 'center' }}>
                    Amount /=
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Other Fee</td>
                  <td>
                    <form>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Description"
                        />
                      </div>
                    </form>
                  </td>
                  <td>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Amount /="
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <form>
              <div class="row">
                <div class="col"></div>
                <div class="col">
                  <button
                    type="button"
                    className="btn btn-block btn-lg"
                    style={{ background: '#39cccc', color: 'white' }}
                  >
                    Payment
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
