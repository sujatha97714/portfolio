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
                    <h3>Amazon</h3>
                    <span>SDE Co-op</span>
                    <p>During my role as a SDE Co-op at Amazon, I specialized in creating user interfaces and experiences for advanced robotic systems. I developed intuitive web interfaces, collaborated with diverse teams, and improved user interaction with robotics tech.</p>
                    <p className={css.skills}>Skills: Typescript, React, AWS, Cypress, Figma, Styled Components</p>
                </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-left']}`}>
                <div className={css.marker}></div>
                <div className={css['timeline-content']}>
                    <h3>Enterprise Technology at ASU</h3>
                    <span>Student Web Developer</span>
                    <p>As a Student Mobile Developer at ASU, I collaborated on enhancing internal webpages, integrating with backend infrastructure and data platforms, and refining UI interfaces. I also contributed to the continuous improvement of the ASU mobile app through feature additions and bug fixes, enhancing the overall user experience.</p>
                    <p className={css.skills}>Skills: React, AWS Services, SQL, GraphQL, Terraform, React Native</p>
                </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-right']}`}>
                <div className={css.marker}></div>
                <div className={css['timeline-content']}>
                    <h3>Cisco Systems</h3>
                    <span>Software Engineer</span>
                    <p>During my time as a Web Application Developer at Cisco's DNAC center, I played a pivotal role in designing, building, and optimizing web applications dedicated to network management and automation. Collaborating closely on UI/UX, ensuring stringent security measures, and seamless integration with core systems were among my key responsibilities. My contributions significantly enhanced network infrastructure and facilitated a smooth user experience.</p>
                    <p className={css.skills}>Skills: Javascript, React, Redux, Jest, GraphQL, RabbitMQ </p>
                </div>
            </div>
        
            <div className={`${css['timeline-block']} ${css['timeline-block-left']}`}>
                <div className={css.marker}></div>
                <div className={css['timeline-content']}>
                    <h3>Soliton Technologies</h3>
                    <span>Senior Project Engineer</span>
                    <p>In my role as a Full Stack Web Developer, I played an integral role in enhancing user interfaces across diverse projects. My responsibilities encompassed optimizing performance by resolving memory leaks and minimizing UI re-renders. I also boosted data storage capacity through customized SQL query improvements, managed project phases, automated installer creation, and implemented data-driven models to facilitate faster and scalable UI development.</p>
                    <p className={css.skills}>Skills: React, Redux, Node, Express Js, D3.js, SQLite, Jenkins, Python, Java, C# (WPF) </p>
                </div>
            </div>
        </div>

    </section>
    )

}


export default Experience;