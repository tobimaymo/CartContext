import ItemCard from "../../components/ItemCard/ItemCard"

function OtrosList({productos}) {
    
    return (
        productos.map((data) => 
        <ItemCard key={data.album_id} data={data}/>
        )
    )
}

export default OtrosList