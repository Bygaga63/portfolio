import React from 'react';
import {ANIMATION_TYPE} from '../entities/animation';

const ArmRight = ({ animation, armPath }) => (
    <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
        { animation === ANIMATION_TYPE.typing && <path className="arm-typing-right" d={armPath} /> }
        { animation === ANIMATION_TYPE.stressed && <path className="arm-typing-right" d={armPath} /> }
        { animation === ANIMATION_TYPE.waiting && <path d="M207.26,171.26s45.19,85-75.76,72.24" /> }
        { animation === ANIMATION_TYPE.thinking && <path className="arm-thinking-right" d="M207.48,172.34s-76,114.16-93-9.84" /> }
        { animation === ANIMATION_TYPE.passive && <path d="M207.93,172c.57-.48,11.3,86.45-23.43,112.52" /> }
        { animation === ANIMATION_TYPE.sleeping && <path d="M207.93,172c.57-.48,11.3,86.45-23.43,112.52" /> }
    </svg>
);

export default ArmRight;