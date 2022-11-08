import React from "react";
import { Button } from "../components/UI/Button";
import "../Modules/views/Home.scss";
import { HomeCard } from "../components/home/HomeCard";
import {Footer} from '../components/Layout/Footer'

export const Home = () => {
  return (
    <>
      <div className="hero-container">
        {/* <video src='/videos/video-1.mp4' autoPlay muted loop/> */}
        <video src="/videos/football.mp4" autoPlay muted loop />
        <h1>Swe-Uyghur .FC</h1>
        <p>What Are You Waiting For?</p>
        <div className="hero-btns">
          <Button
          to={"/register"}
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            to={"/album"}
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            VIDEOS <i className="far fa-play-circle"></i>
          </Button>
        </div>
      </div>
      <HomeCard/>
      <Footer/>
    </>
  );
};
