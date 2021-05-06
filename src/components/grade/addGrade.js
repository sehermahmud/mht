import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { MDBDataTable } from 'mdbreact';

import './grade.css';

const Grade = (props) => (
  <tr>
    <td></td>
    <td>{props.grade.grade}</td>
    <td>{props.grade.description}</td>
    <td>
      <Button
        style={{
          color: 'white',
          background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
          marginRight: '1em',
          marginLeft: '1em',
          marginBottom: '0.1em',
          marginTop: '0.1em',
        }}
      >
        <Link
          style={{ color: 'white' }}
          className="text-decoration-none"
          to={'/edit/' + props.grade._id}
        >
          edit
        </Link>{' '}
      </Button>
      <Button
        style={{
          color: 'white',
          background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
          marginRight: '1em',
          marginLeft: '1em',
          marginBottom: '0.1em',
          marginTop: '0.1em',
        }}
        data-toggle="modal"
        data-id={props.grade._id}
        data-target="#exampleModal"
      >
        <Typography className="text-decoration-none" style={{ color: 'white' }}>
          delete{' '}
        </Typography>
      </Button>
    </td>
    {/* <div
      data-id={props.grade._id}
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Are you sure you want to delete? After that you can not get it
              back!
            </h5>
          </div>
          <div className="modal-footer">
            <Button
              data-dismiss="modal"
              color="primary"
              style={{
                margin: '0.5em',
                marginRight: '20em',
                border: '1px solid #2196f3',
                color: '#2196f3',
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{
                margin: '0.5em',
                background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
              }}
              // onClick={props.deleteGrade(props.grade._id)}
              onClick={() => {
                console.log(`delete: ${props.grade._id}`);
              }}
              data-dismiss="modal"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div> */}
  </tr>
);

class CreateGrade extends Component {
  constructor(props) {
    super(props);

    this.onOpen = this.onOpen.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.onChangepage = this.onChangepage.bind(this);
    this.onChangerowPage = this.onChangerowPage.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      grade: '',
      description: '',
      grades: [],
      open: false,
      search: '',
      page: 0,
      rowPage: '',
      password: '',
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }

  onOpen(e) {
    this.setState({
      open: e.target.value,
    });
  }

  onChangeGrade(e) {
    this.setState({
      grade: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newGrade = {
      grade: this.state.grade,
      description: this.state.description,
    };

    console.log(newGrade);

    axios
      .post('https://mht-backend-edu.herokuapp.com/grades/add', newGrade)
      .then((res) => console.log(res.data));

    // window.location = '/grade';
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-edu.herokuapp.com/grades/')
      .then((response) => {
        this.setState({ grades: response.data });
        console.log(this.state.grades);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteGrade(id) {
    axios
      .delete('https://mht-backend-edu.herokuapp.com/grades/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      grades: this.state.grades.filter((el) => el._id !== id),
    });
  }

  onChangepage(e) {
    this.setState({
      page: 0,
    });
  }
  onChangerowPage(e) {
    this.setState({
      rowPage: +e.target.value,
    });
  }

  gradelist() {
    return this.state.grades.map((currentgrade) => {
      return (
        <Grade
          grade={currentgrade}
          deleteGrade={this.deleteGrade}
          key={currentgrade._id}
        />
      );
    });
  }

  render() {
    const userAttributes = [];
    this.state.grades.forEach((el, order) => {
      userAttributes.push({
        sl: order + 1,
        Grade: el.grade,
        Description: el.description,
        Action: (
          <React.Fragment>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
                marginRight: '1em',
                marginLeft: '1em',
                marginBottom: '0.1em',
                marginTop: '0.1em',
              }}
            >
              <Link
                style={{ color: 'white' }}
                className="text-decoration-none"
                to={'/edit/' + el._id}
              >
                edit
              </Link>{' '}
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                marginRight: '1em',
                marginLeft: '1em',
                marginBottom: '0.1em',
                marginTop: '0.1em',
              }}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <Typography
                className="text-decoration-none"
                data-toggle="modal"
                data-id="props.grade._id"
                data-target="#exampleModal"
                style={{ color: 'white' }}
              >
                delete{' '}
              </Typography>
            </Button>
            <div
              className="modal fade"
              id="exampleModal"
              // id={firebase.firestore().collection('users').doc(id)}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ marginTop: '10em' }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalLabel"
                      style={{ color: 'red' }}
                    >
                      Are you sure you want to delete this Grade
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <br />
                  <h5
                    className="modal-title"
                    id="exampleModalLabel"
                    style={{
                      marginLeft: '50px',
                    }}
                  >
                    Enter Password:
                  </h5>
                  <div
                    style={{
                      marginRight: '50px',
                      marginLeft: '50px',
                    }}
                  >
                    <input
                      className="form-control"
                      type="text"
                      name="password"
                      label="enter password for deleting"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    />
                  </div>
                  <br />
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      style={{ marginRight: '18em' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      disabled={this.state.password.length !== 5}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ),
      });
    });

    const data = {
      columns: [
        {
          label: 'sl',
          field: 'sl',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Grade',
          field: 'Grade',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Description',
          field: 'Description',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Action',
          field: 'Action',
          sort: 'asc',
          width: 100,
        },
      ],
      rows: userAttributes,
    };
    return (
      <div style={{ marginTop: '3em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Grade Module
        </Typography>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'right',
            float: 'right',
            marginRight: '1rem',
            color: 'white',
          }}
        >
          Home-Grade
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
          }}
        />
        <Card
          style={{
            marginRight: '1rem',
            marginLeft: '1rem',
            borderRadius: 0,
            background: '#f3e5f5',
          }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">Create New Grade</Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '2em',
                border: '1px solid #009688',
                background: '#009688',
              }}
            />
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em', marginRight: '3em' }}>
                    Write Grade Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      marginRight: '4em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Grade"
                    className="form-control"
                    value={this.state.grade}
                    onChange={this.onChangeGrade}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em' }}>
                    Write Grade Description:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Grade Description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginTop: '10em' }}
              >
                <Button
                  type="submit"
                  value="Create Subject"
                  className="btn btn-danger"
                  onClick={this.onSubmit}
                  style={{
                    background:
                      'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: 18,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
        <hr
          style={{
            marginRight: '0rem',
            marginLeft: '0rem',
            marginTop: '0',
            marginBottom: '1.1em',
            border: '15px solid #4db6ac',
            background: '#4db6ac',
          }}
        />
        <Card
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6" style={{}}>
              Grade List
            </Typography>
            <hr
              style={{
                marginRight: '0rem',
                marginLeft: '0rem',
                marginTop: '0',
                marginBottom: '1em',
                border: '1px solid #b2dfdb',
                background: '#b2dfdb',
              }}
            />
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(CreateGrade);

// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import axios from 'axios';
// import { Card, CardContent } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import { Button, Grid } from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// class MockModal extends Component {
//   showModal = (task) => this.props.show(this.props.task);
//   removeTask = () => this.props.removeTask(this.props.data);
//   closeModal = () => this.props.closeModal();
//   render() {
//     const { _id, grade, description } = this.props.data;
//     if (this.props.displayModal) {
//       return (
//         // <div key={_id}>
//         //   <h4 style={{ color: 'red' }}>
//         //     Are you sure you want to delete {grade}? After that you cannot get
//         //     it back!
//         //   </h4>
//         //   <Button
//         //     color="primary"
//         //     style={{
//         //       margin: '0.5em',
//         //       marginRight: '20em',
//         //       border: '1px solid #2196f3',
//         //       color: '#2196f3',
//         //     }}
//         //     onClick={this.closeModal}
//         //   >
//         //     Cancel
//         //   </Button>
//         //   <Button
//         //     autoFocus
//         //     style={{
//         //       margin: '0.5em',
//         //       background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
//         //     }}
//         //     onClick={() => {
//         //       this.removeTask(_id);
//         //     }}
//         //   >
//         //     Delete
//         //   </Button>
//         //   {console.log(_id, grade)}
//         // </div>

//         <Dialog
//           key={_id}
//           displayModal={this.showModal}
//           closeModal={this.closeModal}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle style={{ color: 'red' }} id="alert-dialog-title">
//             Are you sure you want to delete {grade}? After that you cannot get
//             it back!
//           </DialogTitle>
//           <DialogActions>
//             <Button
//               color="primary"
//               style={{
//                 margin: '0.5em',
//                 marginRight: '20em',
//                 border: '1px solid #2196f3',
//                 color: '#2196f3',
//               }}
//               onClick={this.closeModal}
//             >
//               Cancel
//             </Button>
//             <Button
//               autoFocus
//               style={{
//                 margin: '0.5em',
//                 background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
//               }}
//               // onClick={() => {
//               //   this.removeTask(_id);
//               // }}
//             >
//               Delete
//             </Button>
//             {console.log(_id, grade)}
//           </DialogActions>
//         </Dialog>
//       );
//     }
//     return null;
//   }
// }

// class Task extends Component {
//   showModal = (task) => this.props.show(this.props.task);
//   render() {
//     const { _id, grade, description } = this.props.task;
//     return (
//       <tr key={_id}>
//         <td></td>
//         <td>{grade}</td>
//         <td>{description}</td>
//         <td>
//           <Button
//             style={{
//               color: 'white',
//               background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
//               marginRight: '1em',
//               marginLeft: '1em',
//               marginBottom: '0.1em',
//               marginTop: '0.1em',
//             }}
//           >
//             <Link
//               style={{ color: 'white' }}
//               className="text-decoration-none"
//               to={'/edit/' + _id}
//             >
//               edit
//             </Link>{' '}
//           </Button>
//           <Button
//             style={{
//               color: 'white',
//               background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
//               marginRight: '1em',
//               marginLeft: '1em',
//               marginBottom: '0.1em',
//               marginTop: '0.1em',
//             }}
//             onClick={this.showModal}
//           >
//             <Typography
//               className="text-decoration-none"
//               style={{ color: 'white' }}
//             >
//               delete{' '}
//             </Typography>
//           </Button>
//         </td>
//       </tr>
//     );
//   }
// }

// class AllGrade extends Component {
//   constructor(props) {
//     super(props);

//     this.onOpen = this.onOpen.bind(this);
//     this.onChangeGrade = this.onChangeGrade.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.onChangeSearch = this.onChangeSearch.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       showModal: false,
//       grade: '',
//       description: '',
//       grades: [],
//       modal: {
//         _id: null,
//         grade: null,
//         description: null,
//       },
//       tasks: [],
//     };
//   }

//   onChangeSearch(e) {
//     this.setState({
//       search: e.target.value,
//     });
//   }

//   onOpen(e) {
//     this.setState({
//       open: e.target.value,
//     });
//   }

//   onChangeGrade(e) {
//     this.setState({
//       grade: e.target.value,
//     });
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value,
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newGrade = {
//       grade: this.state.grade,
//       description: this.state.description,
//     };

//     console.log(newGrade);

//     axios
//       .post('https://mht-backend-edu.herokuapp.com/grades/add', newGrade)
//       .then((res) => console.log(res.data));

//     // window.location = '/grade';
//   }

//   componentDidMount() {
//     axios
//       .get('https://mht-backend-edu.herokuapp.com/grades/')
//       .then((response) => {
//         this.setState({ tasks: response.data });
//         console.log(this.state.tasks);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   showModal = (task) => this.setState({ modal: task, showModal: true });
//   hideModal = () => this.setState({ showModal: false });
//   // removeTask = (activeTask, id) => {
//   //   // const index = this.state.tasks.findIndex((task) => {
//   //   //   return task._id === activeTask._id;
//   //   // });

//   //   // this.setState({
//   //   //   showModal: false,
//   //   //   tasks: [
//   //   //     ...this.state.tasks.slice(0, index),
//   //   //     ...this.state.tasks.slice(index + 1),
//   //   //   ],
//   //   // });
//   //   axios
//   //     .delete('https://mht-backend-edu.herokuapp.com/grades/' + id)
//   //     .then((res) => console.log(res.data));

//   //   this.setState({
//   //     showModal: false,
//   //     tasks: this.state.tasks.filter((el) => el._id !== id),
//   //   });
//   // };

//   removeTask(id) {
//     axios
//       .delete('https://mht-backend-edu.herokuapp.com/grades/' + id)
//       .then((res) => console.log(res.data));

//     this.setState({
//       showModal: false,
//       tasks: this.state.tasks.filter((el) => el._id !== id),
//     });
//   }

//   // deleteGrade(id) {
//   //   axios
//   //     .delete('https://mht-backend-edu.herokuapp.com/grades/' + id)
//   //     .then((res) => console.log(res.data));

//   //   this.setState({
//   //     showModal: false,
//   //     tasks: [...this.state.tasks.filter((el) => el._id !== id)],
//   //   });
//   // }

//   render() {
//     return (
//       <div style={{ marginTop: '3em' }}>
//         <Typography
//           style={{
//             marginLeft: '1rem',
//             textAlign: 'left',
//             float: 'left',
//             color: 'white',
//           }}
//         >
//           Grade Module
//         </Typography>
//         <Typography
//           style={{
//             marginLeft: '1rem',
//             textAlign: 'right',
//             float: 'right',
//             marginRight: '1rem',
//             color: 'white',
//           }}
//         >
//           Home-Grade
//         </Typography>
//         <hr
//           style={{
//             clear: 'both',
//             marginBottom: '1em',
//             marginTop: '1rem',
//             border: '3px solid #00796b',
//             background: '#00796b',
//           }}
//         />
//         <Card
//           style={{
//             marginRight: '1rem',
//             marginLeft: '1rem',
//             borderRadius: 0,
//             background: '#f3e5f5',
//           }}
//         >
//           <CardContent elevation={3}>
//             <Typography variant="h6">Create New Grade</Typography>
//             <hr
//               style={{
//                 marginRight: '0rem',
//                 marginLeft: '0rem',
//                 marginTop: '0',
//                 marginBottom: '2em',
//                 border: '1px solid #009688',
//                 background: '#009688',
//               }}
//             />
//             <Grid container direction="row">
//               <Grid item container direction="column" sm>
//                 <div className="form-group">
//                   <label style={{ marginLeft: '3em', marginRight: '3em' }}>
//                     Write Grade Name:{' '}
//                   </label>
//                   <input
//                     style={{
//                       marginLeft: '3em',
//                       marginRight: '4em',
//                       width: '500px',
//                     }}
//                     type="text"
//                     required
//                     placeholder="Grade"
//                     className="form-control"
//                     value={this.state.grade}
//                     onChange={this.onChangeGrade}
//                   />
//                 </div>
//               </Grid>
//               <Grid item container direction="column" sm>
//                 <div className="form-group">
//                   <label style={{ marginLeft: '3em' }}>
//                     Write Grade Description:{' '}
//                   </label>
//                   <input
//                     style={{
//                       marginLeft: '3em',
//                       width: '500px',
//                     }}
//                     type="text"
//                     required
//                     placeholder="Grade Description"
//                     className="form-control"
//                     value={this.state.description}
//                     onChange={this.onChangeDescription}
//                   />
//                 </div>
//               </Grid>
//               <Grid
//                 item
//                 container
//                 direction="column"
//                 sm
//                 style={{ marginTop: '10em' }}
//               >
//                 <Button
//                   type="submit"
//                   value="Create Subject"
//                   className="btn btn-danger"
//                   onClick={this.onSubmit}
//                   style={{
//                     background:
//                       'linear-gradient(45deg, #1b5e20 30%, #4caf50 90%)',
//                     color: 'white',
//                     textTransform: 'none',
//                     fontSize: 18,
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//         <br />
//         <hr
//           style={{
//             marginRight: '0rem',
//             marginLeft: '0rem',
//             marginTop: '0',
//             marginBottom: '1.1em',
//             border: '15px solid #4db6ac',
//             background: '#4db6ac',
//           }}
//         />
//         <Card
//           style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
//         >
//           <CardContent elevation={3}>
//             <Typography variant="h6" style={{}}>
//               Grade List
//             </Typography>
//             <hr
//               style={{
//                 marginRight: '0rem',
//                 marginLeft: '0rem',
//                 marginTop: '0',
//                 marginBottom: '1em',
//                 border: '1px solid #b2dfdb',
//                 background: '#b2dfdb',
//               }}
//             />
//             <MockModal
//               displayModal={this.state.showModal}
//               closeModal={this.hideModal}
//               removeTask={this.removeTask}
//               data={this.state.modal}
//             />
//             <table
//               id="team-list"
//               className="table table-striped table-bordered"
//               width="100%"
//               style={{
//                 marginTop: '0.5em',
//                 marginBottom: '0.5em',
//               }}
//             >
//               <thead>
//                 <th scope="col" style={{ width: '3em' }}>
//                   sl
//                 </th>
//                 <th scope="col" style={{ width: '5em' }}>
//                   Grade
//                 </th>
//                 <th scope="col" style={{ width: '5em' }}>
//                   Description
//                 </th>
//                 <th scope="col" style={{ width: '10em' }}>
//                   Action
//                 </th>
//               </thead>
//               <tbody>
//                 {this.state.tasks.map((task) => {
//                   return (
//                     <Task key={task._id} task={task} show={this.showModal} />
//                   );
//                 })}
//               </tbody>
//             </table>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
// }

// export default withRouter(AllGrade);
