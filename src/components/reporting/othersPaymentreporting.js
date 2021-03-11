import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';

export default class OthersPaymentReporting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDailyCollection: false,
      showDueReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
    };
  }

  _showDailyCollection = (bool) => {
    this.setState({
      showDailyCollection: bool,
    });
  };

  _showDueReporting = (bool) => {
    this.setState({
      showDueReporting: bool,
    });
  };

  _showDateRangeCollection = (bool) => {
    this.setState({
      showDateRangeCollection: bool,
    });
  };

  _showMonthlyPaymentStatement = (bool) => {
    this.setState({
      showMonthlyPaymentStatement: bool,
    });
  };

  render() {
    const Content = this.state.showDailyCollection ? (
      <div>
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
            <Typography>Daily Reporting</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
            <div>
              <h4>Showing Daily Payment Reporting</h4>
              <table
                id="dtBasicExample"
                className="table table-striped table-bordered"
                width="100%"
                style={{
                  marginTop: '0.5em',
                  marginBottom: '0.5em',
                }}
              >
                <thead>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
                  </tr>
                </tbody>
              </table>
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
            <Typography>Daily Reporting</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
          </CardContent>
        </Card>
      </div>
    ) : this.state.showDueReporting ? (
      <div>
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
            <Typography>Choose Reporting Option</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
            <div>showDueReporting</div>
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
            <Typography>Payment Reporting </Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
          </CardContent>
        </Card>
      </div>
    ) : this.state.showDateRangeCollection ? (
      <div>
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
            <Typography>Choose Reporting Option </Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
            <div>showDateRangeCollection</div>
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
            <Typography>Payment Reporting</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
          </CardContent>
        </Card>
      </div>
    ) : this.state.showMonthlyPaymentStatement ? (
      <div>
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
            <Typography>Choose Reporting Option</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
            <div>showMonthlyPaymentStatement</div>
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
            <Typography>Payment Reporting</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
          </CardContent>
        </Card>
      </div>
    ) : (
      <div>
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
            <Typography>Choose Reporting Option </Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
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
            <Typography>Payment Reporting</Typography>
            <br />
            <table
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead className="">
                <th scope="col" style={{ width: '1em' }}>
                  Invoice ID
                </th>
                <th scope="col" style={{ width: '17em' }}>
                  Student Permanent ID
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Student Name
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Phone Number
                </th>
                <th scope="col" style={{ width: '13em' }}>
                  Payment Date
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Payment Type
                </th>
                <th scope="col" style={{ width: '13em' }}>
                  Description
                </th>
                <th scope="col" style={{ width: '13em' }}>
                  Total Amount/-
                </th>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );

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
          Payment Reporting Dashboard
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
          Home - Reporting - Payment Reporting Page
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
            <Typography>Choose Reporting Option</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <div className="form-row" style={{ marginTop: '1em' }}>
              <div className="form-group col-md-3">
                <button
                  type="button"
                  onClick={this._showDailyCollection.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#00a65a', color: 'white' }}
                >
                  <strong>Daily</strong> Collection
                </button>
              </div>
              <div className="form-group col-md-3">
                <button
                  type="button"
                  onClick={this._showDueReporting.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#dd4b39', color: 'white' }}
                >
                  <strong>Due</strong> Reporting
                </button>
              </div>
              <div className="form-group col-md-3">
                <button
                  type="button"
                  onClick={this._showDateRangeCollection.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#00c0ef', color: 'white' }}
                >
                  <strong>Show Date Range</strong> Collection
                </button>
              </div>
              <div className="form-group col-md-3">
                <button
                  type="button"
                  onClick={this._showMonthlyPaymentStatement.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#f39c12', color: 'white' }}
                >
                  <strong>Monthly Payment </strong> Statement
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        {Content}
      </div>
    );
  }
}
