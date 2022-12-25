import React from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveDiv = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className={props.className + (isMobile ? " mobile" : "")}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ResponsiveDiv;
