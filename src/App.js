import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Team from './component/Team';
import Content from './component/Content';
import OneDrive from './component/OneDrive';
import ForWork from './component/ForWork';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Team />
      <Content />
      <OneDrive />
      <ForWork />
      <Footer />
    </>
  );
}

export default App;
