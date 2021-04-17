import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import firebase from '../../firebase/firebase.utils';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      displayName: '',
      email: '',
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection('users')
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const user = doc.data();
        this.setState({
          key: doc.id,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        console.log('No such document!');
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ user: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { displayName, email } = this.state;
    const createdAt = new Date();
    const updateRef = firebase
      .firestore()
      .collection('users')
      .doc(this.state.key);
    updateRef
      .set({
        displayName,
        email,
        createdAt,
      })
      .then((docRef) => {
        this.setState({
          key: '',
          displayName: '',
          email: '',
        });
        this.props.history.push('/user/allUser');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  render() {
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
          <strong>User Module</strong> <span>it all starts here</span>
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
          Home-Settings-User-Create User
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
            <Typography variant="h6">User Create Page</Typography>
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
                <div
                  style={{
                    marginRight: '50px',
                    marginBottom: '1em',
                  }}
                >
                  <Typography>Fullname*</Typography>
                  <input
                    className="form-control"
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.onChange}
                    label="Name"
                    required
                  />
                </div>
                <div
                  style={{
                    marginRight: '50px',
                    marginBottom: '1em',
                    marginTop: '1em',
                  }}
                >
                  <Typography>Email*</Typography>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    label="Enter Email"
                    required
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm></Grid>
            </Grid>
            <hr />
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmit}
              >
                Submit
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(UserEdit);
