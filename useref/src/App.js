// import {  useState } from 'react';
import './App.css';
import Focusinput from './components/Focusinput';
import Renderinput from './components/Renderinput';
import Renderupdateinput from './components/Renderupdateinput';

function App() {



  return (
    <div className="App">
     <h1>Welcome to UseRef</h1>
  <Focusinput/>
  <br/>
  <br/>
  <Renderinput/>
  <br/>
  <br/>
  <Renderupdateinput/>
    </div>
  );
}

export default App;
