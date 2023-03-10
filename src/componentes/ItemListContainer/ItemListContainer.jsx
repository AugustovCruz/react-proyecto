import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {categoryid} = useParams();

    useEffect( () => {
        if (categoryid){
            getItemsByCategory(categoryid).then((respuesta) => {
                console.log(respuesta);
                setProducts(respuesta);
            });
        }
        else{
            getItems().then((respuesta) => {
                console.log(respuesta);
                setProducts(respuesta);
            });
        }
    }, [categoryid])
    
    return (
        <>
            <ItemList products= {products} />
        </>
    );
}

export default ItemListContainer;