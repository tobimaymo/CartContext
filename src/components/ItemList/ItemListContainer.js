import './ItemList.css'
import ItemList from './ItemList'
import { useEffect, useState, useContext } from 'react';
// import { getFetch } from '../../helpers/getFetch';
import { ItemsContext } from '../../ItemsContext';


function ItemListContainer() {

    // const [ItemData, setItemData] = useState({})
    // const [loading, setloading] = useState (true)

    // useEffect (() => {
    //     getFetch
    //     .then((respuesta) => {
    //         return respuesta
    //     })
    //     .then((resp) => setItemData(resp))
    //     .catch(err => console.log(err))
    //     .finally(() => setloading(false))
    // }, [])
    // console.log(ItemData)
    const [items, setItems] = useContext(ItemsContext)
    console.log(items.length)
    
 return (
    <>
        <div div className="album py-5 bg-dark" id="divMain">
            <div div className="container">
                <div div id="contenedor-productos">
			            <ItemList productos={items} />
                </div>
            </div>
        </div>
    </>
 );
}

export default ItemListContainer