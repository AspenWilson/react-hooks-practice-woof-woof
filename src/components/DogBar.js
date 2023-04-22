import React from 'react'

function DogBar ({doggos, onClickDog}) {

  const allDoggos = doggos.map(dog => {
    return <span key={dog.id} onClick={() => onClickDog(dog.id)}>{dog.name}</span>
  })
  return (
    <div id='dog-bar'>
      {allDoggos}
    </div>
  )
}

export default DogBar
