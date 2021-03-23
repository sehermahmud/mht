import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import './user.css'

export default class AllUser extends Component {
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
          <strong>User Section</strong>
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
          Home-Settings-User-AllUser
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
            <Typography variant="h6">All User Page</Typography>
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
            <table
              id="team-list"
              className="table table-striped table-bordered"
              width="100%"
              style={{
                marginTop: '0.5em',
                marginBottom: '0.5em',
              }}
            >
              <thead>
                  <th scope="col" style={{ width: '3em' }}>
                    sl
                  </th>
                  <th scope="col" style={{ width: '15em' }}>
                    Fullname
                  </th>
                  <th scope="col" style={{ width: '15em' }}>
                    Email
                  </th>
                  <th scope="col" style={{ width: '10em' }}>
                    Role
                  </th>
                  <th scope="col" style={{ width: '10em' }}>
                    Action
                  </th>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  <Link
                    style={{ color: 'white' }}
                    className="text-decoration-none"
                    to="/user/editUser/:id"
                  >
                    <Button
                      style={{
                        color: 'white',
                        background:
                          'linear-gradient(45deg, #e65100 30%, #ff9800 90%)',
                        marginRight: '1em',
                        marginLeft: '1em',
                        marginBottom: '0.1em',
                        marginTop: '0.1em',
                      }}
                    >
                        edit
                        </Button>
                        </Link>{' '}
                    <Button
                      style={{
                        color: 'white',
                        background:
                          'linear-gradient(45deg, #b71c1c 30%, #f44336 90%)',
                        marginRight: '1em',
                        marginLeft: '1em',
                        marginBottom: '0.1em',
                        marginTop: '0.1em',
                      }}
                    >
                      <Typography
                        className="text-decoration-none"
                        style={{ color: 'white' }}
                      >
                        delete{' '}
                      </Typography>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}

