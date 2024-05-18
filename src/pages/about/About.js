import React from "react";
import Navbar from "../../components/Navbar";
import Mouse from "../../components/Mouse";
import SocialNetWork from "../../components/socialNetwork/SocialNetWork";
import Present from "../../components/presentation/Presentation";

const About = () => {
  return (
    <div className="elt">
      <Mouse />
      <Navbar />
     
      <div className="">
        <SocialNetWork />
        <Present />
      </div>
    </div>
  );
};

export default About;
