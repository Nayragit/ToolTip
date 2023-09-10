import React, {useState} from 'react';
import Tippy from '@tippyjs/react'
import './App.css';
import 'tippy.js/dist/tippy.css'


function App() {
  console.log("Nivedita")
  const [position, setPosition] = useState("top");
  return (
    <div className="App">
      {position}
      <div className="buttons">
        <button className='top' onClick={()=> setPosition("top")}>Top</button>
        <button className='left' onClick={()=> setPosition("left")}>Left</button>
        <button className='right' onClick={()=> setPosition("right")}>Right</button>
        <button className='bottom' onClick={()=> setPosition("bottom")}>Bottom</button>
      </div>

      <div style={{ paddingBottom: '50px' }}>
      <Tippy placement= {position} content= ' Hello,I am Tooltip'>
      <button>Hover</button>
      </Tippy>
      </div>
    </div>
  );
}

export default App;
