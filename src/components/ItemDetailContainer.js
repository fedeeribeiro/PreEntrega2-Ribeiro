import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail.js";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        customFetch(2000, products[8])
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;