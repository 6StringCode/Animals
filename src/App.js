import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([]);
  
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map((animal, idx)=> {
    return <AnimalShow type={animal} key={idx} />
  });

  return (
    <div className="app">
      {/* <button onClick={ () => console.log('button was clicked')} > */}
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}




//Replicate with Class Component
// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count: 0
//     }
//   }

//   handleClick() {
//     this.setState((prevState, props) => ({
//       count: prevState + 1
//     }))
//     console.log(this.state.count, props)
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.handleClick()}>Add Animal</button>  
//         <div>
//           Number of Animals: {this.state.count}
//         </div>
//       </div>
//     )
//   }
// }

export default App;