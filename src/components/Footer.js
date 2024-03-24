import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
			<section>
				<dl className="alt">
					<dt>Phone</dt>
					<dd>(928) 671-8544</dd>
					<dt>Email</dt>
					<dd><a href="mailto:pushparajsujatha@gmail.com">pushparajsujatha@gmail.com</a></dd>
				</dl>
				<ul className="icons">
					<li><a href="https://github.com/sujatha97714" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
					<li><a href="https://www.linkedin.com/in/sujatha-pushparaj-93931712a/" className="icon brands fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
					<li><a href="Sujatha_Pushparaj_Resume.pdf" className="icon solid fa-address-card alt"><span className="label">Resume</span></a></li>
				</ul>
			</section>
		</footer>
    );
}

export default Footer;