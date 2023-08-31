import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Abouttext from "./Abouttext";
import AboutSecText from "./AboutSecText";

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // This will trigger the animation only once
        threshold: 0.2, // Change this threshold as needed
    });

    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate when in view
            transition={{ duration: 1.5 }}
            ref={ref} // Attach the ref to the main div
        >
            <h2 style={{ color: "#FFFFFF" }}>About Me</h2>
            <motion.div
                className="about-panel"
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }} // Animate when in view
                transition={{ delay: 0.2, duration: 1.5 }}
            >
                <div className="about-text">
                    <Abouttext />
                </div>
                <div className="about-img">
                    <img src="/about.jpg" alt="myAbout" />
                </div>
            </motion.div>
            <motion.div
                className="under_panel"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate when in view
                transition={{ delay: 0.4, duration: 1.5 }}
            >
                <AboutSecText />
            </motion.div>
        </motion.div>
    );
}

export default About;
