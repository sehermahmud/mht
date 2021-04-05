// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { login } from '../../actions/authActions';
// import { clearErrors } from '../../actions/errorActions';

// class Loginpage extends Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       email: '',
//       password: '',
//       msg: null,
//     };
//   }

//   static propTypes = {
//     isAuthenticated: PropTypes.bool,
//     error: PropTypes.object.isRequired,
//     login: PropTypes.func.isRequired,
//     clearErrors: PropTypes.func.isRequired,
//   };

//   componentDidUpdate(prevProps) {
//     const { error } = this.props;
//     if (error !== prevProps.error) {
//       // Check for register error
//       if (error.id === 'LOGIN_FAIL') {
//         this.setState({ msg: error.msg.msg });
//       } else {
//         this.setState({ msg: null });
//       }
//     }
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = this.state;

//     const user = {
//       email,
//       password,
//     };

//     // Attempt to login
//     this.props.login(user);
//   };

//   render() {
//     return (
//       <div>
//         <Typography
//           component="h1"
//           variant="h4"
//           style={{ color: 'white', textAlign: 'center', marginTop: '2em' }}
//         >
//           <strong>M</strong>HT
//         </Typography>
//         <Container
//           component="main"
//           maxWidth="xs"
//           style={{ background: 'white' }}
//         >
//           <div
//             style={{
//               marginTop: '2em',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <CssBaseline />
//             <form
//               style={{
//                 width: '100%',
//                 marginTop: '1em',
//               }}
//             >
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 id="email"
//                 name="email"
//                 type="email"
//                 label="Email Address"
//                 onChange={this.onChange}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 id="password"
//                 name="password"
//                 type="password"
//                 label="Password"
//                 onChange={this.onChange}
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 style={{
//                   margin: '1em 0em 1em',
//                 }}
//                 onClick={this.onSubmit}
//               >
//                 Sign In
//               </Button>
//             </form>
//           </div>
//         </Container>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   error: state.error,
// });

// export default connect(mapStateToProps, { login, clearErrors })(Loginpage);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { emailSignInStart } from '../../redux/user/user.actions';
import { CircularProgress } from '@material-ui/core';

const SignIn = ({ emailSignInStart }) => {
  const [loading, setLoading] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h4"
        style={{ color: 'white', textAlign: 'center', marginTop: '2em' }}
      >
        <strong>M</strong>HT
      </Typography>
      <Container component="main" maxWidth="xs" style={{ background: 'white' }}>
        <div
          style={{
            marginTop: '2em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CssBaseline />
          <form
            style={{
              width: '100%',
              marginTop: '1em',
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
              label="email"
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              label="password"
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                margin: '1em 0em 1em',
              }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Typography>Sign In</Typography>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
