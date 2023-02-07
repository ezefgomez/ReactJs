import React from "react";
import "./styles.css"

function Container({greeting}) {
    return (
        <div className="container-items">
            {greeting}
        </div>
    );
}

export default Container;