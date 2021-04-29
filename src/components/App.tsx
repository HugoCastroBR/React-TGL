import React from 'react';
import { Provider } from 'react-redux';
import '../assets/css/App.css';
import Routes from './../routes/routes';
import store from './../store/index';


function App() {
  return (
    // Routes and Redux provider
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
