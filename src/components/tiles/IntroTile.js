import React from "react";

class IntroTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: {}, // initialize to empty state
      phrase: this.props.phrase.split(""), // keep whitespace
    };

    this.getClassName = this.getClassName.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseLeaveContainer = this.onMouseLeaveContainer.bind(this);
  }

  getClassName(index) {
    const classNameMap = { 0: "", 1: "adjacentHovered", 2: "hovered" };
    return classNameMap[this.state.hovered[index]];
  }

  onMouseEnter(event) {
    const index = Number(event.target.dataset.id);
    const hoveredState = { ...this.state.hovered };
    Object.keys(hoveredState).forEach((v) => (hoveredState[v] = 0)); // clear obj
    hoveredState[index] = 2;
    if (index !== 0 && index !== this.state.phrase.length - 1) {
      hoveredState[index - 1] = 1;
      hoveredState[index + 1] = 1;
    } else if (index === 0) {
      hoveredState[index + 1] = 1;
    } else if (index === this.state.phrase.length) {
      hoveredState[index - 1] = 1;
    }
    this.setState({ hovered: hoveredState });
  }

  onMouseLeave(event) {
    const hoveredState = { ...this.state.hovered };
    const index = Number(event.target.dataset.id);
    if (index === 0 || index === this.state.phrase.length - 1) {
      Object.keys(hoveredState).forEach((v) => (hoveredState[v] = 0)); // clear obj
      this.setState({ hovered: hoveredState });
    }
  }

  onMouseLeaveContainer() {
    const hoveredState = { ...this.state.hovered };
    Object.keys(hoveredState).forEach((v) => (hoveredState[v] = 0)); // clear obj
    this.setState({ hovered: hoveredState });
  }

  render() {
    return (
      <>
        <div
          className="phraseContainer"
          onMouseLeave={this.onMouseLeaveContainer}
        >
          {this.state.phrase.map((letter, index) => {
            return (
              <div
                key={index}
                id={index}
                data-id={index} // allow get id later
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                className={
                  letter === " " ? "spaceClass" : this.getClassName(index)
                }
              >
                {letter}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default IntroTile;
