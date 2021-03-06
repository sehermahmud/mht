import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  img: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  },
  container: {
    height: '240px',
    width: '260px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  imgHolder: {
    width: '150px',
    height: '150px',
    marginTop: '1rem',
  },
  imageUpload: {
    margin: 'auto',
    color: 'white',
    width: '230px',
    textAlign: 'center',
    cursor: 'pointer',
    alignItems: 'center',
    backgroundColor: '#2196f3',
  },
  margin: {
    margin: '1em',
  },
});

class StudentPhoto extends Component {
  state = {
    profileImg:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  };
  imageHandler = (e) => {
    // const imageUpload = $('imageUpload');
    // const img = $('img');
    // const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  render() {
    const { classes } = this.props;
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className={classes.container}>
          <h5 className="heading">Student Photo</h5>
          <div className={classes.imgHolder}>
            <img src={profileImg} alt="" id="img" className={classes.img} />
          </div>
          <input
            type="file"
            accept="image/*"
            className={classes.imageUpload}
            name="imageUpload"
            id="input"
            onChange={this.imageHandler}
          />
        </div>
      </div>
    );
  }
}

StudentPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentPhoto);
