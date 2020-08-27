import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Main Container/Containers/Container';

function App() {
  return (
    <div>
      <Header></Header>
      <Container></Container>
    </div>
  );
}

export default App;
