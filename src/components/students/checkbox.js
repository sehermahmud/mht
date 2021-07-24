import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CheckBox({
  name,
  subject,
  tick,
  onCheck,
  onCheckOpen,
}) {
  const content = onCheck ? (
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
          // value={this.state.StartDate}
          // onChange={this.onChangeStartDate}
          InputAdornmentProps={{ position: 'start' }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  ) : null;

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
      <label className="form-check-label">
        <input
          type="checkbox"
          style={{ marginRight: '0.5em' }}
          subject={subject}
          checked={tick || false}
          onChange={onCheck}
        />
        {subject}
      </label>
      <br />
      {content}
    </div>
  );
}
