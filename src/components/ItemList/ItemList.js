import ItemCard from "../ItemCard/ItemCard"

function ItemList({productos}) {
    
    return (
        productos.map((data) => 
        <ItemCard key={data.album_id} data={data}/>
        )
    )
}

export default ItemList