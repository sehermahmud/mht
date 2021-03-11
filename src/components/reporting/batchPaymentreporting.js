import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, Button } from '@material-ui/core';
import { CSVLink } from 'react-csv';
import ReactToPrint from 'react-to-print';
import ReactExport from 'react-export-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [];

export class DailyCollectionprint extends Component {
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
            <th scope="col" style={{ width: '10em' }}>
              Invoice ID
            </th>
            <th scope="col" style={{ width: '10em' }}>
              Student Name
            </th>
            <th scope="col" style={{ width: '20em' }}>
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

export default class BatchPaymentReporting extends Component {
  constructor(props) {
    super(props);
    this.onChangeRefundMonthDate = this.onChangeRefundMonthDate.bind(this);
    this.onChangeFromDateRangeCollectionDate = this.onChangeFromDateRangeCollectionDate.bind(
      this
    );
    this.onChangeToDateRangeCollectionDate = this.onChangeToDateRangeCollectionDate.bind(
      this
    );

    this.state = {
      showDailyCollection: false,
      showDueReporting: false,
      showRefundReporting: false,
      showDateRangeCollection: false,
      showMonthlyPaymentStatement: false,
      showMonthlyDueStatement: false,
      refundMonthDate: new Date(),
      showMonthlyRefundStatement: false,
      fromDateRangeCollectionDate: new Date(),
      toDateRangeCollectionDate: new Date(),
      showDateRangeCollectionStatement: false,
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

  onChangeRefundMonthDate(date) {
    this.setState({
      fromDateRangeCollectionDate: date,
    });
  }

  onChangeFromDateRangeCollectionDate(date) {
    this.setState({
      toDateRangeCollectionDate: date,
    });
  }

  onChangeToDateRangeCollectionDate(date) {
    this.setState({
      refundMonthDate: date,
    });
  }

  _showMonthlyRefundStatement = () => {
    this.setState({
      showMonthlyRefundStatement: true,
    });
  };

  _showDateRangeCollectionStatement = () => {
    this.setState({
      showDateRangeCollectionStatement: true,
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

    const csvData1 = [
      {
        StudentId: '',
        StudentName: '',
        StudentPhoneNo: '',
        GuardiansPhoneNo: '',
        BatchesNamePricePayment: '',
        TotalDue: '',
      },
    ];

    const csvData2 = [
      {
        InvoiceId: '',
        StudentName: '',
        InvoiceDetailsNamePricePayment: '',
        PaidAmount: '',
        BatchesNamePricePayment: '',
        TotalDue: '',
      },
    ];

    const csvData3 = [
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
      const pdf = new jsPDF();

      pdf.autoTable({
        theme: 'plain',
        head: [
          [
            'Invoice ID',
            'Student Name',
            'Batches(name,price,payment for)',
            'Discount',
            'Pending',
            'Paid Amount/-',
          ],
        ],
        body: [
          ['', '', '', '', '', ''],
          // ...
        ],
      });
      pdf.save('dailyCollectionPaymentReporting');
    };

    const generatePDF1 = () => {
      const pdf = new jsPDF();

      pdf.autoTable({
        theme: 'plain',
        head: [
          [
            'Student Id',
            'Student Name',
            'Student Phone no.',
            'Guardians Phone no.',
            'Batches(name, price, Last Paid Date)',
            'Total Due /-',
          ],
        ],
        body: [
          ['', '', '', '', '', ''],
          // ...
        ],
      });
      pdf.save('dueReporting');
    };

    const generatePDF2 = () => {
      const pdf = new jsPDF();

      pdf.autoTable({
        theme: 'plain',
        head: [
          [
            'Invoice ID',
            'Student Name',
            'Invoice Details(name, price, payment for)',
            'Paid Amount /-',
          ],
        ],
        body: [
          ['', '', '', ''],
          // ...
        ],
      });
      pdf.save('MonthlyRefundReporting');
    };

    const generatePDF3 = () => {
      const pdf = new jsPDF();

      pdf.autoTable({
        theme: 'plain',
        head: [
          [
            'Invoice ID',
            'Student Name',
            'Batches(name,price,payment for)',
            'Discount',
            'Pending',
            'Paid Amount/-',
          ],
        ],
        body: [
          ['', '', '', '', '', ''],
          // ...
        ],
      });
      pdf.save('DateRangeCollection');
    };

    const ContentMonthlyRefundStatement = this.state
      .showMonthlyRefundStatement ? (
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
            data={csvData2}
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
            <ExcelColumn label="Invoice ID" value="InvoiceID" />
            <ExcelColumn label="Student Name" value="StudentName" />
            <ExcelColumn
              label="Invoice Details(name, price, payment for)"
              value="InvoiceDetailsNamePricePayment"
            />
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
          onClick={generatePDF2}
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
          content={() => this.refundReportingComponentRef}
        />
        <br />
        <RefundReportingprint
          ref={(el) => (this.refundReportingComponentRef = el)}
        />
      </div>
    ) : null;

    const ContentDateRangeCollectionStatement = this.state
      .showDateRangeCollectionStatement ? (
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
            data={csvData3}
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
          <ExcelColumn label="Invoice ID" value="id" />
          <ExcelColumn label="Student Name Discount" value="StudentName" />
          <ExcelColumn
            label="Batches(name, price, payment for)"
            value="BatchesNamePricePayment"
          />
          <ExcelColumn label="Discount" value="Discount" />
          <ExcelColumn label="Pending" value="Pending" />
          <ExcelColumn label="Paid Amount /-" value="PaidAmount" />
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
          onClick={generatePDF3}
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
          content={() => this.dateRangeCollectionprintComponentRef}
        />
        <br />
        <DateRangeCollectionprint
          ref={(el) => (this.dateRangeCollectionprintComponentRef = el)}
        />
      </div>
    ) : null;

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
                  data={csvData1}
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
            <Typography>Month (For Monthly Refund Statement)</Typography>
            <div className="form-row">
              <div className="form-group col-md-6">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{ marginTop: '0.5em' }}
                    fullWidth
                    disableToolbar
                    variant="inline"
                    margin="normal"
                    format="dd/MM/yyyy"
                    value={this.state.refundMonthDate}
                    onChange={this.onChangeRefundMonthDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="form-group col-md-6">
                <button
                  type="button"
                  onClick={this._showMonthlyRefundStatement.bind(null, true)}
                  className="btn btn-block btn-lg"
                  style={{ background: '#3c8dbc', color: 'white' }}
                >
                  <strong>Monthly Refund </strong> Statement
                </button>
              </div>
            </div>
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
            {ContentMonthlyRefundStatement}
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
            <div className="form-row">
              <div className="form-group col-md-6">
                <Typography>From</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{ marginTop: '0.5em' }}
                    fullWidth
                    disableToolbar
                    variant="inline"
                    margin="normal"
                    format="dd/MM/yyyy"
                    value={this.state.fromDateRangeCollectionDate}
                    onChange={this.onChangeFromDateRangeCollectionDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="form-group col-md-6">
                <Typography>To</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{ marginTop: '0.5em' }}
                    fullWidth
                    disableToolbar
                    variant="inline"
                    margin="normal"
                    format="dd/MM/yyyy"
                    value={this.state.toDateRangeCollectionDate}
                    onChange={this.onChangeToDateRangeCollectionDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={this._showDateRangeCollectionStatement.bind(
                  null,
                  true
                )}
                className="btn btn-block btn-lg"
                style={{ background: '#00c0ef', color: 'white' }}
              >
                <strong>Show Date Range</strong> Collection
              </button>
            </div>
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
            {ContentDateRangeCollectionStatement}
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
