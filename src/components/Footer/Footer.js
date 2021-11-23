import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div>
            <ul>
                <li>
                    <a
                        href='https://github.com/RioCantre'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Github'>
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href='mailto:riol.cantre@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='eMail'>
                        Email
                    </a>
                </li>
                <li>
                    <a
                        href='https://twitter.com/CantreRio'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Twitter'>
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
