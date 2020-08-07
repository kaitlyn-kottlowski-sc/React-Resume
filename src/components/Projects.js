import React from 'react'

import history_main from "../images/history_main.png";
import history_info from "../images/history_info.png";
import history_building from "../images/history_building.png";
import history_map from "../images/history_map.png";
import acorn_main from "../images/acorn_main.png";
import acorn_settings from "../images/acorn_settings.png";
import acorn_game from "../images/acorn_game.png";
import acorn_leaderboard from "../images/acorn_leaderboard.png";

function Projects () {
    return (
        <div className="page-container">
            <h1>Projects</h1>
            <Project title="Simpson College Tour"
                     time="September 2019 - April 2020"
                    description="This Android app was created for the Simpson College History Department
                    and Iowa History Center. Google Maps and Geolocation are included in the app
                     to allow users to easy locate the name and historical information about the Simpson
                     College building they are near. This app required a considerable amount of communication
                      with the head of the History Department, as well as the many students that were tasked
                       with writing the historical content. From September 2020 to October 2020, this app
                       was a group project with two other students. During that time, I was given the taska to add the Google Maps
                       and Geolocation function and the functionality and design of the main page. In February 2020,
                       I was hired to
                        complete the app and upload it to the Google Play Store."
            image1={history_main} image2={history_map} image3={history_building} image4={history_info}/>
            <Project title="Acorn Drop"
                     time="October 2019 - December 2019"
                     description="This iOS app was another group project. The top challenge during this project was learning the language
                      and syntax of Swift and how to use Xcode. Another challenge of this project was working as a group outside of class.
                     Both of my partners were commuters, and since they were likely to be home at night,
                     planning a time to work together was difficult. Additionaly, one partner was more focused on what they were doing rather than the group,
                      I did most of the communicating to let my partners know what I would be working on to double check that we were not overlapping tasks.
                      I decided to work on the leaderboard, using a json file to store the scores. At the moment, the game is not
                      finished, so I have given the user the ability to write in their username and score to show how the leaderboard works.
                      On top of the leaderboard, I took on the responsibilities of the settings page. I added background music and the functionality
                      to turn it on and off. I also gave the game a fun twist by allowing the user to change the theme of the game. I had
                      a great time creating backgrounds and dressing up the squirrel icons in different costumes. The 'Cat' theme is based on
                       Simpson College's cat named George who is always seen outside of our campus center."


                     image1={acorn_main} image2={acorn_settings} image3={acorn_game} image4={acorn_leaderboard}/>
        </div>
    )
}

function Project(props) {
    return (
        <div style={{textAlign: 'left'}}>
            <h2 className="project-title">{props.title} | <i>{props.time}</i></h2>
            <h4 className="project-description" >DESCRIPTION:<br/> {props.description}</h4>
            <table className="project-images-table">
                <tr>
                    <td ><img style={{width: '320px', borderRadius: '30px'}} src={props.image1}/></td>
                    <td ><img style={{width: '320px', borderRadius: '30px'}} src={props.image2}/></td>
                    <td ><img style={{width: '320px', borderRadius: '30px'}} src={props.image3}/></td>
                    <td ><img style={{width: '320px', borderRadius: '30px'}} src={props.image4}/></td>
                </tr>
            </table>
        </div>
    )
}
export default Projects;