import React from 'react';
import { useInView } from 'react-intersection-observer';
import Abouttext from './Abouttext';
import AboutSecText from './AboutSecText';
import { animated, useSpring } from 'react-spring';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const mainDivProps = useSpring({
        opacity: inView ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 1500 },
    });

    const panelProps = useSpring({
        y: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
        from: { y: -50, opacity: 0 },
        config: { delay: 200, duration: 1500 },
    });

    const underPanelProps = useSpring({
        opacity: inView ? 1 : 0,
        from: { opacity: 0 },
        config: { delay: 400, duration: 1500 },
    });

    return (
        <animated.div
            className="about-container"
            style={mainDivProps}
            ref={ref}
        >
            <h2 style={{ color: '#FFFFFF' }}>About Me</h2>
            <animated.div
                className="about-panel"
                style={panelProps}
            >
                <div className="about-text">
                    <Abouttext />
                </div>
                <div className="about-img">
                    <img src="/about.jpg" alt="myAbout" />
                </div>
            </animated.div>
            <animated.div
                className="under_panel"
                style={underPanelProps}
            >
                <AboutSecText />
            </animated.div>
        </animated.div>
    );
};

export default About;
