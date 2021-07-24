import React from 'react';
import CheckBox from './checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CheckBoxList({
  options,
  onCheck,
  onOpenCheck,
  //   content,
}) {
  const content = (
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
  );

  const checkBoxOptions = (
    <div className="checkbox-list">
      {options.map((option, index) => {
        return (
          <React.Fragment>
            <CheckBox
              key={index}
              subject={option.subject}
              tick={option.checked}
              onCheck={(e) => onCheck(option.subject, e.target.checked)}
            />
            <content />
          </React.Fragment>
        );
      })}
    </div>
  );

  return <div className="checkbox-list">{checkBoxOptions}</div>;
}
