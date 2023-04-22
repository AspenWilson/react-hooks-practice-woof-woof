import React from 'react'

function Filter({onFilterClick, onlyGoodDogs}) {


  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={onFilterClick}>
            {onlyGoodDogs ? 'Filter good dogs: ON' : 'Filter good dogs: OFF' }
            </button>
    </div>
  )
}
export default Filter
