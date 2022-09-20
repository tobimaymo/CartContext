import OtrosList from './OtrosList';
import { useContext } from 'react';
import '../../components/ItemList/ItemList.css'
import { ItemsContext } from '../../ItemsContext';


function OtrosListContainer() {

    const [items, setItems] = useContext(ItemsContext)
    let otros1=items.filter(function(value) {
        return value.autor != 'Taylor Swift' ;
    })
    let otros2=otros1.filter(function(value) {
        return value.autor != 'BTS' ;
    })
    
 return (
    <>
    <div div className="albumBTS py-5 bg-dark" id="divMain">
        <div div className="container">
            <div div id="contenedor-productos">
                    <OtrosList productos={otros2} />
            </div>
        </div>
    </div>
    </>
 );
}

export default OtrosListContainer