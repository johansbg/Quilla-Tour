import React from "react";
import Anuncios from './Anuncios'
import { Scrollbars } from 'react-custom-scrollbars';
// import { Dimensions } from 'react-native'

class MostrarAnuncios extends React.Component {
    state = {
        anuncios: []
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
            .then(anuncios => {
                console.log(anuncios)
                this.setState({ anuncios: anuncios.articles })
            })
    }

    render(){
        return (
            <div>                
                <div className="position-fixed">
                    <h1 className="centrarTituloNoticias"><strong>ANUNCIOS</strong></h1>
                    <Scrollbars style={{ width: 250, height: window.innerHeight-175}}>
                        <Anuncios
                            anuncios = {this.state.anuncios}
                        />
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export default MostrarAnuncios;