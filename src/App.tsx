import React, { useState } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import RoutingComponent from './components/RoutingComponent';

const App: React.FC = () => {

  return (
    <Router>
      <RoutingComponent />
    </Router>
  );
};

export default App;
