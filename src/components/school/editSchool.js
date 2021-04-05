import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

export class EditSchool extends Component {
  constructor(props) {
    super(props);

    this.onChangeSchool = this.onChangeSchool.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      school: '',
      description: '',
      address: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/schools/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          school: response.data.school,
          description: response.data.description,
          address: response.data.address,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeSchool(e) {
    this.setState({
      school: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const school = {
      school: this.state.school,
      description: this.state.description,
      address: this.state.address,
    };

    console.log(school);

    axios
      .post(
        'https://mht-backend-edu.herokuapp.com/schools/update/' +
          this.props.match.params.id,
        school
      )
      .then((res) => console.log(res.data));

    window.location = '/school';
  }

  render() {
    return (
      <div style={{ marginTop: '3em' }}>
        <Typography variant="h4" style={{ marginLeft: '1rem', color: 'white' }}>
          School Module
        </Typography>
        <hr
          style={{
            marginBottom: '1em',
            marginTop: '0',
            border: '3px solid #00796b',
            background: '#00796b',
          }}
        />
        <Card
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">Edit School</Typography>
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
                  <label style={{ marginLeft: '1em', marginRight: '1em' }}>
                    Edit School Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '1em',
                      marginRight: '1em',
                      width: '550px',
                    }}
                    type="text"
                    required
                    placeholder="Grade"
                    className="form-control"
                    value={this.state.school}
                    onChange={this.onChangeSchool}
                  />
                </div>
                <div className="form-group">
                  <label style={{ marginLeft: '1em', marginRight: '1em' }}>
                    Edit Address:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '1em',
                      marginRight: '1em',
                      width: '550px',
                    }}
                    type="text"
                    required
                    placeholder="Grade"
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                  />
                </div>
                <br />
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '1.2em' }}>
                    Edit School Description:{' '}
                  </label>
                  <input
                    style={{ marginLeft: '1.2em', width: '550px' }}
                    type="text"
                    required
                    placeholder="Subject Description"
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
                <Link to="/school">
                  <Button
                    className="btn"
                    style={{
                      color: '#2196f3',
                      border: '1px solid #2196f3',
                      textTransform: 'none',
                      fontSize: 18,
                      marginRight: '2em',
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginTop: '10em' }}
              >
                <Button
                  className="btn"
                  onClick={this.onSubmit}
                  style={{
                    background: '#00e676',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: 18,
                    marginLeft: '2em',
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
