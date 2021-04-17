import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import './user.css';
import firebase from '../../firebase/firebase.utils';

export default class AllUser extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;
    this.state = {
      users: [],
      password: '',
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { displayName, email } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        displayName,
        email,
      });
    });
    this.setState({
      users,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  // componentDidMount() {
  //   db.collection('users')
  //     .get()
  //     .then((snapshot) => {
  //       const users = [];
  //       snapshot.forEach((doc) => {
  //         const data = doc.data();
  //         users.push(data);
  //       });
  //       this.setState({ users: users });
  //       console.log(snapshot);
  //     })
  //     .catch((error) => console.log(error));
  // }

  delete(id) {
    if (this.state.password !== 'seher') {
      firebase
        .firestore()
        .collection('users')
        .doc(id)
        .delete()
        .then(() => {
          console.log('users successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    } else {
      console.error('Error removing document: ');
    }
  }

  render(id) {
    return (
      <div style={{ marginTop: '5em' }}>
        <Typography
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          <strong>User Section</strong>
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
          Home-Settings-User-AllUser
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
            background: 'white',
          }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">All User Page</Typography>
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
            <table
              id="team-list"
              className="table table-striped table-bordered"
              width="100%"
              style={{
                marginTop: '0.5em',
                marginBottom: '0.5em',
              }}
            >
              <thead>
                <th scope="col" style={{ width: '3em' }}>
                  sl
                </th>
                <th scope="col" style={{ width: '15em' }}>
                  Fullname
                </th>
                <th scope="col" style={{ width: '15em' }}>
                  Email
                </th>
                <th scope="col" style={{ width: '10em' }}>
                  Action
                </th>
              </thead>
              {this.state.users.map((user) => {
                return (
                  <tbody key={user.key}>
                    <tr>
                      <td></td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link
                          to={
                            user.key === 'XI7mgU1HA3ckgQOPBHQE2IOskvx1'
                              ? '#'
                              : `/user/editUser/${user.key}`
                          }
                          disabled={
                            user.key === 'XI7mgU1HA3ckgQOPBHQE2IOskvx1'
                              ? true
                              : false
                          }
                          style={{
                            '&:to': {
                              background: '#dddddd',
                              color: 'grey',
                            },
                          }}
                        >
                          <Button
                            style={{
                              color: 'white',
                              background:
                                'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
                              marginRight: '1em',
                              marginLeft: '1em',
                              marginBottom: '0.1em',
                              marginTop: '0.1em',
                              '&:disabled': {
                                background: '#dddddd',
                                color: 'grey',
                              },
                            }}
                            disabled={
                              user.key === 'XI7mgU1HA3ckgQOPBHQE2IOskvx1'
                                ? true
                                : false
                            }
                          >
                            edit
                          </Button>
                        </Link>
                        <Button
                          style={{
                            color: 'white',
                            background:
                              'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                            marginRight: '1em',
                            marginLeft: '1em',
                            marginBottom: '0.1em',
                            marginTop: '0.1em',
                          }}
                          disabled={
                            user.key === 'XI7mgU1HA3ckgQOPBHQE2IOskvx1'
                              ? true
                              : false
                          }
                          data-toggle="modal"
                          data-target="#exampleModal"
                          // id={firebase.firestore().collection('users').doc(id)}
                          // onClick={this.delete.bind(this, this.state.key)}
                        >
                          delete{' '}
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </CardContent>
        </Card>

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
                <h5 className="modal-title" id="exampleModalLabel">
                  Are you sure you want to delete this user:
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
