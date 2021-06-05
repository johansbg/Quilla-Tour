import React from "react";
import Noticia from './noticia'

class Noticias extends React.Component {
    render(){
        return (
            <div className="row">
                {this.props.noticias.map(noticia => 
                    <Noticia
                        key = {noticia.url}
                        noticia = {noticia}
                    />
                )}
            </div>
        )
    }
}    

export default Noticias;