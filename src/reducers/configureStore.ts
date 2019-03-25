import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export default function configureStore() {
  return Redux.createStore(rootReducer, ReduxDevTools.composeWithDevTools());
}
