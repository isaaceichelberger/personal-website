import React from "react";
import tu from "../../images/tu.png";

const Education = () => {
  return (
    <div id="education">
      <div className="educationLanding">
        <div className="heading">Education</div>
        <div className="columns">
          <div className="educationImageLabel">
            <img
              alt="University of Tulsa"
              aria-label="University of Tulsa"
              src={tu}
              className="circle"
            ></img>
            <div className="educationCaption">The University of Tulsa</div>
          </div>
          <div className="educationText">
            I graduated from the University of Tulsa in 2022, where I gained a
            degree in Electrical & Computer Engineering and minors in Computer
            Science and Spanish.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
