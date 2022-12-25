import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scrollArrow.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    showScroll && (
      <div className="scrollTopContainer" onClick={scrollTop}>
        {"Back to Top"}
        <FaArrowCircleUp
          className="scrollTop"
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
      </div>
    )
  );
};

export default ScrollArrow;
