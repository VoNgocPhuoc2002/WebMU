import React from "react";
import MainBanner from "./mainbanner";
import MainInfo from "./maininfo";
import MainIntro from "./mainintro";
import MainLatest from "./mainlatest";
 import "./styles.scss"
const Main = () => {
  return (
    <div>
      <MainBanner />
      <MainLatest />
      <MainInfo />
      <MainIntro />
    </div>
  );
};

export default Main;
