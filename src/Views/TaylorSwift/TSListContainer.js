import TSList from './TSList';
import { useContext } from 'react';
import '../../components/ItemList/ItemList.css'
import { ItemsContext } from '../../ItemsContext';


function TSListContainer() {

    const [items, setItems] = useContext(ItemsContext)
    let bts=items.filter(function(value) {
        return value.autor == 'Taylor Swift';
    })
    
 return (
    <>
    <div div className="albumBTS py-5 bg-dark" id="divMain">
        <div div className="container">
        <img src={process.env.PUBLIC_URL + "/img/tslogo.png"} width="500px" height="150px" className='tituloBTS'/>
            <div div id="contenedor-productos">
                    <TSList productos={bts} />
            </div>
        </div>
    </div>
    </>
 );
}

export default TSListContainer