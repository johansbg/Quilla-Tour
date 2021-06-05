import React from "react";
import Noticias from './noticias'
import Anuncios from './Anuncios'

class Informacion extends React.Component {
    state = {
        noticias: []
    }

    async componentDidMount(){
        await this.consultaNoticias()
    }

    consultaNoticias = async () => {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2021-05-13&sortBy=publishedAt&apiKey=8b12caddc89f45b0b763e15f55489652"
        
        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(noticias => {
                console.log(noticias)
                this.setState({ noticias: noticias.articles })
            })
    }

    render(){
        return (
            <div>                
                <h1 className="centrarTituloNoticias"><strong>NOTICIAS</strong></h1>                        
                <Noticias
                    noticias = {this.state.noticias}                    
                />
            </div>
        );
    }
}

export default Informacion;