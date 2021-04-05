import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

const Sllabys = (props) => (
  <tr>
    <td></td>
    <td>{props.sllabys.sllabys}</td>
    <td>{props.sllabys.sllabysCode}</td>
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
          to={'/editSllabys/' + props.sllabys._id}
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
              Are you sure you want to delete the Sllabys? After that you can
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
                border: '1px solid #2196f3',
                color: '#2196f3',
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              style={{ margin: '0.5em', background: 'red' }}
              onClick={() => {
                props.deleteSllabys(props.sllabys._id);
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

export class CreateSllabys extends Component {
  constructor(props) {
    super(props);

    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeSllabysCode = this.onChangeSllabysCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteSllabys = this.deleteSllabys.bind(this);

    this.state = {
      sllabys: '',
      sllabysCode: '',
      allSllabys: [],
    };
  }

  onChangeSllabys(e) {
    this.setState({
      sllabys: e.target.value,
    });
  }

  onChangeSllabysCode(e) {
    this.setState({
      sllabysCode: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newSllabys = {
      sllabys: this.state.sllabys,
      sllabysCode: this.state.sllabysCode,
    };

    console.log(newSllabys);

    axios
      .post('https://mht-backend-edu.herokuapp.com/sllabys/add', newSllabys)
      .then((res) => console.log(res.data));

    window.location.reload(true);
  }

  componentDidMount() {
    axios
      .get('https://mht-backend-edu.herokuapp.com/sllabys/')
      .then((response) => {
        this.setState({ allSllabys: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteSllabys(id) {
    axios
      .delete('https://mht-backend-edu.herokuapp.com/sllabys/' + id)
      .then((res) => console.log(res.data));

    this.setState({
      allSllabys: this.state.allSllabys.filter((el) => el._id !== id),
    });

    window.location.reload(true);
  }

  sllabyslist() {
    return this.state.allSllabys.map((currentSllabys) => {
      return (
        <Sllabys
          sllabys={currentSllabys}
          deleteSllabys={this.deleteSllabys}
          key={currentSllabys._id}
        />
      );
    });
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
          Sllabys Module
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
          Home-Sllabys
        </Typography>
        <hr
          style={{
            clear: 'both',
            marginTop: '1rem',
            border: '3px solid #00796b',
            background: '#00796b',
          }}
        />
        <Card
          style={{
            margin: '1em',
            borderRadius: 0,
            background: '#f3e5f5',
          }}
        >
          <CardContent elevation={3}>
            <Typography variant="h6">Create New Sllabys</Typography>
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
                    Write Sllabys Name:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      marginRight: '4em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Sllabys"
                    className="form-control"
                    value={this.state.sllabys}
                    onChange={this.onChangeSllabys}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" sm>
                <div className="form-group">
                  <label style={{ marginLeft: '3em' }}>
                    Write Sllabys Code:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '3em',
                      width: '500px',
                    }}
                    type="text"
                    required
                    placeholder="Sllabys Code"
                    className="form-control"
                    value={this.state.sllabysCode}
                    onChange={this.onChangeSllabysCode}
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
        <hr
          style={{
            marginRight: '0rem',
            marginLeft: '0rem',
            marginTop: '0em',
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
              Sllabys List
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
            <table
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
                  Sllabys
                </th>
                <th scope="col" style={{ width: '15em' }}>
                  Sllabys Code
                </th>
                <th scope="col" style={{ width: '20em' }}>
                  Actions
                </th>
              </thead>
              <tbody>{this.sllabyslist()}</tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    );
  }
}
