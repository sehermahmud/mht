import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { MDBDataTable } from 'mdbreact';

import './school.css';

const School = (props) => (
  <tr>
    <td></td>
    <td>{props.school.school}</td>
    <td>{props.school.description}</td>
    <td>{props.school.address}</td>
    <td>
      <Button
        style={{
          color: 'white',
          background: '#fdd835',
          marginRight: '1em',
          marginLeft: '1em',
          marginBottom: '0.1em',
          marginTop: '0.1em',
        }}
      >
        <Link
          style={{ color: 'white' }}
          className="text-decoration-none"
          to={'/editSchool/' + props.school._id}
        >
          edit
        </Link>{' '}
      </Button>
      <Button
        style={{
          color: 'white',
          background: '#f44336',
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
          data-target="#exampleModal"
          style={{ color: 'white' }}
        >
          delete{' '}
        </Typography>
      </Button>
    </td>
    <div
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
              Are you sure you want to delete the School? After that you can not
              get it back!
            </h5>
          </div>
          <div className="modal-footer">
            <Button
              data-dismiss="modal"
              color="primary"
              style={{ margin: '0.5em' }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{ margin: '0.5em', background: 'red' }}
              onClick={() => {
                props.deleteSchool(props.school._id);
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

class CreateSchool extends Component {
  constructor(props) {
    super(props);

    this.onChangeSchool = this.onChangeSchool.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);

    this.state = {
      school: '',
      description: '',
      address: '',
      schools: [],
    };
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

    const newSchool = {
      school: this.state.school,
      description: this.state.description,
      address: this.state.address,
    };

    console.log(newSchool);

    axios
      .post('https://mht-backend-edu.herokuapp.com/schools/add', newSchool)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-edu.herokuapp.com/schools/')
      .then((response) => {
        this.setState({ schools: response.data });

        console.log(this.state.schools);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSchool(id) {
    axios
      .delete('https://mht-backend-edu.herokuapp.com/schools/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      schools: this.state.schools.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  schoolslist() {
    return this.state.schools.map((currentSchool) => {
      return (
        <School
          school={currentSchool}
          deleteSchool={this.deleteSchool}
          key={currentSchool._id}
        />
      );
    });
  }

  render() {
    const userAttributes = [];
    this.state.schools.forEach((el, order) => {
      userAttributes.push({
        sl: order + 1,
        school: el.school,
        description: el.description,
        address: el.address,
        action: (
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
                to={'/editSchool/' + el._id}
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
          width: 5,
        },
        {
          label: 'school',
          field: 'school',
          sort: 'asc',
          width: 10,
        },
        {
          label: 'description',
          field: 'description',
          sort: 'asc',
          width: 10,
        },
        {
          label: 'address',
          field: 'address',
          sort: 'asc',
          width: 20,
        },
        {
          label: 'action',
          field: 'action',
          sort: 'asc',
          width: 10,
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
          School Module
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
          Home-School
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
            <Typography variant="h6">Create New School</Typography>
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
                    Write School Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '1em',
                      marginRight: '1em',
                      width: '550px',
                    }}
                    type="text"
                    required
                    placeholder="School"
                    className="form-control"
                    value={this.state.grade}
                    onChange={this.onChangeGrade}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label style={{ marginLeft: '1em' }}>
                    Write School Description:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '1em',
                      width: '550px',
                    }}
                    type="text"
                    required
                    placeholder="School Description: "
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '1.2em' }}>
                    Write School Address:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '1.2em',
                      width: '550px',
                    }}
                    type="text"
                    required
                    placeholder="school Address"
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                  />
                </div>
                <br />
                <br />
                <Button
                  type="submit"
                  value="Create Subject"
                  className="btn btn-danger"
                  onClick={this.onSubmit}
                  style={{
                    marginLeft: '23em',
                    marginRight: '3.5em',
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
              School List
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
            {/* <Grid container direction="row"> */}
            {/* <Grid item container direction="column" sm>
                <section id="search_processes" class="center">
                  <div id="filter_content">
                    <table id="table_filters">
                      <tr id="row_special">
                        <label style={{ marginRight: '0.5em' }}>
                            Show entries of
                          </label>
                        <select class="form-control" id="records_comboBox">
                          <option id="10" value="10">
                            10
                          </option>
                          <option id="25" value="25">
                            25
                          </option>
                          <option id="50" value="50">
                            50
                          </option>
                        </select>
                      </tr>
                    </table>
                  </div>
                </section>
              </Grid> */}
            {/* <Grid
                item
                container
                direction="column"
                sm
                style={{ marginLeft: '40em', marginTop: '0.5em' }}
              >
                <Paper
                  elevation={0}
                  component="form"
                  style={{
                    padding: '2px 3px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 400,
                    border: '1px solid black',
                  }}
                >
                  <InputBase
                    style={{
                      marginLeft: '1em',
                      flex: 1,
                    }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                  />
                  <IconButton
                    type="submit"
                    style={{ padding: 10 }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid> */}
            {/* <br />
            <table
              id="team-list"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead className="">
                <th scope="col" style={{ width: '1em' }}>
                  sl
                </th>
                <th scope="col" style={{ width: '17em' }}>
                  School
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Description
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Address
                </th>
                <th scope="col" style={{ width: '13em' }}>
                  Actions
                </th>
              </thead>
              <tbody>{this.schoolslist()}</tbody>
            </table> */}
            {/* <br /> */}
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(CreateSchool);
