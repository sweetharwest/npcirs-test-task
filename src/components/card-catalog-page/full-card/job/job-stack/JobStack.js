import React from 'react';
import './JobStack.css';

const JobStack = ({jobStack}) => {

    return (
        <div className="job-stack-container">
            {jobStack.map((skill, index) => (
                <div className="job-stack-skill" key={index}>
                    {skill}
                </div>
                ))}
        </div>
    );
};

export default JobStack;
