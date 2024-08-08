import { useState } from 'react';
import './App.css';
import Router from './router/Router';

const App = () => {
  const [allRoutes, setAllRoutes] = useState([]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
