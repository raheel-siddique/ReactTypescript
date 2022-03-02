import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import PersonName from './component/PersonName';

function App() {
  const personNames= [{name:"Raheel", id:1, age:21},
  {name:"Rasim", id:2, age:20},
  {name:"Asim", id:13, age:19}
]
  return (
    <div className="App">
   <Greet name="Raheel Siddique" messageNum={10} />
   <PersonName personNames={personNames} />
    </div>
  );
}

export default App;
