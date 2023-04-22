import React, {useState} from 'react'

function DogContainer({dog, onUpdateDog}) {

    if(!dog) return <h3>Select a pupper!</h3>


    const { id, name, image, isGoodDog } = dog

    function handleUpdateClick() {
        fetch(`http://localhost:3001/pups/${id}`, {
            method:'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog
            }),
        })
        .then(resp => resp.json())
        .then(onUpdateDog)
    }

  return (
    <div id='dog-info'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      {name === undefined ? '' :
      <button onClick={handleUpdateClick} >
        {isGoodDog ? 'Good Dog!' : 'Bad Dog!'}
        </button> }
    </div>
  )
}
export default DogContainer
