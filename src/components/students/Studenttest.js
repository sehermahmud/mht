// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       studentPernentId: new Date(),
//       clicks: 27000,
//       show: true,
//       clicks1: 0,
//       clicks2: 0,
//       clicks4: JSON.parse(localStorage.getItem('clicks4')) || 27000,
//       isVisible: true,
//     };
//   }

//   // IncrementItem = () => {
//   //   const components = [
//   //     this.state.studentPernentId.getFullYear(),
//   //     this.state.studentPernentId.getMonth() + 1,
//   //     // this.state.studentPernentId.getDate(),
//   //     this.setState({ clicks4: this.state.click4 + 1 }, () => {
//   //       localStorage.setItem('clicks4', JSON.stringify(this.state.clicks4));
//   //     }),
//   //   ];

//   //   if (this.state.clicks4 >= 100000) {
//   //     this.setState({ clicks4: this.state.clicks4 });
//   //   } else {
//   //     this.setState({ clicks4: this.state.clicks4 + 1 });
//   //   }

//   //   const id = components.join('' + this.state.clicks4);

//   //   // this.setState({ clicks: this.state.clicks + 1 });

//   //   console.log(id + this.state.clicks4);
//   // };

//   onSubmit(e) {
//     e.preventDefault();

//     const components = [
//       this.state.studentPernentId.getFullYear(),
//       this.state.studentPernentId.getMonth() + 1,
//       // this.state.studentPernentId.getDate(),
//       this.setState({ clicks4: this.state.click4 + 1 }, () => {
//         localStorage.setItem('clicks4', JSON.stringify(this.state.clicks4));
//       }),
//     ];

//     if (this.state.clicks4 >= 100000) {
//       this.setState({ clicks4: this.state.clicks4 });
//     } else {
//       this.setState({ clicks4: this.state.clicks4 + 1 });
//     }

//     // this.setState({ clicks: this.state.clicks + 1 });

//     const id = components.join('');

//     console.log(id + this.state.clicks4);

//     // axios
//     //   .post('https://mht-backend-1.herokuapp.com/students/addStudent', newStudent)
//     //   .then((res) => console.log(res.data));
//   }

//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     const components = [
//       this.state.studentPernentId.getFullYear(),
//       this.state.studentPernentId.getMonth() + 1,
//       // this.state.studentPernentId.getDate(),
//     ];

//     // this.setState({ clicks: this.state.clicks + 1 });

//     const id = components.join('');

//     return (
//       <div style={{ background: 'white' }}>
//         <button onClick={this.onSubmit}>Add Students</button>
//         <button onClick={this.ToggleClick}>
//           {this.state.show ? 'Hide number' : 'Show number'}
//         </button>
//         {this.state.show ? <h2>{id + this.state.clicks4}</h2> : ''}
//       </div>
//     );
//   }
// }

// export default App;

// // œ ∑ ´ ® † ¥ ¨ ˆ ø π
// // å ß ∂ ƒ © ˙ ∆ ˚ ¬
// //  ≈ ç √ ∫ ˜µ

// // ¡ ™ £ ¢ ∞ § ¶ • ª º – ≠ “ ‘

// //

// import React, { Component } from 'react';
// import axios from 'axios';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// export const CheckBox = (props) => {
//   const content = props.isChecked ? (
//     <div style={{ color: 'white' }}>
//       <div
//         style={{
//           marginRight: '60px',
//           marginBottom: '1em',
//           marginTop: '1em',
//         }}
//       >
//         <select
//           className="custom-select mr-sm-2"
//           id="inlineFormCustomSelect"
//           // value={this.state.subject}
//           // onChange={this.onChangeStudentSubject}
//         >
//           {/* {this.state.batchs.map((batch) => {
//               return (
//                 <option key={batch} value={batch}>
//                   {batch}
//                 </option>
//               );
//             })} */}
//         </select>
//       </div>
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           margin="normal"
//           format="dd/MM/yyyy"
//           label="Start Date"
//           //   value={this.state.StartDate}
//           //   onChange={this.onChangeStartDate}
//           InputAdornmentProps={{ position: 'start' }}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//       </MuiPickersUtilsProvider>
//     </div>
//   ) : null

//   return (
//     <li>
//       <input
//         key={props.id}
//         onClick={props.handleCheckChieldElement}
//         type="checkbox"
//         checked={props.isChecked}
//         subject={props.subject}
//       />
//       {props.subject}
//       {console.log(props.isChecked)}
//       {/* {props.handleCheckChieldElement ? (
//         <div style={{ color: 'white' }}>
//           <h5>hello</h5>
//         </div>
//       ) : (
//         <div style={{ color: 'white' }}>
//           <h5>no hello</h5>
//           <div>
//             <hr />
//           </div>
//         </div>
//       )} */}
//       {content}
//     </li>
//   );
// };

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       subjects: [],
//       subject: '',
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('https://mht-backend-1.herokuapp.com/subjects/')
//       .then((response) => {
//         if (response.data.length > 0) {
//           this.setState({
//             subjects: response.data,
//           });
//         }

//         console.log(this.state.subjects);
//       });
//   }

//   handleCheckChieldElement = (event) => {
//     let subjects = this.state.subjects;
//     subjects.forEach((subject) => {
//       if (subject.subject === event.target.subject)
//         subject.isChecked = event.target.checked;
//     });
//     this.setState({ subjects: subjects });
//   };

//   render() {
//     return (
//       <div className="App" style={{ color: 'white' }}>
//         <ul>
//           {this.state.subjects.map((subject) => {
//             return (
//               <CheckBox
//                 handleCheckChieldElement={this.handleCheckChieldElement}
//                 {...subject}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      checkedItems: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    console.log(item);
    // console.log(isChecked);

    if (isChecked === true) {
      return <div>hello</div>;
    }

    const content = isChecked ? (
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
            autoComplete="off"
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));

    return content;
  }

  handleme(event) {
    var isChecked = event.target.checked;

    const content = isChecked ? (
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
            autoComplete="off"
            InputAdornmentProps={{ position: 'start' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    ) : null;

    return content;
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-1.herokuapp.com/subjects/')
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            categories: response.data,
          });
        }

        console.log(this.state.categories);
      });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render(event) {
    const content = <div>hello</div>;
    return (
      <div style={{ background: 'white' }}>
        <form onSubmit={this.handleSubmit}>
          {this.state.categories.map((item) => (
            <div>
              <label key={item._id}>
                <input
                  type="checkbox"
                  value={item.subject}
                  onChange={this.handleChange}
                />
                {item.subject}
              </label>
              {/* {this.state.checkedItems ? <div>hello</div> : <div>no hello</div>} */}
              {console.log(this.handleChange)}
              {content}
            </div>
          ))}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
