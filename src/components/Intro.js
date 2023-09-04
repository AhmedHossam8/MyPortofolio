import React from 'react';
import { useSpring, animated } from 'react-spring';

const Intro = () => {
    const handleShowProject = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const mainDivProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 900 },
    });

    const heroDivProps = useSpring({
        y: 0,
        opacity: 1,
        from: { y: -50, opacity: 0 },
        config: { delay: 200, duration: 900 },
    });

    const aboutDivProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { delay: 400, duration: 900 },
    });

    return (
        <animated.div
            className="fluid-container"
            style={mainDivProps}
        >
            <animated.div
                className='hero res-hero'
                style={heroDivProps}
            >
                <h1 style={{ color: 'white' }}>
                    I'm <span style={{ color: 'aquamarine' }}>Ahmed Emara</span>.
                    Undergraduate Computer Science student @AAST and Former intern @ITWorx Cairo Egypt.
                </h1>
                <div className="img-container">
                    <img src="./myPhoto.png" alt="Ahmed Emara" />
                </div>
            </animated.div>
            <animated.div
                className='myAbout'
                style={aboutDivProps}
            >
                <button className="linkButton" onClick={() => handleShowProject()}>
                    View my projects
                </button>
                <a href='/#about' className='myAboutLink'>
                    More about me
                </a>
            </animated.div>
        </animated.div>
    );
};

export default Intro;
