import React from 'react';
import './App.css';

//components
import DisplayComponents from './components/displayComponents';
import BtnComponents from './components/btnComponents';

function App() {
  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponents />
          <BtnComponents />
        </div>
      </div>
    </div>
  );
}

export default App;