import React, { useState } from 'react'
import {ButtonChild} from "../button/Button"
import "./item.css"
// useState

function Item(props) {
    const {title, price, detail, imgurl} = props;
    
    const [isActive, setItsActive] = useState(false);

    const handleClick = () => {
        console.log("click btn")
        setItsActive (!isActive) 
    }

    let classToggleBtn; 
    if ( isActive)
        classToggleBtn = "item-card_favicon favorite"
    else 
        classToggleBtn ="item-card_favicon"

    return (
    <div className='item-card'>
        <button className={classToggleBtn} onClick={handleClick} > ♥ </button>
        <div>
            <img width="180px" src={imgurl}  alt="imagen" />
        </div>
        <h3> {title} </h3>
        <h4> $ {price} </h4>
        <p>{detail}</p>
        <ButtonChild> Ver detalle</ButtonChild>
    </div>
    )
}

export default Item;