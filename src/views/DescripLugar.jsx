import React from "react";

const DescripLugar = (props)  => {
    console.log(props.location.dataDetalle.props)
    console.log(props.location.dataDetalle.props.data.descripcion)
    console.log(props.location.dataDetalle.props.urlImg.default)
    return(
        <div>

        </div>
    );
}

export default DescripLugar;