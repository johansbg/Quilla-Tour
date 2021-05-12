import React from "react";
//import { createContext } from "react";
import NavbarComponent from './../components/navbarComponent'
//Components

function prueba() {

  //var news = []
  //var prueba = [1,2,3,4,5,6]

  var url = "https://newsapi.org/v2/everything?q=tesla&from=2021-04-11&sortBy=publishedAt&apiKey=8b12caddc89f45b0b763e15f55489652"
  fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {
      //console.log(noticias)
      //news = noticias.articles
      //console.log(news)
    })

  return (
    <div>
        <NavbarComponent/>
        <br />
        <br />
        <h1>Hola Mundo</h1>
    </div>
  );
}

export default prueba;
