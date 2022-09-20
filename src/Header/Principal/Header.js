import React from 'react'
import './Header.css'

const Header = () => {
  return (
<div>
  <div className="headercontainer position-relative overflow-hidden text-center bg-dark">
    <div>
      <img src={process.env.PUBLIC_URL + "/img/midnights.gif"} alt="midnightsgif" className="midnights headerimagen"/>
      <div className="centered">
        <p>Edicion Especial Disponible hasta el 7 de Septiembre</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Header