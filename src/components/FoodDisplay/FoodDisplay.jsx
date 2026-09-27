import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'


const FoodDisplay = ({category}) => {
    const{food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Os pratos mais pedidos perto de você</h2>
      <div className="food-display-list">
        {food_list.map((item, index)=>{
            return
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
