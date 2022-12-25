import React from "react";
import ResponsiveDiv from "../wrappers/ResponsiveDiv";
import ibm from "../../images/ibm.jpeg";
import cfa from "../../images/cfa.jpeg";
import ExperienceTile from "../tiles/ExperienceTile";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const isLandscapeMobile = useMediaQuery({
    query: "(max-width: 768px) and (orientation: landscape)",
  });

  return (
    <div id="experience">
      <div className="experienceLanding">
        <ResponsiveDiv className="heading">Experience</ResponsiveDiv>
        <ResponsiveDiv className="experienceContainer">
          {isLandscapeMobile ? (
            <>
              <div className="displayFlex">
                <ExperienceTile
                  src={ibm}
                  alt="IBM2"
                  aria="ibm2"
                  description="As a backend developer, I worked on the Space Tech team. I created an open source project called PlasticNet, which detects different types of plastic waste in the ocean using computer vision."
                  label="Backend Developer Intern"
                  active
                ></ExperienceTile>
                <ExperienceTile
                  src={ibm}
                  alt="IBM"
                  aria="ibm"
                  description="I currently work as a solutions developer for IBM, with the IBM Cloud Solutions Engineering Team. I demonstrate cloud technologies to clients and build tools for them."
                  label="Solutions Developer"
                  active
                ></ExperienceTile>
              </div>
              <ExperienceTile
                src={cfa}
                alt="CFA"
                aria="cfa"
                description="At Chick-Fil-A, I improved Chick-Fil-A's forecasting system by implementing weather forecasts into the store's inventory forecast, as well as automated internal processes for store grand openings."
                label="Operator Technology Solutions Intern"
                active
              ></ExperienceTile>
            </>
          ) : (
            <>
              <ExperienceTile
                src={ibm}
                alt="IBM2"
                aria="ibm2"
                description="As a backend developer, I worked on the Space Tech team. I created an open source project called PlasticNet, which detects different types of plastic waste in the ocean using computer vision."
                label="Backend Developer Intern"
                active
              ></ExperienceTile>
              <ExperienceTile
                src={ibm}
                alt="IBM"
                aria="ibm"
                description="I currently work as a solutions developer for IBM, with the IBM Cloud Solutions Engineering Team. I demonstrate cloud technologies to clients and build tools for them."
                label="Solutions Developer"
                active
              ></ExperienceTile>
              <ExperienceTile
                src={cfa}
                alt="CFA"
                aria="cfa"
                description="At Chick-Fil-A, I improved Chick-Fil-A's forecasting system by implementing weather forecasts into the store's inventory forecast, as well as automated internal processes for store grand openings."
                label="Operator Technology Solutions Intern"
                active
              ></ExperienceTile>
            </>
          )}
        </ResponsiveDiv>
      </div>
    </div>
  );
};

export default Experience;
