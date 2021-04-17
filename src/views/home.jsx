import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

//Components
import SectionOneComponent from './../components/home/sectionOneComponent'

function home() {

    const onLeave = (origin, destination, direction) => {
        console.log("Leaving section " + origin.index);
    }
    const afterLoad = (origin, destination, direction) => {
        console.log("After load: " + destination.index);
    }

    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["orange", "purple", "green"]}
        onLeave={onLeave.bind(this)}
        afterLoad={afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <SectionOneComponent />
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div className="section">
                <h3>Section 3</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
}

export default home;
