import React from 'react';
import './ShowAllProject.css';

const ShowAllProject = (props) => {
    const { image, details,link } = props.project;
    return (
        <div className='Project-card ali_met' data-aos="flip-left">
            <div className='p-img'><img src={image} alt="" /></div>
            <div className='text-sec'>
                <h4>{details}</h4>
                <h6><a target={`_blank`} href={link}>See the Project <i class="fa-solid fa-arrow-right"></i> </a></h6>
            </div>
        </div>
    );
};

export default ShowAllProject;