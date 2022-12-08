const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item ? <img src={item.image} alt="" style={{ width: '35%' }}/>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;