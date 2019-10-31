import React from 'react';

const Character = ({ animation }) => {
    const characterClass = `character -${animation}`;
    return (
        <svg className={characterClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
            <circle className="character__eye -eye-r" cx="87.59" cy="134.46" r="5.12"/>
            <g id="body">
                <circle className="character__body -part-1" cx="140.71" cy="122.62" r="42.88"/>
                <circle className="character__body -part-2" cx="166.95" cy="141.82" r="42.88"/>
                <circle className="character__body -part-3" cx="191.26" cy="173.82" r="42.88"/>
                <circle className="character__body" cx="197.02" cy="335.1" r="42.88"/>
                <circle className="character__body" cx="197.02" cy="295.42" r="42.88"/>
                <circle className="character__body" cx="206.62" cy="216.06" r="42.88"/>
                <circle className="character__body" cx="205.98" cy="258.94" r="42.88"/>
            </g>
            <circle className="character__eye -eye-l-extra" cx="87.59" cy="134.46" r="5.12"/>
            <circle className="character__eye -eye-l" cx="115.11" cy="134.46" r="5.12"/>
        </svg>
    );
};

export default Character;