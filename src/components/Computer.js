import React from 'react';

const Computer = ({ animation }) => {
    const computerClass = `computer -${animation}`;
    return (
        <svg className={computerClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 55">
            <polygon className="computer__keyboard" points="29,42.5 81,51.5 45,55.5 30,49.5 "/>
            <path className="computer__keyboard" d="M80.3,55.5H45.7c-0.9,0-1.7-0.7-1.7-1.7v-0.7c0-0.9,0.7-1.7,1.7-1.7h34.7c0.9,0,1.7,0.7,1.7,1.7v0.7
        C82,54.8,81.2,55.5,80.3,55.5z"/>
            <path className="computer__screen" d="M38.9,55.4l-27.3-6.3c-1.6-0.4-2.8-1.6-3.1-3.2l-8.4-41C-0.5,2.2,1.7-0.2,4.5,0l27.4,2.5
        c1.8,0.2,3.3,1.5,3.7,3.3l8.3,44.8C44.4,53.6,41.8,56.1,38.9,55.4z"/>
        </svg>
    );
};

export default Computer;