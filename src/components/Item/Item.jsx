import "./Item.css"

import React from "react";


function Item(props) {
    return(
        <>  
            <div class="card">
                <img src={props.img} alt={props.titulo} />
                <h3>{props.titulo}</h3>
                <h4>Precio: <span>${props.precio}</span></h4>
                <button>Agregar al Carrito</button>
            </div>
        </>
    );
}

export default Item;