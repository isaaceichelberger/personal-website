import React from "react";
import ResponsiveDiv from "../wrappers/ResponsiveDiv";
import "./experienceTile.css";
import MediaQuery from "react-responsive";

class ExperienceTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
    };
  }

  render() {
    return (
      <ResponsiveDiv
        className={"container" + (this.state.active ? "" : " inactive")}
      >
        <MediaQuery maxWidth="768px">
          {(matches) =>
            matches ? (
              <img
                alt={this.props.alt}
                src={this.props.src}
                aria-label={this.props.aria}
                className={"tile mobile"}
              />
            ) : (
              <img
                alt={this.props.alt}
                src={this.props.src}
                aria-label={this.props.aria}
                className={"tile"}
              />
            )
          }
        </MediaQuery>
        <ResponsiveDiv className={"label"}>{this.props.label}</ResponsiveDiv>
        <ResponsiveDiv className={"description"}>
          {this.props.description}
        </ResponsiveDiv>
      </ResponsiveDiv>
    );
  }
}

export default ExperienceTile;
