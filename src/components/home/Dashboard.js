import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Button } from '@material-ui/core';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      batchs: [],
    };
  }

  componentDidMount(id) {
    axios
      .get(
        `https://mht-backend-edu.herokuapp.com/teachersBatch/5f90440a838fe20a3e1520d6/allTeacherBatch`
      )
      .then((response) => {
        if (response.data.teacher.teacherBatch.length > 0) {
          this.setState({
            batchs: response.data.teacher.teacherBatch.map((batch) => batch),
          });
        }

        console.log(this.state.batchs);
      });
  }

  render() {
    // const userAttributes = [];
    // this.state.grades.forEach((el, order) => {
    //   userAttributes.push({
    //     sl: order + 1,
    //     Grade: el.grade,
    //     Description: el.description,
    //     Action: (
    //       <React.Fragment>
    //         <Button
    //           style={{
    //             color: 'white',
    //             background: 'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
    //             marginRight: '1em',
    //             marginLeft: '1em',
    //             marginBottom: '0.1em',
    //             marginTop: '0.1em',
    //           }}
    //         >
    //           <Link
    //             style={{ color: 'white' }}
    //             className="text-decoration-none"
    //             to={'/edit/' + el._id}
    //           >
    //             edit
    //           </Link>{' '}
    //         </Button>
    //         <Button
    //           style={{
    //             color: 'white',
    //             background: 'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
    //             marginRight: '1em',
    //             marginLeft: '1em',
    //             marginBottom: '0.1em',
    //             marginTop: '0.1em',
    //           }}
    //           data-toggle="modal"
    //           data-target="#exampleModal"
    //         >
    //           <Typography
    //             className="text-decoration-none"
    //             data-toggle="modal"
    //             data-id="props.grade._id"
    //             data-target="#exampleModal"
    //             style={{ color: 'white' }}
    //           >
    //             delete{' '}
    //           </Typography>
    //         </Button>
    //       </React.Fragment>
    //     ),
    //   });
    // });

    const data = {
      columns: [
        {
          label: 'Batch Name',
          field: 'BatchName',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Schedule',
          field: 'Schedule',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Total number of Active students',
          field: 'ActiveStudents',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Number of Paid students',
          field: 'PaidStudents',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Number of Due students',
          field: 'DueStudents',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Total Expected Amount /-',
          field: 'ExpectedAmount',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Total Paid Amount /-',
          field: 'PaidAmount',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Total Due Amount /-',
          field: 'DueAmount',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Actions',
          field: 'Actions',
          sort: 'asc',
          width: 100,
        },
      ],
      rows: [
        {
          BatchName: '',
          Schedule: '',
          ActiveStudents: '',
          PaidStudents: '',
          DueStudents: '',
          ExpectedAmount: '',
          PaidAmount: '',
          DueAmount: '',
          Actions: (
            <Button
              style={{
                color: 'white',
                background: 'linear-gradient(45deg, #311b92 30%, #673ab7 90%)',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                marginTop: '0.3em',
                marginBottom: '0.3em',
                textTransform: 'none',
                fontSize: '0.9em',
              }}
            >
              <Link
                to="#"
                style={{
                  color: 'white',
                }}
                className="text-decoration-none"
              >
                Details
              </Link>
            </Button>
          ),
        },
      ],
    };

    return (
      <div style={{ marginTop: '5em' }}>
        <Typography
          variant="h5"
          style={{
            marginLeft: '1rem',
            textAlign: 'left',
            float: 'left',
            color: 'white',
          }}
        >
          Dashboard
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
          Home-Dashboard
        </Typography>
        <br />
        <br />
        <br />
        <Grid container direction="row">
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginLeft: '0.9em', marginRight: '0.9em' }}
          >
            <div className="card mb-3" style={{ maxWidth: '340px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div style={{ backgroundColor: '#001f3f' }}>
                    <PeopleOutlineIcon
                      style={{
                        height: '3em',
                        width: '3em',
                        color: 'white',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p style={{ marginBottom: '0em' }}>ACTIVE STUDENTS:</p>
                    <p style={{ marginBottom: '0em' }}>0</p>
                    <p style={{ marginBottom: '0em' }}>ENGAGED STUDENTS:</p>
                    <p style={{ marginBottom: '0em' }}>0</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginLeft: '0.9em', marginRight: '0.9em' }}
          >
            <div className="card mb-3" style={{ maxWidth: '340px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div style={{ backgroundColor: '#f39c12' }}>
                    <LocalAtmIcon
                      style={{
                        height: '3em',
                        width: '3em',
                        color: 'white',
                        alignItems: 'center',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p style={{ marginBottom: '0em' }}>EXPECTED AMOUNT:</p>
                    <p style={{ marginBottom: '0em' }}>0</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginLeft: '0.9em', marginRight: '0.9em' }}
          >
            <div className="card mb-3" style={{ maxWidth: '340px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div style={{ backgroundColor: '#00a65a' }}>
                    <AttachMoneyIcon
                      style={{
                        height: '3em',
                        width: '3em',
                        color: 'white',
                        alignItems: 'center',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p style={{ marginBottom: '0em' }}>PAID AMOUNT:</p>
                    <p style={{ marginBottom: '0em' }}>0</p>
                    <p style={{ marginBottom: '0em' }}>DISCOUNT AMOUNT:</p>
                    <p style={{ marginBottom: '0em' }}>0</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            style={{ marginLeft: '0.9em', marginRight: '0.9em' }}
          >
            <div className="card mb-3" style={{ maxWidth: '340px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div style={{ backgroundColor: '#dd4b39' }}>
                    <AttachMoneyIcon
                      style={{
                        height: '3em',
                        width: '3em',
                        color: 'white',
                        alignItems: 'center',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p style={{ marginBottom: '0em' }}>DUE AMOUNT:</p>
                    <p style={{ marginBottom: '0em' }}>0</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
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
          style={{ marginRight: '1rem', marginLeft: '1rem', borderRadius: 0 }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">Batch List</Typography>
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
