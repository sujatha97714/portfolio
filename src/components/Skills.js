import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="main special">
			<header className="major">
				<h2>Skills</h2>
			</header>
			<ul className="features">
				<li>
					<span className="icon solid major style1 fa-code"></span>
					<h3>Frontend</h3>
					<p>HTML5, CSS, SASS, Javascript, ES6, React, Typescript, Redux, Plotly, D3.js, Bootstrap, Styled Componenets</p>
				</li>
				<li>
					<span className="icon solid major style3 fa-server"></span>
					<h3>Backend</h3>
					<p>Node.js, Express.js, C, C#, Python, Java, PostgreSQL, SQLite, MongoDB</p>
				</li>
				<li>
					<span className="icon solid major style5 solid fa-cube"></span>
					<h3>Tools & Techs</h3>
					<p>GraphQL, React Native, Terraform, GIT, AWS - S3, Dynamo db, RDS, IAM, API Gateway, App Sync, Lambdas. </p>
				</li>
			</ul>
		</section>
    );
}

export default Skills;