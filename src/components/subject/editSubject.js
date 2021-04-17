import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

class EditSubject extends Component {
  constructor(props) {
    super(props);

    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      subject: '',
      description: '',
    };
  }

  componentDidMount(id) {
    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/subjects/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          subject: response.data.subject,
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const subject = {
      subject: this.state.subject,
      description: this.state.description,
    };

    console.log(subject);

    axios
      .post(
        'https://mht-backend-edu.herokuapp.com/subjects/update/' +
          this.props.match.params.id,
        subject
      )
      .then((res) => console.log(res.data));

    window.location = '/subject';
  }

  render() {
    return (
      <div style={{ marginTop: '3em' }}>
        <Typography variant="h4" style={{ marginLeft: '1rem', color: 'white' }}>
          Subject Module
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
            <Typography variant="h6">Edit Subject</Typography>
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
                    Subject:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      marginRight: '4em',
                      width: '550px',
                    }}
                    type="text"
                    required
                    placeholder="Subject"
                    className="form-control"
                    value={this.state.subject}
                    onChange={this.onChangeSubject}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em' }}>
                    Subject Description:{' '}
                  </label>
                  <input
                    style={{ marginLeft: '3em', width: '550px' }}
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
                <Link to="/subject">
                  <Button
                    className="btn"
                    style={{
                      color: '#2196f3',
                      border: '1px solid #2196f3',
                      textTransform: 'none',
                      fontSize: 18,
                      marginRight: '3em',
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
                    marginLeft: '3em',
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

export default withRouter(EditSubject);
