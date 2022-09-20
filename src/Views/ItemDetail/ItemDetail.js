import { Link } from "react-router-dom";
import ItemCountContainer from "../../components/ItemCount/ItemCountContainer";

function ItemDetail ({data}) {

  return (
    <div className={`${data.alt}`}>
      <div className="CardDetail">
        <div className="sombreadogeneral">
            <img src={process.env.PUBLIC_URL + [data.img]} alt={data.alt} className="bd-placeholder-img card-img-top"/>
        </div>
        <div className="infoAlbum copperplate">
          <small>{data.autor} presents</small>
          <p className="tituloDetail">{data.album}</p>
            <p className="descDetail">{data.descripcion}</p>
            <div className="d-flex justify-content-evenly align-items-center">
              <div>
                <ItemCountContainer/>
              </div>
              <p className="precioDetail">{data.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default ItemDetail