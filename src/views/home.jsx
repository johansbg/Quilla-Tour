import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

//Components
import SectionOneComponent from "../components/home/sectionOneComponent";
import NavbarComponent from "../components/navbarComponent";

function Home() {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  };

  return (
    <div>
      <NavbarComponent />
      <ReactFullpage
        scrollOverflow={true}
        onLeave={onLeave.bind(this)}
        afterLoad={afterLoad.bind(this)}
        autoScrolling={true}
        scrollHorizontally={false}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <SectionOneComponent />
              </div>
              <div className="section">
                <div className="slide section2-1">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide section2-2">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide section2-3">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Home;
