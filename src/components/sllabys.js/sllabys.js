import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import './sllabys.css';

const Sllabys = (props) => (
  <tr>
    <td style={{ width: '4em' }}></td>
    <td style={{ width: '15em' }}>{props.sllabys.sllabys}</td>
    <td style={{ width: '15em' }}>{props.sllabys.sllabysCode}</td>
    <td style={{ width: '20em' }}>
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
          to={'/editSllabys/' + props.sllabys._id}
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
      >
        <Typography
          className="text-decoration-none"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ color: 'white' }}
        >
          delete{' '}
        </Typography>
      </Button>
    </td>
  </tr>
);

class CreateSllabys extends Component {
  constructor(props) {
    super(props);

    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeSllabysCode = this.onChangeSllabysCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteSllabys = this.deleteSllabys.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      sllabys: '',
      sllabysCode: '',
      allSllabys: [],
      password: '',
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeSllabys(e) {
    this.setState({
      sllabys: e.target.value,
    });
  }

  onChangeSllabysCode(e) {
    this.setState({
      sllabysCode: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newSllabys = {
      sllabys: this.state.sllabys,
      sllabysCode: this.state.sllabysCode,
    };

    console.log(newSllabys);

    axios
      .post('https://mht-backend-1.herokuapp.com/sllabys/add', newSllabys)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-1.herokuapp.com/sllabys/')
      .then((response) => {
        this.setState({ allSllabys: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSllabys(id) {
    axios
      .delete('https://mht-backend-1.herokuapp.com/sllabys/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      allSllabys: this.state.allSllabys.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  sllabyslist() {
    return this.state.allSllabys.map((currentSllabys) => {
      return (
        <Sllabys
          sllabys={currentSllabys}
          deleteSllabys={this.deleteSllabys}
          key={currentSllabys._id}
        />
      );
    });
  }

  render() {
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
          Sllabys Module
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
          Home-Sllabys
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
          }}
        />
        <Card
          style={{
            margin: '1em',
            borderRadius: 0,
            background: '#f3e5f5',
          }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">Create New Sllabys</Typography>
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
                    Write Sllabys Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      marginRight: '4em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Sllabys"
                    className="form-control"
                    value={this.state.sllabys}
                    onChange={this.onChangeSllabys}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em' }}>
                    Write Sllabys Code:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Sllabys Code"
                    className="form-control"
                    value={this.state.sllabysCode}
                    onChange={this.onChangeSllabysCode}
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
                    background: '#4a148c',
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
        <hr
          style={{
            marginRight: '0rem',
            marginLeft: '0rem',
            marginTop: '0em',
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
              Sllabys List
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
            <table
              id="team-list"
              className="table table-striped table-bordered"
              cellSpacing="0"
              width="100%"
            >
              <thead className="">
                <tr>
                  <th scope="col" style={{ width: '4em' }}>
                    sl
                  </th>
                  <th scope="col" style={{ width: '15em' }}>
                    Sllabys
                  </th>
                  <th scope="col" style={{ width: '15em' }}>
                    Sllabys Code
                  </th>
                  <th scope="col" style={{ width: '20em' }}>
                    Actions
                  </th>
                </tr>
              </thead>
            </table>
            <table
              id="team-list"
              className="table table-striped table-bordered"
              cellSpacing="0"
              width="100%"
            >
              <tbody>{this.sllabyslist()}</tbody>
            </table>
          </CardContent>
        </Card>

        <div
          className="modal fade"
          id="exampleModal"
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
                  Are you sure you want to delete the the Batch? After that you
                  can not get it back!
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
      </div>
    );
  }
}

export default withRouter(CreateSllabys);

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
//     const { _id, sllabys } = this.props.data;
//     if (this.props.displayModal) {
//       return (
//         // <div key={_id}>
//         //   <h4 style={{ color: 'red' }}>
//         //     Are you sure you want to delete {sllabys}? After that you can not
//         //     get it back!
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
//         //     onClick={this.removeTask(_id)}
//         //   >
//         //     Delete
//         //   </Button>
//         // </div>
//         <Dialog
//           key={_id}
//           showModal={this.showModal}
//           closeModal={this.closeModal}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle style={{ color: 'red' }} id="alert-dialog-title">
//             Are you sure you want to delete {sllabys}? After that you cannot get
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
//               onClick={this.removeTask}
//             >
//               Delete
//             </Button>
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
//     const { _id, sllabys, sllabysCode } = this.props.task;
//     return (
//       <tr key={_id}>
//         <td></td>
//         <td>{sllabys}</td>
//         <td>{sllabysCode}</td>
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
//               to={'/editSllabys/' + _id}
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

// class CreateSllabys extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeSllabys = this.onChangeSllabys.bind(this);
//     this.onChangeSllabysCode = this.onChangeSllabysCode.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       sllabys: '',
//       sllabysCode: '',
//       allSllabys: [],
//       modal: {
//         _id: null,
//         sllabys: null,
//         sllabysCode: null,
//       },
//       tasks: [],
//     };
//   }

//   onChangeSllabys(e) {
//     this.setState({
//       sllabys: e.target.value,
//     });
//   }

//   onChangeSllabysCode(e) {
//     this.setState({
//       sllabysCode: e.target.value,
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newSllabys = {
//       sllabys: this.state.sllabys,
//       sllabysCode: this.state.sllabysCode,
//     };

//     console.log(newSllabys);

//     axios
//       .post('https://mht-backend-1.herokuapp.com/sllabys/add', newSllabys)
//       .then((res) => console.log(res.data));

//     window.location.reload(true);
//   }

//   componentDidMount() {
//     axios
//       .get('https://mht-backend-1.herokuapp.com/sllabys/')
//       .then((response) => {
//         this.setState({ tasks: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   showModal = (task) => this.setState({ modal: task, showModal: true });
//   hideModal = () => this.setState({ showModal: false });
//   removeTask = (activeTask) => {
//     const index = this.state.tasks.findIndex((task) => {
//       return task._id === activeTask._id;
//     });

//     this.setState({
//       showModal: false,
//       tasks: [
//         ...this.state.tasks.slice(0, index),
//         ...this.state.tasks.slice(index + 1),
//       ],
//     });
//   };

//   // deleteGrade(id) {
//   //   axios
//   //     .delete('https://mht-backend-1.herokuapp.com/grades/' + id)
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
//           Sllabys Module
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
//           Home-Sllabys
//         </Typography>
//         <hr
//           style={{
//             clear: 'both',
//             marginTop: '1rem',
//             border: '3px solid #00796b',
//             background: '#00796b',
//           }}
//         />
//         <Card
//           style={{
//             margin: '1em',
//             borderRadius: 0,
//             background: '#f3e5f5',
//           }}
//         >
//           <CardContent elevation={3}>
//             <Typography variant="h6">Create New Sllabys</Typography>
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
//                     Write Sllabys Name:{' '}
//                   </label>
//                   <input
//                     style={{
//                       marginLeft: '3em',
//                       marginRight: '4em',
//                       width: '500px',
//                     }}
//                     type="text"
//                     required
//                     placeholder="Sllabys"
//                     className="form-control"
//                     value={this.state.sllabys}
//                     onChange={this.onChangeSllabys}
//                   />
//                 </div>
//               </Grid>
//               <Grid item container direction="column" sm>
//                 <div className="form-group">
//                   <label style={{ marginLeft: '3em' }}>
//                     Write Sllabys Code:{' '}
//                   </label>
//                   <input
//                     style={{
//                       marginLeft: '3em',
//                       width: '500px',
//                     }}
//                     type="text"
//                     required
//                     placeholder="Sllabys Code"
//                     className="form-control"
//                     value={this.state.sllabysCode}
//                     onChange={this.onChangeSllabysCode}
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
//                     background: '#4a148c',
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
//         <hr
//           style={{
//             marginRight: '0rem',
//             marginLeft: '0rem',
//             marginTop: '0em',
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
//               Sllabys List
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
//                   Sllabys
//                 </th>
//                 <th scope="col" style={{ width: '5em' }}>
//                   SllabysCode
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

// export default withRouter(CreateSllabys);
