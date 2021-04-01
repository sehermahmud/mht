// // import { createStore, applyMiddleware, compose } from 'redux';
// // import thunk from 'redux-thunk';
// // import rootReducer from './reducer';

// // const initialState = {};

// // const middleware = [thunk];

// // const store = createStore(
// //     rootReducer,
// //     initialState,
// //     compose(
// //         applyMiddleware(...middleware),
// //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //     )
// // );

// // export default store;

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  /* https://github.com/evgenyrodionov/redux-logger */
  collapsed: true,
  diff: true,
});

const store = function (initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      /* logger must be the last middleware in chain to log actions */
      applyMiddleware(thunk, logger)
    )
  );
};

export default store;
