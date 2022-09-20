import { Link } from "react-router-dom";

function ItemCard( {data} ) {
    return (
    <>
        <div className="col">
          <div className="card sombreadogeneral navcolor">
            <figure className="figureclass">
              <img src={process.env.PUBLIC_URL + [data.img]} alt={data.alt} className="bd-placeholder-img card-img-top" width="100%" height="100%"/>
              <div className="capa">
                <div key={data.album_id}>
                    <Link to={`/CartContext/detail/${data.id}`} className="linkalbum">
                        <div>
                            <p className="tituloalbum">{data.album}</p>
                            <small className="precioalbum">{data.precio}</small>
                        </div>
                    </Link>
                </div>
              </div>
            </figure>
          </div>
        </div>
    </>
    );
  };

  
  export default ItemCard;

  