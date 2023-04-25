import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRive } from "@rive-app/react-canvas";

function App() {
  const { RiveComponent } = useRive({
    src: "new_file.riv",
    autoplay:true,
    
  })

  return (
    <div className="App">
      <div style={{width:"500px", height:"500px"}}>
        <RiveComponent />
      </div>
    </div>
  );
}

export default App;
