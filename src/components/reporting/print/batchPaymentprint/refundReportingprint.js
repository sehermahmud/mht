import React, { Component } from 'react';

export default class RefundReportingprint extends Component {
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
