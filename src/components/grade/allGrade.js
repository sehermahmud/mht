// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Card, CardContent } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import { Button } from '@material-ui/core';
// import { MDBDataTable } from 'mdbreact';

// import './grade.css';

// export default class AllGrade extends Component {
//   constructor(props) {
//     super(props);
//     this.deleteGrade = this.deleteGrade.bind(this);

//     this.state = {
//       grade: '',
//       description: '',
//       grades: [],
//       open: false,
//       search: '',
//       page: 0,
//       rowPage: '',
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('https://mht-backend.herokuapp.com/grades/')
//       .then((response) => {
//         this.setState({ grades: response.data });
//         console.log(this.state.grades);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   deleteGrade(id) {
//     axios
//       .delete('https://mht-backend.herokuapp.com/grades/' + id)
//       .then((res) => console.log(res.data));

//     this.setState({
//       grades: this.state.grades.filter((el) => el._id !== id),
//     });

//     window.location.reload(true);
//   }

//   render() {
//     const userAttributes = [];
//     this.state.grades.forEach((el) => {
//       userAttributes.push({
//         sl: 1,
//         Grade: el.grade,
//         Description: el.description,
//         Action: (
//           <React.Fragment>
//             <Button
//               style={{
//                 color: 'white',
//                 background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
//                 marginRight: '1em',
//                 marginLeft: '1em',
//                 marginBottom: '0.1em',
//                 marginTop: '0.1em',
//               }}
//             >
//               <Link
//                 style={{ color: 'white' }}
//                 className="text-decoration-none"
//                 to={'/edit/' + el._id}
//               >
//                 edit
//               </Link>{' '}
//             </Button>
//             <Button
//               style={{
//                 color: 'white',
//                 background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
//                 marginRight: '1em',
//                 marginLeft: '1em',
//                 marginBottom: '0.1em',
//                 marginTop: '0.1em',
//               }}
//               data-toggle="modal"
//               data-id="props.grade._id"
//               data-target="#exampleModal"
//             >
//               <Typography
//                 className="text-decoration-none"
//                 style={{ color: 'white' }}
//               >
//                 delete{' '}
//               </Typography>
//             </Button>
//           </React.Fragment>
//         ),
//       });
//     });

//     const data = {
//       columns: [
//         {
//           label: 'sl',
//           field: 'sl',
//           sort: 'asc',
//           width: 150,
//         },
//         {
//           label: 'Grade',
//           field: 'Grade',
//           sort: 'asc',
//           width: 270,
//         },
//         {
//           label: 'Description',
//           field: 'Description',
//           sort: 'asc',
//           width: 200,
//         },
//         {
//           label: 'Action',
//           field: 'Action',
//           sort: 'asc',
//           width: 100,
//         },
//       ],
//       rows: userAttributes,
//     };
//     return (
//       <Card
//         style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
//       >
//         <CardContent elevation={3}>
//           <Typography variant="h6" style={{}}>
//             Grade List
//           </Typography>
//           <hr
//             style={{
//               marginRight: '0rem',
//               marginLeft: '0rem',
//               marginTop: '0',
//               marginBottom: '1em',
//               border: '1px solid #b2dfdb',
//               background: '#b2dfdb',
//             }}
//           />
//           <MDBDataTable striped bordered data={data} />
//         </CardContent>
//       </Card>
//     );
//   }
// }

import React from 'react';

import axios from 'axios';

export default class PostList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  deleteRow(id, e) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const posts = this.state.posts.filter((item) => item.id !== id);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>React Axios Delete Request Example - ItSolutionStuff.com</h1>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteRow(post.id, e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
