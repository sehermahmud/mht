import React, { Component } from 'react';

export default class MonthlyDueStatementprint extends Component {
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
