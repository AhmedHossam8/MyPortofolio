import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import data from '../data/projects.json';

const Cards = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data["Projects"]);
    }, []);

    const chunkArray = (array, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunkedArray.push(array.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    const chunkedProjects = chunkArray(projects, 2);

    return (
        <div className='Card-Container'>
            {chunkedProjects.map((rowProjects, rowIndex) => (
                <div className='Card-Row' key={rowIndex}>
                    {rowProjects.map((project) => (
                        <div key={project.id} className="card">
                            <div className="card-content" >
                                <h2 className="card-title">{project.title}</h2>
                                <p className="card-body">{project.body}</p>
                                <a href={project.link} className="button">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Cards; // Export the Cards component

// Rendering code remains the same
const rootElement = document.getElementById("root");
ReactDOM.render(<Cards />, rootElement);
