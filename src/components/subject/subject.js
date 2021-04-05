import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

import { MDBDataTable } from 'mdbreact';

const Subject = (props) => (
  <tr>
    <td></td>
    <td>{props.subject.subject}</td>
    <td>{props.subject.description}</td>
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
          style={{ color: 'white', background: '#fdd835' }}
          className="text-decoration-none"
          to={'/editSubject/' + props.subject._id}
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
          href="#"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ color: 'white', background: '#f44336' }}
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
              Are you sure you want to delete the Subject? After that you can
              not get it back!
            </h5>
          </div>
          <div className="modal-footer">
            <Button
              data-dismiss="modal"
              color="primary"
              style={{
                margin: '0.5em',
                marginRight: '20em',
                color: '#2196f3',
                border: '1px solid #2196f3',
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{
                color: 'white',
                background: '#f44336',
                margin: '0.5em',
              }}
              onClick={() => {
                props.deleteSubject(props.subject._id);
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

export class CreateSubject extends Component {
  constructor(props) {
    super(props);

    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRowsPerPage = this.onChangeRowsPerPage.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);

    this.state = {
      subject: '',
      description: '',
      rowsPerPage: 10,
      page: 0,
      subjects: [],
      columns: [],
    };
  }

  onChangeRowsPerPage(e) {
    this.setState({
      rowsPerPage: e.target.value,
    });
  }

  onChangePage(e) {
    this.setState({
      page: e.target.value,
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

    const newSubject = {
      subject: this.state.subject,
      description: this.state.description,
    };

    console.log(newSubject);

    axios
      .post('https://mht-backend-edu.herokuapp.com/subjects/add', newSubject)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-edu.herokuapp.com/subjects/')
      .then((response) => {
        this.setState({ subjects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSubject(id) {
    axios
      .delete('https://mht-backend-edu.herokuapp.com/subjects/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      subjects: this.state.subjects.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  subjectlist() {
    return this.state.subjects.map((currentsubject) => {
      return (
        <Subject
          subject={currentsubject}
          deleteSubject={this.deleteSubject}
          key={currentsubject._id}
        />
      );
    });
  }

  render() {
    const userAttributes = [];
    this.state.subjects.forEach((el, order) => {
      userAttributes.push({
        sl: order + 1,
        subject: el.subject,
        description: el.description,
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
                to={'/editSubject/' + el._id}
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
                href="#"
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
          label: 'subject',
          field: 'subject',
          sort: 'asc',
          width: 5,
        },
        {
          label: 'description',
          field: 'description',
          sort: 'asc',
          width: 5,
        },
        {
          label: 'action',
          field: 'action',
          sort: 'asc',
          width: 5,
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
          Subject Module
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
          Home-Subject
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
            <Typography variant="h6">Create New Subject</Typography>
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
                    Write Subject Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      marginRight: '4em',
                      width: '500px',
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
                    Write Subject Description:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      width: '500px',
                    }}
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
              Subject List
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
            {/* <Grid container direction="row">
              <Grid item container direction="column" sm>
                <section id="search_processes" class="center">
                  <div id="filter_content">
                    <table id="table_filters">
                      <tr id="row_special">
                        {/* <label style={{ marginRight: '0.5em' }}>
                            Show entries of
                          </label> */}
            {/* <select class="form-control" id="records_comboBox">
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
              </Grid>
              <Grid
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
              </Grid> */}
            {/* </Grid> */}
            <br />
            {/* <table
              id="team-list"
              className="table table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead className="">
                <th scope="col" style={{ width: '4em' }}>
                  sl
                </th>
                <th scope="col" style={{ width: '15em' }}>
                  Subject
                </th>
                <th scope="col" style={{ width: '30em' }}>
                  Description
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Actions
                </th>
              </thead>
              <tbody>{this.subjectlist()}</tbody>
            </table> */}
            <br />
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
