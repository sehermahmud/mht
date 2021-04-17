import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import TeacherPhoto from '../../image/teacher/teacherPhoto';
import TeacherNID from '../../image/teacher/teacherNID';
import TeacherLastCertificate from '../../image/teacher/teacherlastCertificate';

export class EditTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangePercentage = this.onChangePercentage.bind(this);
    this.onChangeTeacherPhoto = this.onChangeTeacherPhoto.bind(this);
    this.onChangeTeacherNIDPhoto = this.onChangeTeacherNIDPhoto.bind(this);
    this.onChangeTeacherLastCertificatePhoto = this.onChangeTeacherLastCertificatePhoto.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacherName: '',
      email: '',
      contactNumber: '',
      subject: '',
      percentage: 0,
      teacherPhoto: '',
      teacherNIDPhoto: '',
      teacherLastCertificatePhoto: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://mht-backend-edu.herokuapp.com/teachers/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          teacherName: response.data.teacherName,
          email: response.data.email,
          contactNumber: response.data.contactNumber,
          subject: response.data.subject,
          percentage: response.data.percentage,
          teacherPhoto: response.data.teacherPhoto,
          teacherNIDPhoto: response.data.teacherNIDPhoto,
          teacherLastCertificatePhoto:
            response.data.teacherLastCertificatePhoto,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

    const teacher = {
      teacherName: this.state.teacherName,
      email: this.state.email,
      contactNumber: this.state.contactNumber,
      subject: this.state.subject,
      percentage: this.state.percentage,
      teacherPhoto: this.state.teacherPhoto,
      teacherNIDPhoto: this.state.teacherNIDPhoto,
      teacherLastCertificatePhoto: this.state.teacherLastCertificatePhoto,
    };

    console.log(teacher);

    axios
      .post(
        'https://mht-backend-edu.herokuapp.com/teachers/update/' +
          this.props.match.params.id,
        teacher
      )
      .then((res) => console.log(res.data));

    window.location = '/teacher';
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
          Teacher Module
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
            <Typography variant="h6">Edit Teacher</Typography>
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
                    style={{ marginBottom: '1.3em', marginLeft: '1em' }}
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
                    style={{ marginBottom: '1.3em', marginLeft: '1em' }}
                    type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </Grid>
                <Grid container spacing={2} item xs={12}>
                  <input
                    style={{ marginBottom: '1.3em', marginLeft: '1em' }}
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
                    style={{ marginBottom: '1.3em', marginLeft: '1em' }}
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
                    style={{ marginBottom: '1.3em', marginLeft: '1em' }}
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
                style={{ marginLeft: '1.2em', marginTop: '0.6em' }}
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
              <Grid
                item
                container
                direction="column"
                sm
                style={{ marginTop: '10em', marginLeft: '10em' }}
              >
                <Link to="/teacher">
                  <Button
                    cclassName="btn"
                    style={{
                      color: '#2196f3',
                      border: '1px solid #2196f3',
                      textTransform: 'none',
                      fontSize: 18,
                      marginRight: '3em',
                      marginLeft: '2em',
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
                    marginRight: '2em',
                  }}
                >
                  Update
                </Button>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(EditTeacher);
