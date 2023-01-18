import React, { useState } from 'react'
import {ButtonChild} from "../button/Button"

function ItemListContainer(props) {
    const {title, price, detail, img} = props;
    
    const [isActive, setItsActive] = useState(false);

    const handleClick = () => {
        console.log("click btn")
        setItsActive (!isActive) 
    }

    let classToggleBtn; 
    if ( isActive)
        classToggleBtn = "item-card_faviconfavorite"
    else 
        classToggleBtn="item-card_favicon"

    return (
    <div>
        <button className={classToggleBtn} onClick={handleClick} > ♥ </button>
        <div>
            <img width="180px" src={img}  alt="imagen" />
        </div>
        <h3> {title} </h3>
        <h4> $ {price} </h4>
        <p>{detail}</p>
        <ButtonChild> Ver detalle</ButtonChild>
    </div>
    )
}


export default ItemListContainer