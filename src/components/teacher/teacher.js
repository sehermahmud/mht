import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import TeacherPhoto from '../../image/teacher/teacherPhoto';
import TeacherNID from '../../image/teacher/teacherNID';
import TeacherLastCertificate from '../../image/teacher/teacherlastCertificate';
import { MDBDataTable } from 'mdbreact';

const Teacher = (props) => (
  <tr>
    <td></td>
    <td>{props.teacher.teacherName}</td>
    <td>{props.teacher.subject}</td>
    <td>
      <Button
        style={{
          color: 'white',
          background: 'purple',
          marginLeft: '1em',
          marginRight: '1em',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/teacherdetails/' + props.teacher._id}
        >
          details
        </Link>{' '}
      </Button>
      |
      <Button
        style={{
          color: 'white',
          marginLeft: '1em',
          marginRight: '1em',
          background: '#fdd835',
        }}
      >
        <Link
          style={{
            color: 'white',
          }}
          className="text-decoration-none"
          to={'/editTeacher/' + props.teacher._id}
        >
          edit
        </Link>
      </Button>
      |{' '}
      <Button
        style={{
          color: 'white',
          background: '#ef5350',
          marginLeft: '1em',
          marginRight: '1em',
        }}
      >
        <Typography
          className="text-decoration-none"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            color: 'white',
          }}
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
              style={{ margin: '0.5em', background: 'red', color: 'white' }}
              onClick={() => {
                props.deleteTeacher(props.teacher._id);
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

export class CreateTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangePercentage = this.onChangePercentage.bind(this);
    this.onChangeTeacherPhoto = this.onChangeTeacherPhoto.bind(this);
    this.onChangeTeacherNIDPhoto = this.onChangeTeacherNIDPhoto.bind(this);
    this.onChangeTeacherLastCertificatePhoto = this.onChangeTeacherLastCertificatePhoto.bind(
      this
    );
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTeacher = this.deleteTeacher.bind(this);

    this.state = {
      teacherName: '',
      email: '',
      contactNumber: '',
      subject: '',
      percentage: 0,
      teacherPhoto: '',
      teacherNIDPhoto: '',
      teacherLastCertificatePhoto: '',
      teachers: [],
    };
  }

  onChangeTeacherName(e) {
    this.setState({
      teacherName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeContactNumber(e) {
    this.setState({
      contactNumber: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangePercentage(e) {
    this.setState({
      percentage: e.target.value,
    });
  }

  onChangeTeacherPhoto(e) {
    this.setState({
      teacherPhoto: e.target.value,
    });
  }

  onChangeTeacherNIDPhoto(e) {
    this.setState({
      teacherNIDPhoto: e.target.value,
    });
  }

  onChangeTeacherLastCertificatePhoto(e) {
    this.setState({
      teacherLastCertificatePhoto: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newTeacher = {
      teacherName: this.state.teacherName,
      email: this.state.email,
      contactNumber: this.state.contactNumber,
      subject: this.state.subject,
      percentage: this.state.percentage,
      teacherPhoto: this.state.teacherPhoto,
      teacherNIDPhoto: this.state.teacherNIDPhoto,
      teacherLastCertificatePhoto: this.state.teacherLastCertificatePhoto,
    };

    console.log(newTeacher);

    axios
      .post('https://mht-backend-edu.herokuapp.com/teachers/add', newTeacher)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-edu.herokuapp.com/teachers/')
      .then((response) => {
        this.setState({ teachers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTeacher(id) {
    axios
      .delete('https://mht-backend-edu.herokuapp.com/teachers/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      teachers: this.state.teachers.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  teacherlist() {
    return this.state.teachers.map((currentTeacher) => {
      return (
        <Teacher
          teacher={currentTeacher}
          deleteTeacher={this.deleteTeacher}
          key={currentTeacher._id}
        />
      );
    });
  }

  render() {
    const userAttributes = [];
    this.state.teachers.forEach((el, order) => {
      userAttributes.push({
        sl: order + 1,
        TeacherName: el.teacherName,
        Subject: el.subject,
        Action: (
          <React.Fragment>
            <Button
              style={{
                color: 'white',
                background: 'purple',
                marginLeft: '1em',
                marginRight: '1em',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/teacherdetails/' + el._id}
              >
                details
              </Link>{' '}
            </Button>
            <Button
              style={{
                color: 'white',
                marginLeft: '1em',
                marginRight: '1em',
                background: '#fdd835',
              }}
            >
              <Link
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
                to={'/editTeacher/' + el._id}
              >
                edit
              </Link>
            </Button>
            <Button
              style={{
                color: 'white',
                background: '#ef5350',
                marginLeft: '1em',
                marginRight: '1em',
              }}
            >
              <Typography
                className="text-decoration-none"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{
                  color: 'white',
                }}
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
          width: 10,
        },
        {
          label: 'Teacher Name',
          field: 'TeacherName',
          sort: 'asc',
          width: 150,
        },
        { label: 'Subject', field: 'Subject', sort: 'asc', width: 150 },
        { label: 'Action', field: 'Action', sort: 'asc', width: 150 },
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
          Teacher Module
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
          Home-Teacher
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginBottom: '1em',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
            color: 'white',
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
            <div className="form-group row">
              <label className="col-sm-4">
                <Grid item container spacing={2} xs={12}>
                  <input
                    placeholder="Teacher Name"
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    type="text"
                    required
                    className="form-control"
                    value={this.state.teacherName}
                    onChange={this.onChangeTeacherName}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    placeholder="Teacher Email"
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    placeholder="Teacher Contact Number"
                    type="text"
                    required
                    className="form-control"
                    value={this.state.contactNumber}
                    onChange={this.onChangeContactNumber}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    placeholder="Teacher Subject"
                    type="text"
                    required
                    className="form-control"
                    value={this.state.subject}
                    onChange={this.onChangeSubject}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '0.5em' }}
                    placeholder="Teacher Percentage"
                    type="number"
                    required
                    className="form-control"
                    value={this.state.percentage}
                    onChange={this.onChangePercentage}
                  />
                </Grid>
              </label>
              <div
                className="row"
                style={{
                  marginLeft: '1.2em',
                  marginTop: '0.6em',
                }}
              >
                <TeacherPhoto
                  required
                  value={this.state.teacherPhoto}
                  onChange={this.onChangeTeacherPhoto}
                />
                <TeacherNID
                  required
                  value={this.state.teacherNIDPhoto}
                  onChange={this.onChangeTeacherNIDPhoto}
                />
                <TeacherLastCertificate
                  required
                  value={this.state.teacherLastCertificatePhoto}
                  onChange={this.onChangeTeacherLastCertificatePhoto}
                />
              </div>
              <br />
              <Grid container spacing={2} item xs={12}>
                <Button
                  style={{
                    background: '#4a148c',
                    color: 'white',
                    marginTop: '5em',
                    marginLeft: '2em',
                  }}
                  onClick={this.onSubmit}
                >
                  Create Teacher
                </Button>
              </Grid>
            </div>
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
              Teacher List
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
            <br />
            <MDBDataTable striped bordered data={data} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(CreateTeacher);
