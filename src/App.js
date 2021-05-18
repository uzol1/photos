
import React from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import Profiles from './Profiles/Profiles';

function App() {
  return (
    <React.Fragment>
      <Container className="main">
        <Profiles></Profiles>
      </Container>
    </React.Fragment>
  );
}

export default App;
