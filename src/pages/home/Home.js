import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Mouse from "../../components/Mouse";
import DynamicText from "../../components/dynamicText/DynamicText";
import "./style/home.scss";
import Pix from "../../assets/img/window-cleaning-7778841_640.png";
import socialLinks from "../../utils/data/links/socialLinks";
import { Avatar } from "@mui/material";
import "../../utils/data/links/socialLinks.scss";

const Home = () => {
  return (
    <div className="elt">
      <Mouse />
      <Navbar />
      <div className="home">
        <div className="home-main">
          <div className="network">
            <div className="presentation__social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  className="presentation__social-link"
                  href={link.link}
                  target="_blank"
                >
                  <Avatar
                    className="presentation__social-frame"
                    variant="square"
                  >
                    <link.icon className="presentation__social-icon" />
                  </Avatar>
                </a>
              ))}
            </div>
          </div>
          <div className="main-content">
            <img className="header-img" src={Pix} alt="" />
            <h1>D&T MULTI-SERVICES</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
