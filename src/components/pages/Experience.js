import React from "react";
import ResponsiveDiv from "../wrappers/ResponsiveDiv";
import ibm from "../../images/ibm.jpeg";
import cfa from "../../images/cfa.jpeg";
import ExperienceTile from "../tiles/ExperienceTile";

const Experience = () => {
  return (
    <div id="experience">
      <div className="experienceLanding">
        <ResponsiveDiv className="heading">Experience</ResponsiveDiv>
        <ResponsiveDiv className="experienceContainer">
          <ExperienceTile
            src={ibm}
            alt="IBM2"
            aria="ibm2"
            description="As a backend developer, I worked on the Space Tech team. I created an open source project called PlasticNet, which detects different types of plastic waste in the ocean using computer vision."
            label="Backend Developer Intern"
          ></ExperienceTile>
          <ExperienceTile
            src={ibm}
            alt="IBM"
            aria="ibm"
            description="I currently work as a solutions developer for IBM, with the IBM Cloud Solutions Engineering Team. I demonstrate cloud technologies to clients and build tools for them."
            label="Solution Developer"
            active
          ></ExperienceTile>
          <ExperienceTile
            src={cfa}
            alt="CFA"
            aria="cfa"
            description="At Chick-Fil-A, I improved Chick-Fil-A's forecasting system by implementing weather forecasts into the store's inventory forecast, as well as automated internal processes for store grand openings."
            label="Operator Technology Solutions Intern"
          ></ExperienceTile>
        </ResponsiveDiv>
      </div>
    </div>
  );
};

export default Experience;
