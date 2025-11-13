import React from 'react';
import { projectsData } from '../data/projects';
import Card from '../components/UI/Card';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projectsData.map((project) => (
                    <Card key={project.id} title={project.title} description={project.description} link={project.link} />
                ))}
            </div>
        </div>
    );
};

export default Projects;