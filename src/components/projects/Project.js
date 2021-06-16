import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import { projectsData } from './../../Asset/projectsData';
import ProjectCard from './ProjectCard';
import './Project.css';
import Heading from '../Heading/Heading';

const Projects = () => {
    return (
        <div className='section-container'>
            <Heading
                heading='My Projects.'
                details="These are some Side Projects that I have made, check it out!"
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Projects;