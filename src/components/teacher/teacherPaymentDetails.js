import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

export class TeacherPaymentDetails extends Component {
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
          Teacher Payment Details from Batch
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
          Home-Teacher-BatchPaymentDetails
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
        <Card elevation={3} style={{ margin: '0.5em', borderRadius: 0 }}>
          <CardContent>
            <Grid container direction="row">
              <Grid item container direction="column" sm>
                <Typography variant="h6">Teacher Name: </Typography>
              </Grid>
              <Grid item container direction="column" sm>
                <Typography variant="h6">Batch Name: </Typography>
              </Grid>
              <Grid item container direction="column" sm>
                <Typography variant="h6" style={{ marginLeft: '8em' }}>
                  Month:{' '}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
        <Grid container direction="row">
          <Grid item container direction="column" sm>
            <hr
              style={{
                border: '3px solid #4caf50',
                background: '#4caf50',
                marginBottom: 0,
                marginTop: 0,
                width: '99%',
                borderRadius: '0.5em',
                // marginLeft: '1em',
                // marginRight: '1em',
              }}
            />
          </Grid>
          <Grid item container direction="column" sm>
            <hr
              style={{
                border: '3px solid #ef5350',
                background: '#ef5350',
                marginBottom: 0,
                marginTop: 0,
                width: '99%',
                borderRadius: '0.5em',
                // marginRight: '8em',
                // marginLeft: '1em',
              }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item container direction="column" sm>
            <Card
              elevation={3}
              style={{
                marginRight: '0.1em',
                marginLeft: '0.1em',
                borderRadius: 0,
              }}
            >
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '0.8em' }}>
                  Paid Students
                </Typography>
                <div style={{ margin: 0 }}>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                    }}
                    variant="contained"
                  >
                    COPY
                  </Button>
                  <Button
                    elevation={1}
                    variant="contained"
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                    }}
                  >
                    CSV
                  </Button>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    Excel
                  </Button>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                    }}
                    variant="contained"
                  >
                    PDF
                  </Button>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    Print
                  </Button>
                </div>
                <br />
                <table
                  id="dtBasicExample"
                  className="table table-striped table-bordered"
                  cellspacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '1em' }}>
                        sl
                      </th>
                      <th scope="col" style={{ width: '10em' }}>
                        Name
                      </th>
                      <th scope="col" style={{ width: '7em' }}>
                        Phone Number
                      </th>
                      <th scope="col" style={{ width: '7em' }}>
                        email Id
                      </th>
                      <th scope="col" style={{ width: '5em' }}>
                        Paid Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Total Students: 0</td>
                      <td></td>
                      <td>Total Paid:</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </Grid>
          <Grid item container direction="column" sm>
            <Card
              elevation={3}
              style={{
                marginRight: '0.1em',
                marginLeft: '0.1em',
                borderRadius: 0,
              }}
            >
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '0.8em' }}>
                  Unpaid Students
                </Typography>
                <div style={{ margin: 0 }}>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                    }}
                    variant="contained"
                  >
                    COPY
                  </Button>
                  <Button
                    elevation={1}
                    variant="contained"
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                    }}
                  >
                    CSV
                  </Button>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    Excel
                  </Button>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                    }}
                    variant="contained"
                  >
                    PDF
                  </Button>
                  <Button
                    elevation={1}
                    style={{
                      marginLeft: '0.3em',
                      marginRight: '0.3em',
                      marginTop: '0.3em',
                      marginBotton: '0.3em',
                      textTransform: 'none',
                    }}
                    variant="contained"
                  >
                    Print
                  </Button>
                </div>
                <br />
                <table
                  id="dtBasicExample"
                  className="table table-striped table-bordered"
                  cellspacing="0"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '1em' }}>
                        sl
                      </th>
                      <th scope="col" style={{ width: '10em' }}>
                        Name
                      </th>
                      <th scope="col" style={{ width: '7em' }}>
                        Phone Number
                      </th>
                      <th scope="col" style={{ width: '7em' }}>
                        email Id
                      </th>
                      <th scope="col" style={{ width: '5em' }}>
                        Paid Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
