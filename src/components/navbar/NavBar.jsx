import "./NavBar.css"

import React from "react";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <>
            <div class="header">
                <h1> <span class="title">P</span>hone <span class="title">S</span>hop</h1>
                <div class="nav">
                    <input type="text" class="navbar" />
                    <CartWidget cart={2}/>
                </div>
            </div>
        </>
    );
}

export default NavBar;