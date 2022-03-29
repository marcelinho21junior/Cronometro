import React, {useState} from 'react';
import './App.css';

//components
import DisplayComponents from './components/displayComponents';
import BtnComponents from './components/btnComponents';

function App() {

  const[time,setTime] = useState({ms:0 , s:0, m:0, h:0})

  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponents time={time}/>
          <BtnComponents />
        </div>
      </div>
    </div>
  );
}

export default App;