import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import reducer from './reducers'
import './Stylesheet/index.scss';

const store = createStore(reducer)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>);
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);



