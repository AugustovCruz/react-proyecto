import React, { useState } from 'react';
import {ButtonChild} from "../button/Button";
import { Link } from 'react-router-dom';
import "./item.css"
// useState

function Item(props) {
    const {id, title, price, detail, imgurl} = props;
    const [isActive, setItsActive] = useState(false);
    const urlDetail = `/item/${id}`;
    
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
        <Link to={urlDetail}>
            <ButtonChild> Ver detalle</ButtonChild>
        </Link>
    </div>
    )
}

export default Item;