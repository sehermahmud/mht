import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
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
    </td>
    <div
      data-id="props.grade._id"
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
              onClick={() => {
                props.deleteGrade(props.grade._id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  </tr>
);

export default class CreateGrade extends Component {
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

    this.state = {
      grade: '',
      description: '',
      grades: [],
      open: false,
      search: '',
      page: 0,
      rowPage: '',
    };
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
      .post('http://localhost:4000/grades/add', newGrade)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/grades/')
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
      .delete('http://localhost:4000/grades/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      grades: this.state.grades.filter((el) => el._id !== id),
    });

    window.location.reload(true);
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
    this.state.grades.forEach((el) => {
      userAttributes.push({
        sl: 1,
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

CreateGrade.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
