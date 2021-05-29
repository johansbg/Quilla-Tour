import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

//Components
import SectionOneComponent from "../components/home/SectionOneComponent";
import SectionTwoOneComponent from "../components/home/SectionTwoOneComponent";
import SectionTwoTwoComponent from "../components/home/SectionTwoTwoComponent";
import SectionTwoThreeComponent from "../components/home/SectionTwoThreeComponent";
import SectionThreeComponent from "../components/home/SectionThreeComponent";
import NavbarComponent from "../components/home/NavbarComponent";

function Home() {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  };

  return (
    <div>
      <NavbarComponent color={""} />
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
                <SectionOneComponent fullpageApi={fullpageApi} />
              </div>
              <div className="section">
                <div className="slide section2-1">
                  <SectionTwoOneComponent />
                </div>
                <div className="slide section2-2">
                  <SectionTwoTwoComponent />
                </div>
                <div className="slide section2-3">
                  <SectionTwoThreeComponent />
                </div>
              </div>
              <div className="section section3">
                  <h3><SectionThreeComponent /></h3>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Home;
