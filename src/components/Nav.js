import React from "react";

const Nav = () => {
    return (<nav id="nav">
    <ul>
        <li><a href="#about" className="active">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#second">Second Section</a></li> */}
        <li><a href="#cta">Contact</a></li>
        <li><a href="Sujatha_Pushparaj_Resume.pdf" target="_blank">Resume</a></li>
    </ul>
</nav>)
}

export default Nav;