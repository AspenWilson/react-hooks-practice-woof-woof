import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogContainer from "./DogContainer";
import Filter from "./Filter";

function App() {

  const [doggos, setDoggos] =useState([])
  const [clickedDogId,setClickedDogId] = useState(null)
  const [onlyGoodDogs, setOnlyGoodDogs] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
    .then(resp => resp.json())
    .then(setDoggos)
  }, [])

  function onUpdateDog (updatedDog) {
    const updatedDogs = doggos.map((dog) => 
      dog.id === updatedDog.id ? updatedDog : dog
    )
    setDoggos(updatedDogs)
  }


  function showGoodDogs () {
    setOnlyGoodDogs((onlyGoodDogs) => !onlyGoodDogs)
  }

  const clickedDog = doggos.find((dog) => dog.id === clickedDogId)
  
  const filteredDogs = onlyGoodDogs ? doggos.filter(dog => dog.isGoodDog ? true : false) : doggos



  return (
    <div className="App">

      <Filter onFilterClick={showGoodDogs} onlyGoodDogs={onlyGoodDogs}/>
      <DogBar doggos={filteredDogs} onClickDog={setClickedDogId}/>

      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogContainer dog={clickedDog} onUpdateDog={onUpdateDog}/>
      </div>
    </div>
  );
}

export default App;
