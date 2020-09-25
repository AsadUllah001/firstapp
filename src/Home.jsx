import React from "react";

import {NavLink} from "react-router-dom";
import Common from "./Common";
import web from "./images/img2.svg";

const Home = () => {
    return(
        <>
            <Common name="Grow your Business with" description="We are the team of talented intellectual People who helps to grow your business." imgsrc={web} visit="/service" btname="Get Started"/>
        </>
    );
};
export default Home;