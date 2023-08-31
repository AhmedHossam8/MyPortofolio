import Intro from "./Intro";
import React from "react";
import Divider from '@mui/joy/Divider';
import Projectspage from "./Projectspage";
import VerticalTabs from "./Skills";
import Aboutpage from "./Aboutpage";


function Homepage() {
    return (
        <>
            <div className='myIntro' >
                <Intro id="Home"></Intro>
            </div>
            
            <Divider style={{ color: "#FFFFFF" }}>~ ~ ~</Divider>

            <section id="about">
                <Aboutpage />
            </section>

            <Divider style={{ color: "#FFFFFF" }}>~ ~ ~</Divider>

            <section id="projects">
                <Projectspage />
            </section>

            <Divider style={{ color: "#FFFFFF" }}>~ ~ ~</Divider>

            <section id="skills">
                <VerticalTabs />
            </section>

            <Divider style={{ color: "#FFFFFF" }}>~ ~ ~</Divider>

        </>
    )
}
export default Homepage;