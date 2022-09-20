import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Header/NavBar/NavBar";
import Home from './Views/Home/Home'
import ItemDetailContainer from './Views/ItemDetail/ItemDetailContainer'
import BTS from './Views/BTS/BTS'
import TS from './Views/TaylorSwift/TS'
import FooterBar from "./components/Footer/FooterBar";
import { useEffect, useState } from 'react';
import { getFetch } from './helpers/getFetch';
import { AlbumsProvider } from "./ItemsContext";
import Otros from "./Views/Otros/Otros";

function App (){
  const [ItemData, setItemData] = useState({})
  // const [loading, setloading] = useState (true)

    useEffect (() => {
        getFetch
        .then((respuesta) => {
            return respuesta
        })
        .then((resp) => setItemData(resp))
        .catch(err => console.log(err))
        // .finally(() => setloading(false))
    }, [])
    console.log(ItemData)

    return (
      <AlbumsProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/CartContext/'} element={<Home ItemData={ItemData}/>} />
            <Route path={'/CartContext/detail/:id'} element={<ItemDetailContainer />} />
            <Route path={'/CartContext/BTS'} element={<BTS />} />
            <Route path={'/CartContext/Taylor-Swift'} element={<TS />} />
            <Route path={'/CartContext/Otros'} element={<Otros />} />
            <Route path={'/CartContext/cart'} />
          </Routes>
        </div>
        <FooterBar />
      </Router>
      </AlbumsProvider>
    );
}

export default App;
