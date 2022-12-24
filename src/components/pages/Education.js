import React from "react";
import tu from "../../images/tu.png";
import ResponsiveDiv from "../wrappers/ResponsiveDiv";
import { useMediaQuery } from "react-responsive";

const Education = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div id="education">
      <ResponsiveDiv className="educationLanding">
        <ResponsiveDiv className="heading">Education</ResponsiveDiv>
        <ResponsiveDiv className="educationContainer">
          <ResponsiveDiv className="educationImageLabel">
            <img
              alt="University of Tulsa"
              aria-label="University of Tulsa"
              src={tu}
              className={"circle" + (isMobile ? " mobile" : "")}
            ></img>
            <ResponsiveDiv className="educationCaption">
              The University of Tulsa
            </ResponsiveDiv>
          </ResponsiveDiv>
          <ResponsiveDiv className="educationText">
            I graduated from the University of Tulsa in 2022, where I gained a
            degree in Electrical & Computer Engineering and minors in Computer
            Science and Spanish.
          </ResponsiveDiv>
        </ResponsiveDiv>
      </ResponsiveDiv>
    </div>
  );
};

export default Education;
