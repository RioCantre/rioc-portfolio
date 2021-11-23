import React from "react";
import './Button.css'

function Button() {
    return (
        <div>
            <a
                className='btn btn-one'
                href='https://github.com/RioCantre/rioc-portfolio/blob/main/README.md'
                target='_blank'
                rel='noopener noreferrer'
                title='Projects'>
                View Projects
            </a>
        </div>
    );
}

export default Button;