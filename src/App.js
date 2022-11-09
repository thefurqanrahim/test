import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Multiplyer from './Components/Multiplyer';
import Subtraction from './Components/Subtraction';
import Division from './Components/Division';

function App() {

  
  const [first, setFirst] = useState(0)


  const onAdd = () => {
    setFirst(first + 1)
  }
  const onSub = () => {
    if (first !== 0) {
      setFirst(first - 1)
    }
  }


  const numChange = (e) => {
    setFirst(e.target.value)
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100vh', flexDirection: " column" }}>
        <Multiplyer first={first} />
        <Subtraction first={first} />
        <Division first={first} />
        <Counter onAdd={onAdd} onSub={onSub} numChange={numChange} first={first} />
      </div>
    </>
  );
}

export default App;
