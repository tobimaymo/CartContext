import BTSList from './BTSList';
import { useContext } from 'react';
import '../../components/ItemList/ItemList.css'
import { ItemsContext } from '../../ItemsContext';


function BTSListContainer() {

    const [items, setItems] = useContext(ItemsContext)
    let bts=items.filter(function(value) {
        return value.autor == 'BTS';
    })
    
 return (
    <>
    <div div className="albumBTS py-5 bg-dark" id="divMain">
        <div div className="container">
        <img src={process.env.PUBLIC_URL + "/img/BTSlogo.png"} width="500px" height="300px" className='tituloBTS'/>
            <div div id="contenedor-productos">
                    <BTSList productos={bts} />
            </div>
        </div>
    </div>
    </>
 );
}

export default BTSListContainer