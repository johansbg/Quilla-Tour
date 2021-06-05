import React from "react";
import Anuncio from './Anuncio'
import { MDBContainer } from 'mdbreact';

class Anuncios extends React.Component {
    render(){
        return (
            <div className="row overflow-auto">
                {this.props.anuncios.map(anuncio => 
                    <Anuncio
                        key = {anuncio.url}
                        anuncio = {anuncio}
                    />
                )}
            </div>
        )
    }
}    

export default Anuncios;