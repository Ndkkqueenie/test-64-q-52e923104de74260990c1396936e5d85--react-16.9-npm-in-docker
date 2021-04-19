import React, { Component } from 'react';
import './App.css';
import ListLeadComponent from './components/ListLeadComponent';
import { Container } from './Container';

const triggerText = 'Add Lead';
const onSubmit = (event) => {
  event.preventDefault(event);
  window.location.reload(false);
};

class App extends Component {
  render () {
    return (
      <div className="container">
      <div class="nav-bar">
        <h2 className="text-center">Leads Analytics Platform</h2>
        <br></br>
      </div>
        <div>
          <Container triggerText={triggerText} onSubmit={onSubmit} />
          <br></br>
        </div>
        <br></br>
        <div>
          <br></br>
          <ListLeadComponent/>
        </div>
      </div> 
    );
  }
}

export default App;
