import React from 'react';
import './App.css';
import CGU from './components/cgu'; // 匯入模組化的元件
import Multibutton from './components/multibutton'; 
function App() {
  return (
    <div className="App">

        <CGU />


        <Multibutton num={10} />

    </div>
  );
}

export default App;
