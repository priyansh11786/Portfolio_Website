import React from 'react';
import './Project.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
            </div>
        </div>
    );
};

export default ProjectCard;