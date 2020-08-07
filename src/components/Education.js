import React, {useState} from 'react'

function Education () {
    const [show, setShow] = useState(false);
    const buttonTitle = show ? 'Hide' : 'Show';

    return (
        <div className="page-container">
            <h1>Education</h1>
                <h2>Expected Graduation: May 2020</h2>
                <div>
                    <h2 className="major-header">SIMPSON COLLEGE</h2>
                    <h4 className="major-header"><i>August 2017 - Present</i></h4>
                    <h3 className="major-header">Majors:</h3>
                    <dl>
                        <dt>Computer Science</dt>
                        <dt>Computer Information Systems</dt>
                        <dt>Mathematics</dt>
                    </dl>
                    <h3 className="major-header">Overall GPA: 3.743</h3>
                    <button className="show-button" onClick={() => setShow(!show)}>{buttonTitle} coursework</button>
                </div>
                {show ? (<Courses/>) : null}
        </div>
    )
}

const Courses = () => {
    return (
        <div>
            <h1>Relevant Coursework</h1>
            <div className="courses">
                <table className="courses-table">
                    <tr>
                        <td>Intro to Programming (Python)</td>
                        <td>Databases & SQL</td>
                        <td>Calculus I-III</td>
                    </tr>
                    <tr>
                        <td>Mobile App Development</td>
                        <td>Problem Solving Techniques</td>
                        <td>Data Structures & OOP</td>
                    </tr>
                    <tr>
                        <td>Intro to C++</td>
                        <td>Linear Algebra</td>
                        <td>Adv Database Systems</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};


export default Education;