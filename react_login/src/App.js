import React from 'react';
import './App.css';
import CGU from './components/cgu'; // 匯入模組化的元件
import Multibutton from './components/multibutton'; 
import SignInSide from './components/login'; 
function App() {
  return (
    <div className="App">

        <CGU />
        <SignInSide />



    </div>
  );
}

export default App;
