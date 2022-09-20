import React from 'react'
import Header from "../../Header/Principal/Header";
import ItemListContainer from '../../components/ItemList/ItemListContainer';

const Home = ({ItemData}) => {
  return (
    <>
    <main className='bg-dark'>
        <Header />
        <ItemListContainer ItemData={ItemData}/>
    </main>
    </>
  )
}

export default Home