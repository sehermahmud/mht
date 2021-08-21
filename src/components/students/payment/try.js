// import React from 'react';
// import { InputGroup, Button } from 'react-bootstrap';
// import { useState } from 'react';

// export default function App() {
//   const [state, setState] = useState({});

//   const handleChange = (e) => {
//     const { open1, value } = e.target;
//     setState({
//       [open1]: value,
//     });
//   };
//   const fieldItems = [
//     (fieldItem = [
//       { open1: 'Front Bumper' },
//       { open1: 'Roof' },
//       { open1: 'Front Left Door' },
//       { open1: 'Rear Left Door' },
//       { open1: 'Front Right Door' },
//     ]),
//   ];
//   const options = ['original', 'repaint', 'pr', 'n/c'];

//   return (
//     <div
//       className="flex-row align-items-center inspection-section"
//       style={{ margin: '5em' }}
//     >
//       <h3>CAR DETAILS</h3>
//       <div className="my-4">
//         <h3>INSPECTIONS</h3>
//         <div className="table-responsive">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Fields</th>
//                 <th>Original</th>
//                 <th>Repaint</th>
//                 <th>PR</th>
//                 <th>N/C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {fieldItems.fieldItem.map((item) => (
//                 <tr key={item.open1}>
//                   <td>{item.open1}</td>
//                   {options.map((option) => (
//                     <td key={`${item.open1}_${option}`}>
//                       <InputGroup.Checkbox
//                         className="radio-size"
//                         type="radio"
//                         aria-label="radio 1"
//                         value={option}
//                         name={item.open1}
//                         selected={
//                           Boolean(state[item.open1]) &&
//                           state[item.open1] === option
//                         }
//                         onChange={handleChange}
//                       />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="container-buttons">
//           <Button className="mr-4" variant="light">
//             Submit
//           </Button>

//           <Button variant="dark">Clear</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import ReactDOM from "react-dom";
// import ReactTable from "react-table";
// import "react-table/react-table.css";
// import "./styles.css";
// const getTotals = (data, key) => {
//   let total = 0;
//   data.forEach(item => {
//     total += item[key];
//   });
//   return total;
// };
// function App() {
//   const data = [
//     {
//       one: "first row",
//       two: 10.4,
//       three: 10.1,
//       four: 54,
//       five: 5,
//       six: 5,
//       seven: 10,
//       eight: 10,
//       nine: 10
//     },
//     {
//       one: "second row",
//       two: 10.4,
//       three: 10.1,
//       four: 54,
//       five: 5,
//       six: 5,
//       seven: 10,
//       eight: 10,
//       nine: 10
//     }
//   ];
//   data.unshift({
//     one: "totals",
//     two: getTotals(data, "two"),
//     three: getTotals(data, "three"),
//     four: getTotals(data, "four"),
//     five: getTotals(data, "five"),
//     six: getTotals(data, "six"),
//     seven: getTotals(data, "seven"),
//     eight: getTotals(data, "eight"),
//     nine: getTotals(data, "nine")
//   });
//   return (
//     <div className="App">
//       <ReactTable
//         data={data}
//         showPagination={false}
//         columns={[
//           {
//             Header: "Sales Overview",
//             columns: [
//               {
//                 Header: "one",
//                 id: "one",
//                 accessor: "one",
//                 show: true
//               },
//               {
//                 Header: "two",
//                 accessor: "two",
//                 show: true
//               },
//               {
//                 Header: "three",
//                 id: "three",
//                 accessor: "three",
//                 show: true
//               },
//               {
//                 Header: "four",
//                 id: "four",
//                 accessor: "four",
//                 show: true
//               },
//               {
//                 Header: "five",
//                 id: "five",
//                 accessor: "five",
//                 show: true
//               },
//               {
//                 Header: "six",
//                 id: "six",
//                 accessor: "six",
//                 show: true
//               },
//               {
//                 Header: "seven",
//                 id: "seven",
//                 show: true,
//                 accessor: "seven"
//               },
//               {
//                 Header: "eight",
//                 id: "eight",
//                 show: true,
//                 accessor: "eight"
//               },
//               {
//                 Header: "nine",
//                 id: "nine",
//                 accessor: "nine",
//                 show: true
//               }
//             ]
//           }
//         ]}
//         loading={false}
//         minRows={1}
//         className="-striped -highlight"
//       />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// const AccountsGrid = (props) => {

//   var marketValSum = 0;
//   var cashSum = 0;

//   const accountData = props.accounts;

//   if(accountData.length >0) {
//       for (let i = 0; i < accountData.length; i++) {
//         marketValSum += accountData[i].marketValue;
//         cashSum += accountData[i].cash;
//       }
//   }

//   const columns = [
//     { accessor: 'name', header: 'Name',width: 205 },
//     { accessor: 'marketValue', header: 'Market Value', footer: 'Total: ' + marketValSum},
//     { accessor: 'cash', header: 'Cash', footer: 'Total: ' + cashSum}
//   ]

//   return (
//     <ReactTable
//       columns={columns}
//       data={props.accounts}
//       className='-striped -highlight'
//       defaultPageSize={10}
//     />
//   );
// };

const meals = [{ calorie: 10 }, { calorie: 15 }, { calorie: 20 }];

const calorieTotal = meals.reduce(
  (totalCalories, meal) => totalCalories + meal.calorie,
  0
);

console.log(calorieTotal); // 45 calories

const mealsAsStrings = [
  { calorie: '11' },
  { calorie: '12' },
  { calorie: '13' },
];

const calorieStringTotal = mealsAsStrings.reduce(
  (totalCalories, meal) => totalCalories + parseInt(meal.calorie, 10),
  0
);

console.log(calorieStringTotal);
