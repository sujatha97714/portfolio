import React from 'react';
import css from './Projects.module.scss';

const projects = [
	{
		title: 'Multi-threaded OS',
		shortDesc : 'xv6 is a RISC-V based teaching operating system and has only fundamental features. This project is aimed to add advanced features such as dynamic page allocation(virtual memory), multi threading and virtualization ',
		githubLink: 'https://github.com/sujatha97714/risc-v-x86-self-threading?tab=readme-ov-file',
		techs: ['C', 'Assembly', 'Dynamic Memory allocation', 'Multi threading', 'Virtual Memory', 'Paging', 'Booting Process', 'Threads', 'Risc V', 'xv6']
	},
	{
		title: 'Custom optimized minibase DB',
		shortDesc : 'Customized minibase db by altering the underlying datastructure from tuple to maps. Implemented customized indexing to match the new record data structure and improved the performance in terms of disk read and write counts',
		githubLink: 'https://github.com/sujatha97714/bigtable_minibase',
		techs: ['Java', 'DB Implementation', 'Disk Management', 'Sorting and filtering algorithms']
	},
	{
		title: 'Android Threat Detector',
		shortDesc : 'Developed an application which takes android app as input and analyzes its codebase to determine whether the app is benign or malignant. Designed an algorithm that tracks all the permissions and dependencies recursively for analysis',
		githubLink: 'https://github.com/SoftwareSecurity-CSE-545/ProjectPart2',
		techs: ['Python', 'Machine learning', 'Java', 'Android development', 'Recursion']
	},
	{
		title: 'Image Classifier',
		shortDesc : 'A tool to perform classification on a set of images based on the information learned from the training set. Enhanced the model accuracy by incorporating image augmentation techniques to produce variations and noise in the images',
		githubLink: 'https://github.com/sujatha97714/image-classifier',
		techs: ['Python', 'OpenCV', 'Sklearn', 'Numpy', 'Machine learning', 'Feature extraction']
	},
]

const Projects = () => {
    return (
        <section id="projects" className="main special">
			<header className="major">
				<h2>Projects</h2>
			</header>
			<div className={css.projectList}>
				{
					projects.map((project, idx) => (
						<div key={idx} className={css.projectCard}>
							<h3>{project.title}</h3>
							<p>{project.shortDesc}</p>
							<p className={css.skills}>Skills Acquired: <span>{project.techs.join(', ')}</span></p>
							<button href={project.githubLink}>
								{`Github `}
								<span className='icon solid fa-external-link-alt'></span>
							</button>
						</div>
					))
				}
			</div>
		</section>
    );
}

export default Projects;