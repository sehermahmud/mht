// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Provider } from 'react-redux';
// import store from './store';
// // import { loadUser } from './actions/authActions';
// import './App.css';
// import Apphelper from './helper/apphelper';

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store()}>
//         <Apphelper />
//       </Provider>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Apphelper from './helper/apphelper';

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <div className="App">
          <Apphelper />
        </div>
      </Provider>
    );
  }
}

export default App;
