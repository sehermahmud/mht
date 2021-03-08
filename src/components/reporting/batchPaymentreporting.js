import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
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
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Card, CardContent, Button } from '@material-ui/core';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import ReactToPrint from 'react-to-print';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [];

export class DailyCollectionprint extends Component {
  render() {
    return (
      <table
        width="100%"
        style={{
          marginTop: '0.5em',
          marginBottom: '0.5em',
        }}
      >
        <thead>
          <tr>
            <th style={{ width: '10em' }}>Invoice ID</th>
            <th style={{ width: '10em' }}>Student Name</th>
            <th style={{ width: '20em' }}>Batches(name,price,payment for)</th>
            <th style={{ width: '10em' }}>Discount</th>
            <th style={{ width: '8em' }}>Pending</th>
            <th style={{ width: '8em' }}>Paid Amount/-</th>
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
    );
  }
}

export class DueReportingprint extends Component {
  render() {
    return (
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
            <th scope="col" style={{ width: '12em' }}>
              Student Id
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Phone no.
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Guardian's Phone no.
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Batches(name, price, Last Paid Date)
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Total Due /-
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
          </tr>
        </tbody>
      </table>
    );
  }
}

export class RefundReportingprint extends Component {
  render() {
    return (
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
            <th scope="col" style={{ width: '12em' }}>
              Invoice ID
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Invoice Details(name, price, payment for)
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Paid Amount /-
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export class DateRangeCollectionprint extends Component {
  render() {
    return (
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
            <th scope="col" style={{ width: '12em' }}>
              Invoice ID
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Batches(name,price,payment for)
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Discount
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Pending
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Paid Amount/-
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
          </tr>
        </tbody>
      </table>
    );
  }
}

export class MonthlyPaymentStatementprint extends Component {
  render() {
    return (
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
            <th scope="col" style={{ width: '12em' }}>
              Invoice ID
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Payment for
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Batch name
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Discount
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Pending
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Paid Amount/-
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
    );
  }
}

export class MonthlyDueStatementprint extends Component {
  render() {
    return (
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
            <th scope="col" style={{ width: '12em' }}>
              Student Id
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '5em' }}>
              Student Phone no.
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Guardian's Phone no.
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Batches(name, price, Last Paid Date)
            </th>
            <th scope="col" style={{ width: '8em' }}>
              Total Due /-
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
          </tr>
        </tbody>
      </table>
    );
  }
}

export class BatchPaymentReporting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDailyCollection: false,
      showDueReporting: false,
      showRefundReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: false,
    };
  }

  _showDailyCollection = () => {
    this.setState({
      showDailyCollection: true,
      showDueReporting: false,
      showRefundReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: false,
    });
  };

  _showDueReporting = () => {
    this.setState({
      showDailyCollection: false,
      showDueReporting: true,
      showRefundReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: false,
    });
  };

  _showRefundReporting = () => {
    this.setState({
      showDailyCollection: false,
      showDueReporting: false,
      showRefundReporting: true,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: false,
    });
  };

  _showDateRangeCollection = () => {
    this.setState({
      showDailyCollection: false,
      showDueReporting: false,
      showRefundReporting: false,
      showDateRangeCollection: true,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: false,
    });
  };

  _showMonthlyPaymentStatement = () => {
    this.setState({
      showDailyCollection: false,
      showDueReporting: false,
      showRefundReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: true,
      showMonthlyDueStatement: false,
    });
  };

  _showMonthlyDueStatement = () => {
    this.setState({
      showDailyCollection: false,
      showDueReporting: false,
      showRefundReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: true,
    });
  };

  render() {
    const csvData = [
      {
        InvoiceID: '',
        StudentName: '',
        BatchesNamePricePayment: '',
        Discount: '',
        Pending: '',
        PaidAmount: '',
      },
    ];

    const generatePDF = () => {
      const string = renderToString(<DailyCollectionprint />);
      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.fromHTML(string);
      pdf.save('paymentreporting');
    };

    const generatePDF1 = () => {
      const string = renderToString(<DueReportingprint />);
      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.fromHTML(string);
      pdf.save('paymentreporting');
    };

    const Content = this.state.showDailyCollection ? (
      <div>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1em',
            border: '3px solid #00a65a',
            background: '#00a65a',
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
            </div>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #00a65a',
            background: '#00a65a',
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
            <div style={{ margin: 0 }}>
              <Button
                elevation={1}
                variant="contained"
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
              >
                <CSVLink
                  data={csvData}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  CSV
                </CSVLink>
              </Button>
              <ExcelFile
                element={
                  <Button
                    elevation={1}
                    variant="contained"
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                  >
                    Excel
                  </Button>
                }
              >
                <ExcelSheet data={dataSet1} name="Employees">
                  <ExcelColumn label="Invoice ID" value="id" />
                  <ExcelColumn
                    label="Student Name Discount"
                    value="StudentName"
                  />
                  <ExcelColumn
                    label="Batches(name, price, payment for)"
                    value="BatchesNamePricePayment"
                  />
                  <ExcelColumn label="Discount" value="Discount" />
                  <ExcelColumn label="Pending" value="Pending" />
                  <ExcelColumn label="Paid Amount /-" value="PaidAmount" />
                </ExcelSheet>
              </ExcelFile>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
                variant="contained"
                onClick={generatePDF}
              >
                PDF
              </Button>
              <ReactToPrint
                trigger={() => (
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    <Typography
                      style={{ color: 'black', textDecoration: 'none' }}
                      href="#"
                    >
                      Print
                    </Typography>
                  </Button>
                )}
                content={() => this.dailyCollectionComponentRef}
              />
            </div>
            <br />
            <DailyCollectionprint
              ref={(el) => (this.dailyCollectionComponentRef = el)}
            />
          </CardContent>
        </Card>
      </div>
    ) : null;

    const Content1 = this.state.showDueReporting ? (
      <div>
        <hr
          style={{
            clear: 'both',
            marginBottom: '0',
            marginTop: '1rem',
            border: '3px solid #dd4b39',
            background: '#dd4b39',
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
            <Typography>Due Reporting</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
            <h4>Showing Due Payment Reporting</h4>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '0',
            marginTop: '1rem',
            border: '3px solid #dd4b39',
            background: '#dd4b39',
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
            <Typography>Due Reporting</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
            <div style={{ margin: 0 }}>
              <Button
                elevation={1}
                variant="contained"
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
              >
                <CSVLink
                  data={csvData}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  CSV
                </CSVLink>
              </Button>
              <ExcelFile
                element={
                  <Button
                    elevation={1}
                    variant="contained"
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                  >
                    Excel
                  </Button>
                }
              >
                <ExcelSheet data={dataSet1} name="Employees">
                  <ExcelColumn label="Student Id" value="id" />
                  <ExcelColumn label="Student Name" value="name" />
                  <ExcelColumn
                    label="Student Phone no."
                    value="StudentNumber"
                  />
                  <ExcelColumn
                    label="Guardian's Phone no."
                    value="Guardian's Phone no"
                  />
                  <ExcelColumn
                    label="Batches(name, price, Last Paid Date)"
                    value="Batches(name, price, Last Paid Date)"
                  />
                  <ExcelColumn label="Total Due /-" value="Total Due /-" />
                </ExcelSheet>
              </ExcelFile>
              <Button
                elevation={1}
                style={{
                  marginLeft: '0.3em',
                  marginRight: '0.3em',
                  marginTop: '0.3em',
                  marginBotton: '0.3em',
                }}
                variant="contained"
                onClick={generatePDF1}
              >
                PDF
              </Button>
              <ReactToPrint
                trigger={() => (
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    <Typography
                      style={{ color: 'black', textDecoration: 'none' }}
                      href="#"
                    >
                      Print
                    </Typography>
                  </Button>
                )}
                content={() => this.dueReportingComponentRef}
              />
            </div>
            <br />
            <DueReportingprint
              ref={(el) => (this.dueReportingComponentRef = el)}
            />
          </CardContent>
        </Card>
      </div>
    ) : null;

    const Content2 = this.state.showRefundReporting ? (
      <div>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #3c8dbc',
            background: '#3c8dbc',
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
            <Typography>Monthly Refund Statement</Typography>
            <hr style={{ marginBottom: 0, marginTop: 0 }} />
            <br />
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #3c8dbc',
            background: '#3c8dbc',
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
    ) : null;

    const Content3 = this.state.showDateRangeCollection ? (
      <div>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #00c0ef',
            background: '#00c0ef',
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
            <div>showDateRangeCollection</div>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: 0,
            marginTop: '1rem',
            border: '3px solid #00c0ef',
            background: '#00c0ef',
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
    ) : null;

    const Content4 = this.state.showMonthlyPaymentStatement ? (
      <div>
        <hr
          style={{
            clear: 'both',
            marginBottom: '0',
            marginTop: '1rem',
            border: '3px solid #f39c12',
            background: '#f39c12',
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
            <div>showMonthlyPaymentStatement</div>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '0',
            marginTop: '1rem',
            border: '3px solid #f39c12',
            background: '#f39c12',
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
    ) : null;

    const Content5 = this.state.showMonthlyDueStatement ? (
      <div>
        <hr
          style={{
            clear: 'both',
            marginBottom: '0',
            marginTop: '1rem',
            border: '3px solid #dd4b39',
            background: '#dd4b39',
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
            <div>showMonthlyDueStatement</div>
          </CardContent>
        </Card>
        <hr
          style={{
            clear: 'both',
            marginBottom: '0',
            marginTop: '1rem',
            border: '3px solid #dd4b39',
            background: '#dd4b39',
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
    ) : null;

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
              <div className="form-group col-md-2">
                <button
                  type="button"
                  onClick={this._showDailyCollection.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#00a65a', color: 'white' }}
                >
                  <strong>Daily</strong> Collection
                </button>
              </div>
              <div className="form-group col-md-2">
                <button
                  type="button"
                  onClick={this._showDueReporting.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#dd4b39', color: 'white' }}
                >
                  <strong>Due</strong> Reporting
                </button>
              </div>
              <div className="form-group col-md-2">
                <button
                  type="button"
                  onClick={this._showRefundReporting.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#3c8dbc', color: 'white' }}
                >
                  <strong>Refund</strong> Reporting
                </button>
              </div>
              <div className="form-group col-md-2">
                <button
                  type="button"
                  onClick={this._showDateRangeCollection.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#00c0ef', color: 'white' }}
                >
                  <strong>Show Date Range</strong> Collection
                </button>
              </div>
              <div className="form-group col-md-2">
                <button
                  type="button"
                  onClick={this._showMonthlyPaymentStatement.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#f39c12', color: 'white' }}
                >
                  <strong>Monthly Payment </strong> Statement
                </button>
              </div>
              <div className="form-group col-md-2">
                <button
                  type="button"
                  onClick={this._showMonthlyDueStatement.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#dd4b39', color: 'white' }}
                >
                  <strong>Monthly Due </strong> Statement
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        {Content}
        {Content1}
        {Content2}
        {Content3}
        {Content4}
        {Content5}
      </div>
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
    background: '#00bfa5',
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
    background: '#00bfa5',
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
    padding: theme.spacing(0),
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
        onMouseOver={() => handleDrawerOpen(true)}
        onMouseLeave={handleDrawerClose}
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
                <Link to="/students/payments/otherspaymentreporting">
                  <ListItem button>
                    <ListItemIcon>
                      <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography style={{ color: 'white' }}>
                        Other's Payment Reportings
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

              <Link to="/reporting/batchpaymentreporting">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Batch Payment Reporting
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to="/reporting/otherspaymentreporting">
                <ListItem button>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography style={{ color: 'white' }}>
                      Other's Payment Reporting
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
        <BatchPaymentReporting {...props} />
      </main>
    </div>
  );
}
