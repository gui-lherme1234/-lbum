import React from "react";

const Foto = ({dados}) => {
    return (
        <div className = "foto">
            <img scr={dados.urls.small} alt={dados.alt_description}/>
        </div>
    )
}

export default Foto;