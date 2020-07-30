import React from 'react';
import {AiOutlinePhone} from "react-icons/all";
import {AiOutlineMail} from "react-icons/all";
import {AiOutlineLinkedin} from "react-icons/all";
import {AiOutlineGithub} from "react-icons/all";

function Information () {
    return (
        <div className="page-container">
            <h1>Information</h1>
            <div className="information-list">
                <ul>
                    <li>
                        <AiOutlinePhone style={{marginRight: '10px'}}/>
                        Phone: (Look at pdf resume)
                    </li>
                    <li>
                        <AiOutlineMail style={{marginRight: '10px'}}/>
                        Email: (Look at pdf resume)
                    </li>
                    <li>
                        <AiOutlineLinkedin style={{marginRight: '10px'}}/>
                        LinkedIn: <a href={'https://www.linkedin.com/in/kaitlyn-kottlowski-78277aa2/'}>kaitlyn-kottlowski</a>
                    </li>
                    <li>
                        <AiOutlineGithub style={{marginRight: '10px'}}/>
                        GitHub: <a href={'https://github.com/kaitlyn-kottlowski-sc'} >kaitlyn-kottlowski-sc</a>
                    </li>
                </ul>
                <p>*Preferred method of contact: Phone</p>
            </div>
        </div>
    )
}

export default Information;