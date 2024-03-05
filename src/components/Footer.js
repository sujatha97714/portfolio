import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
			{/* <section>
				<h2>Aliquam sed mauris</h2>
				<p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
				<ul className="actions">
					<li><a href="generic.html" className="button">Learn More</a></li>
				</ul>
			</section>
		<p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p> */}
			<section>
				<h2>Contact</h2>
				<dl className="alt">
					{/* <dt>Address</dt>
					<dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd> */}
					<dt>Phone</dt>
					<dd>(928) 671-8544</dd>
					<dt>Email</dt>
					<dd><a href="mailto:pushparajsujatha@gmail.com">pushparajsujatha@gmail.com</a></dd>
				</dl>
				<ul className="icons">
					<li><a href="https://github.com/sujatha97714" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
					<li><a href="https://www.linkedin.com/in/sujatha-pushparaj-93931712a/" className="icon brands fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
				</ul>
			</section>
		</footer>
    );
}

export default Footer;