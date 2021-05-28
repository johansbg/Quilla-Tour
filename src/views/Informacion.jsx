import React from "react";
import NavbarComponent from '../components/noticias/navbarComponent'
import Noticias from '../components/noticias/noticias'

class Informacion extends React.Component {
    state = {
        noticias: []
    }

    async componentDidMount(){
        await this.consultaNoticias()
    }

    consultaNoticias = async () => {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2021-04-12&sortBy=publishedAt&apiKey=8b12caddc89f45b0b763e15f55489652"
        
        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(noticias => {
                console.log(noticias)
                this.setState({ noticias: noticias.articles })
            })

        // let res = await fetch(url)
        // let data = await res.json()

        // this.setState({
        //     data
        // })

        // console.log(data);
    }

    render(){
        return (
            <div>
                <NavbarComponent/>
                <br />
                <br />
                <div className="container">
                    <Noticias
                        noticias = {this.state.noticias}                    
                    />
                </div>
            </div>
        );
    }
}

export default Informacion;