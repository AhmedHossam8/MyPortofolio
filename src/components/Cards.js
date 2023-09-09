import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import data from '../data/projects.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Cards = () => {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setProjects(data['Projects']);
    }, []);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="Card-Container">
            <div className='external-arrow-div left-arrow' style={{ marginRight: "1rem" }}>
                <img src='./leftarrow.ico' alt='left arrow' onClick={handlePrevClick} className='external-arrow'></img>
            </div>

            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                className="custom-carousel"
                selectedItem={currentIndex}
                onChange={(index) => setCurrentIndex(index)}
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
                                <p className="carousel-body" style={{ marginTop: "10px" }}>{project.body}</p>
                                <a
                                    href={project.link}
                                    className="carousel-button"
                                    style={{ textDecoration: "none" }}
                                    target="_blank"
                                    rel="noopener noreferrer" // For security reasons, add this attribute
                                >
                                    View Project
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className='external-arrow-div  right-arrow' style={{ marginLeft: "1rem" }}>
                <img src='./rightarrow.ico' alt='right arrow' onClick={handleNextClick} className='external-arrow'></img>
            </div>
        </div>
    );
};

export default Cards;

const rootElement = document.getElementById('root');
ReactDOM.render(<Cards />, rootElement);
