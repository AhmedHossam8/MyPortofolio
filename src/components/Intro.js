import React from "react";
import { motion } from "framer-motion";

const Intro = () => {

    const handleShowProject = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <motion.div // Wrap your main div with motion.div
            className="fluid-container"
            initial={{ opacity: 0 }} // Initial animation state
            animate={{ opacity: 1 }} // Animation state after component is mounted
            transition={{ duration: 0.9 }} // Animation duration
        >
            <motion.div // Wrap your hero div with motion.div for animations
                className='hero'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.9 }}
            >
                <h1 style={{ color: "white" }}>
                    I'm <span style={{ color: "aquamarine" }}>Ahmed Emara</span>.
                    Undergraduate Computer Science student @AAST and Intern @ITWorx Cairo Egypt.
                </h1>
                <div className="img-container">
                    <img src="./myPhoto.png" alt="Ahmed Emara"></img>
                </div>
            </motion.div>
            <motion.div // Wrap your myAbout div with motion.div for animations
                className='myAbout'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9 }}
            >
                <button className="linkButton" onClick={() => handleShowProject()}>View my projects</button>
                <a href='/#about' className='myAboutLink'>More about me</a>
            </motion.div>
        </motion.div>
    );
}

export default Intro;