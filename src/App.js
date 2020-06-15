import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Team from './component/Team';
import Content from './component/Content';
import OneDrive from './component/OneDrive';


function App() {
  return (
    <>
      <Navbar />
      <Team />
      <Content />
      <OneDrive />
    </>
  );
}

export default App;
