import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
//Components
import NavbarComponent from "../components/home/NavbarComponent";
import PerfilComponent from "../components/Perfil/PerfilComponent";


function Perfil() {

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
                    <div className="section BgGradientPerfil">
                        <PerfilComponent />
                    </div>
                </div>
            );
            }}
            />
        </div>
    );
}

export default Perfil;
