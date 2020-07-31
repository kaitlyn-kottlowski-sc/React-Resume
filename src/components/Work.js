import React, {useState} from 'react'

function Work () {
    const AEGtasks = ["Added significant features to AEG's United Way Silent Auction site using AngularJS and Visual Code.",
        "Added multiple pages and functionalities to AEG's Testing Tools site using C# MVC and Visual Studio",
        "Used Azure DevOps and Microsoft Teams to communicate about bugs, stores, and tasks to work on for all of AEG\'s websites and its insurance application."]
    const AAAtasks = ["Assist in the creation and maintenance" +
    " of reports, databases, system processes, and documentation",
        "Update and create reports, imports/exports, and workflows with CRM and Excel."];

    const [show, setShow] = useState(false);
    const buttonTitle = show ? 'Hide' : 'Show';
    return (
        <div className="page-container">
            <h1>Related Experience</h1>
            <table className="work-table">
                <tr>
                    <RelatedExperience position="Software Development Intern"
                                    company="American Enterprise Group" city="Des Moines, IA" time="June 2019 - Present"
                                    tasks = {AEGtasks}
                    />
                    <RelatedExperience position="Admissions App Analyst"
                                    company="Simpson College" city="Indianola, IA" time="August 2020 - Present"
                                    tasks = {AAAtasks}
                    />
                </tr>
            </table>
            <button style={{float: 'center'}} onClick={() => setShow(!show)}>{buttonTitle} Other Work Experience</button>
            {show ? (<OtherWorkTable/>) : null}
        </div>
    )
}

function OtherWorkTable() {
    return (
        <div className="other-work-div">
            <h1>Other Work Experience</h1>
            <table className="work-table">
                <tr>
                    <OtherWork position="Barista" company="Sodexo" city="Indianola, IA" time="November 2018 - March 2020"/>
                </tr>
                <tr>
                    <OtherWork position="High School Tutor" company="Upward Bound" city="Indianola, IA" time="January 2019 - March 2020"/>
                </tr>
                <tr>
                    <OtherWork position="Community Advisor" company="Simpson College" city="Indianola, IA" time="August 2018 - March 2020"/>
                </tr>
                <tr>
                    <OtherWork position="Server" company="Hy-vee" city="Altoona, IA" time="April 2018 - May 2019"/>
                </tr>
            </table>
        </div>
    )
}

function OtherWork(props) {
    return (
        <td>
            <h2><span style={{textDecoration: 'underline'}}>{props.position}</span> | {props.company} | {props.city}</h2>
            <h3><i>{props.time}</i></h3>
        </td>
    )
}

class RelatedExperience extends React.Component {
    render() {
        return (
            <td>
                <h2 style={{textDecoration: 'underline'}}>{this.props.position}</h2>
                <h4>{this.props.company} | {this.props.city}</h4>
                <h3><i>{this.props.time}</i></h3>
                   <ul>
                        {this.props.tasks.map(task => (
                            <li>{task}</li>
                        ))}
                    </ul>
            </td>

        )
    }
}

export default Work;