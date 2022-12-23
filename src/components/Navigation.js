import React from "react";
import "./navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.getBackground = this.getBackground.bind(this);
  }

  getBackground() {
    return " homeBg";
  }

  render() {
    return (
      <div className={"navigationContainer" + this.getBackground()}>
        <a href="#" className="navLink">
          HOME
        </a>
        <a href="#education" className="navLink">
          EDUCATION
        </a>
        <a href="#experience" className="navLink">
          EXPERIENCE
        </a>
        <a href="#about" className="navLink">
          ABOUT
        </a>
      </div>
    );
  }
}

export default Navigation;
