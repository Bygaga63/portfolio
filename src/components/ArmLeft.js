import React from 'react';
import {ANIMATION_TYPE} from '../entities/animation';

const ArmLeft = ({ animation, armPath }) => (
    <svg className="arm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
        { animation === ANIMATION_TYPE.typing && <path className="arm-typing-left" d={armPath} /> }
        { animation === ANIMATION_TYPE.stressed && <path className="arm-typing-left" d={armPath} /> }
        { animation === ANIMATION_TYPE.waiting && <path d="M175.27,152.06s55.19,87.24-65.77,74.44" /> }
        { animation === ANIMATION_TYPE.thinking && <path d="M175.93,152.78s-10.18,82-36.43,103.72" /> }
        { animation === ANIMATION_TYPE.passive && <path d="M175.93,152.78s-10.18,82-36.43,103.72" /> }
        { animation === ANIMATION_TYPE.sleeping && <path d="M175.93,152.78s-10.18,82-36.43,103.72" /> }
    </svg>
);

export default ArmLeft;