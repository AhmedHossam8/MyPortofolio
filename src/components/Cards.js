import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import data from '../data/projects.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Cards = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data['Projects']);
    }, []);


    return (
        <div className="Card-Container">
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                className="custom-carousel"
            >
                {projects.map((project) => (
                    <div key={project.id} className="carousel-slide">
                        <div className="carousel-content">
                            <div className="carousel-inner">
                                <h3 className="carousel-title">
                                    {project.title}
                                </h3>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="carousel-image"
                                />
                                <p className="carousel-body" style={{marginTop: "10px"}}>{project.body}</p>
                                <a
                                    href={project.link}
                                    className="carousel-button"
                                    style={{ textDecoration: "none" }}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Cards;

const rootElement = document.getElementById('root');
ReactDOM.render(<Cards />, rootElement);
