import React from "react";
import ResponsiveDiv from "../wrappers/ResponsiveDiv";
import "./experienceTile.css";
import MediaQuery from "react-responsive";

class ExperienceTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      show: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      /* first match is mobile, otherwise not mobile */
      <MediaQuery maxWidth="768px">
        {(matches) =>
          matches ? (
            <div>
              {this.state.show ? (
                <ResponsiveDiv className={"description"}>
                  {this.props.description}
                </ResponsiveDiv>
              ) : (
                <ResponsiveDiv
                  className={
                    "container" + (this.state.active ? "" : " inactive")
                  }
                >
                  <img
                    alt={this.props.alt}
                    src={this.props.src}
                    aria-label={this.props.aria}
                    className={"tile mobile"}
                  />
                  <ResponsiveDiv className={"label"}>
                    {this.props.label}
                  </ResponsiveDiv>
                </ResponsiveDiv>
              )}
              <div
                className="clickToShow mobile"
                onClick={() =>
                  this.setState({
                    show: !this.state.show,
                    active: !this.state.active,
                  })
                }
              >
                {this.state.show
                  ? "Click to show position"
                  : "Click to show description"}
              </div>
            </div>
          ) : (
            <>
              <ResponsiveDiv
                className={"container" + (this.state.active ? "" : " inactive")}
              >
                <img
                  alt={this.props.alt}
                  src={this.props.src}
                  aria-label={this.props.aria}
                  className={"tile"}
                />
                <ResponsiveDiv className={"label"}>
                  {this.props.label}
                </ResponsiveDiv>
                <div className="clickToShow" onClick={this.toggleShow}>
                  {!this.state.show && "Click to show description"}
                  {this.state.show && (
                    <ResponsiveDiv className={"description"}>
                      {this.props.description}
                    </ResponsiveDiv>
                  )}
                </div>
              </ResponsiveDiv>
            </>
          )
        }
      </MediaQuery>
    );
  }
}

export default ExperienceTile;
