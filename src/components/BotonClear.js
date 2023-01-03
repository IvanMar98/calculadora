import React from "react";
import '../css/BotonClear.css'

function BotonClear(props){
    return(
        <div className="btn-clear" onClick={props.manejarClic}>
            {props.children}
        </div>
    )
}
export default BotonClear;