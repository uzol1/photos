
import React from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
// import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar/NavBar';
import Profiles from './Profiles/Profiles';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container className="main">
        <Profiles></Profiles>
      </Container>
    </React.Fragment>
  );
}

export default App;
