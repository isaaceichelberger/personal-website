import React from "react";
import IntroTile from "../tiles/IntroTile";
import { SocialIcon } from "react-social-icons";
import isaac from "../../images/isaac.jpg";

const Home = () => {
  return (
    <div id="home" className="introContainer">
      <div className="intro">
        <div className="introPhrase">
          <div>
            <IntroTile phrase={"Hello, "}></IntroTile>
            <IntroTile phrase={"I'm Isaac"}></IntroTile>
            <IntroTile phrase={"Eichelberger"}></IntroTile>
          </div>
        </div>
        <div className="photoAndIcons">
          <div className="photoBox">
            <img
              src={isaac}
              alt="Isaac Eichelberger"
              aria-label="Isaac Eichelberger"
            ></img>
          </div>
          <SocialIcon
            bgColor="#2D2D40"
            fgColor="#C6C6FE"
            url="https://www.linkedin.com/in/isaac-eichelberger/"
          ></SocialIcon>
          <SocialIcon
            bgColor="#2D2D40"
            fgColor="#C6C6FE"
            url="https://www.twitter.com/isaaceich"
          ></SocialIcon>
          <SocialIcon
            bgColor="#2D2D40"
            fgColor="#C6C6FE"
            url="https://www.instagram.com/isaaceichelberger"
          ></SocialIcon>
          <SocialIcon
            bgColor="#2D2D40"
            fgColor="#C6C6FE"
            url="https://github.com/isaaceichelberger"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
