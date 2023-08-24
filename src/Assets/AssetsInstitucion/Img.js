import React from 'react'
import foto from "./foto.png"

const Img = () => {
    const imgGris = <img src={require("../../Assets/AssetsInstitucion/foto.png")} alt="foto"/>
    return (
        <div>{imgGris}</div>
    )
}

export default Img