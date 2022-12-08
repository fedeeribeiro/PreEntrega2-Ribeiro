const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item.image
            ? <img src={item.image} alt=""/>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;