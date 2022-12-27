import "./CartWidget.css";

import React from "react";

function CartWidget(props) {
    return(
        <>
            <button>
                <img class="carrito-img" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Carrito" />
                <p class="carrito-p">{props.cart}</p>
            </button>
        </>
    );
}

export default CartWidget;