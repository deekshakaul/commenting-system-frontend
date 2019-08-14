import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import LoginContainer from'./Containers/LoginContainer.js';
import ShowCommentsContainer from'./Containers/ChatRoomContainer.js';
import SignupContainer from'./Containers/SignupContainer.js';
import BaseComponent from'./Components/BaseComponent.js';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './Store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <BaseComponent>
          <Route exact path='/' component={LoginContainer}/>
          <Route path='/chat-room' component={ShowCommentsContainer}/>
          <Route path='/signup' component={SignupContainer}/>
      </BaseComponent>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
