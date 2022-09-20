import React from 'react'
import ItemCount from './ItemCount'

const ItemCountContainer = ({greeting}) => {
  const onAdd = (cantidad)=>{
    console.log(`se compro ${cantidad}`)
  }
    return (
      <div>
        <h2>{greeting}</h2>
        <ItemCount stock={10} initial = {1} onAdd={onAdd}/>
      </div>
  )
}

export default ItemCountContainer