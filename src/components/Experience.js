import React from 'react';

import css from './Experience.module.scss';

const Experience = () => {
    return (
        <section id="experience" className="main special">
        <header className="major">
            <h2>Experience</h2>
        </header>
        
        <div className={css.container}>

            <div className={`${css['timeline-block']} ${css['timeline-block-right']}`}>
            <div className={css.marker}></div>
            <div className={css['timeline-content']}>
                <h3>First Year</h3>
                <span>Some work experience</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-left']}`}>
            <div className={css.marker}></div>
            <div className={css['timeline-content']}>
                <h3>Seconed Year</h3>
                <span>Some work experience</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-right']}`}>
            <div className={css.marker}></div>
            <div className={css['timeline-content']}>
                <h3>Third Year</h3>
                <span>Some work experience</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-left']}`}>
            <div className={css.marker}></div>
            <div className={css['timeline-content']}>
                <h3>Fourth Year</h3>
                <span>Some work experience</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-right']}`}>
            <div className={css.marker}></div>
            <div className={css['timeline-content']}>
                <h3>Fifth Year</h3>
                <span>Some work experience</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            </div>
        </div>

    </section>
    )

}


export default Experience;