import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

class EditSllabys extends Component {
  constructor(props) {
    super(props);

    this.onChangeSllabys = this.onChangeSllabys.bind(this);
    this.onChangeSllabysCode = this.onChangeSllabysCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      sllabys: '',
      sllabysCode: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://mht-backend-1.herokuapp.com/sllabys/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          sllabys: response.data.sllabys,
          sllabysCode: response.data.sllabysCode,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

    const sllabys = {
      sllabys: this.state.sllabys,
      sllabysCode: this.state.sllabysCode,
    };

    console.log(sllabys);

    axios
      .post(
        'https://mht-backend-1.herokuapp.com/sllabys/update/' +
          this.props.match.params.id,
        sllabys
      )
      .then((res) => console.log(res.data));

    window.location = '/sllabys';
  }

  render() {
    return (
      <div style={{ marginTop: '3em' }}>
        <Typography variant="h4" style={{ marginLeft: '1rem', color: 'white' }}>
          Sllabys Module
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
            <Typography variant="h6">Edit Sllabys</Typography>
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
                  <label style={{ marginLeft: '1.2em', marginRight: '3em' }}>
                    Sllabys:{' '}
                  </label>
                  <input
                    style={{
                      marginLeft: '1.2em',
                      marginRight: '4em',
                      width: '550px',
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
                  <label style={{ marginLeft: '1.2em' }}>Sllabys Code: </label>
                  <input
                    style={{ marginLeft: '1.2em', width: '550px' }}
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
                <Link to="/sllabys">
                  <Button
                    className="btn"
                    style={{
                      color: '#2196f3',
                      border: '1px solid #2196f3',
                      textTransform: 'none',
                      fontSize: 18,
                      marginRight: '2em',
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
                    marginLeft: '2em',
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

export default withRouter(EditSllabys);
