import React from "react";
//Components
import NavbarComponent from "../components/home/NavbarComponent";
import Forum from "../components/comunidad/Forum";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

function Comunidad() {

  return (
    <div>
        <NavbarComponent color={""} />
        <ReactFullpage
        scrollOverflow={true}
        autoScrolling={true}
        scrollHorizontally={false}
        render={() => {
        return (
            <div id="fullpage-wrapper">
                <div className="section BgGradientComunidad">
                    <Forum />
                </div>
            </div>
        );
        }}
        />
    </div>
  );
}

export default Comunidad;
