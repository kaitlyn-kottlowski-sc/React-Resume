import React from 'react'

function Teaching () {
    return (
        <div className="page-container">
            <h1>Teaching</h1>
            <div className="courses">
                <h2 style={{fontSize: '30px'}}>
                    I have been given many opportunities to be a resource for student in computer classes since my Senior year of high school.
            My SQL teacher asked me to help with student questions and homework throughout 2016-2017 school year. I am extremely grateful to Mrs. Crawford
            of Southeast Polk for the knowledge and experience that has allowed me to obtain the following Undergraduate Assistant positions
                    for the Computer Science department at Simpson College.
                </h2>
            </div>
            <div className="courses" style={{paddingBottom: '60px'}}>
            <UGA title="SQL Undergraduate Assistant" year="Fall 2019"
                 task="Applied SQL knowledge to assists students in solving complex problems."/>
            <UGA title="Python Undergraduate Assistant" year="Fall 2020"
                 task="Used as a resource for students in and outside the classroom."/>
            <UGA title="(UPCOMING) Java Undergraduate Assistant" year="Spring 2021"
                 task="Assisting a professor by grading homework and student projects."/>
            </div>
        </div>
    )
}

const UGA = (props) => {
    return (
        <div style={{paddingTop:'20px',textAlign: 'left', marginLeft: '50px'}}>
            <h2 style={{fontSize: '40px', height: '20px'}}>
                {props.title}
            </h2>
            <h3 style={{fontSize: '30px', height: '20px'}}><i>{props.year}</i></h3>
            <ul style={{fontSize: '30px', height: '20px'}}>
                <li>{props.task}</li>
            </ul>
        </div>
    )
}
export default Teaching;