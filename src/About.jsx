import React from "react";
import Common from "./Common";
import web from "../src/images/img3.svg"
const About = () => {
    return(
        <>
            <Common name="Welcome to About page" imgsrc={web} description="Welcome to About page" visit="/contact" btname="Contact now"/>
        </>
    );
};
export default About;