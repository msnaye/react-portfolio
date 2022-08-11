import React from 'react';
import '../../styles/Footer.css';
import{ 
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

// Links to websites
const Footer = ()=>{
    return(
    
<div>
    <ul>
        <li className='GithubCont'>
            <a className='label'>
                Github <FaGithub/>
            </a>
        </li>

        <li className='LinkedinCont'>
            <a className='label'>
                Github <FaLinkedin/>
            </a>
        </li>
    </ul>
</div>
    )
};
export default Footer;