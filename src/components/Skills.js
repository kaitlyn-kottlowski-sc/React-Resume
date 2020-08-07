import React from 'react'

function Skills () {
    return (
        <div className="page-container" style={{paddingBottom: '50px'}}>
            <h1>Skills</h1>s
            <h2 className="skill-header">Programming Languages</h2>
            <h2 className="skill-level-header">Skill Level & Experience</h2>
            <Skill name="Java" score={4}/>
            <Skill name="C# MVC" score={4}/>
            <Skill name="Swift" score={3}/>
            <Skill name="Javascript"score={3}/>
            <Skill name="HTML/CSS"score={3}/>
            <Skill name="Python"score={3}/>
            <Skill name="C++"score={2}/>
            <h2 className="skill-header">Applications</h2>
            <h2 className="skill-level-header">Skill Level & Experience</h2>
            <Skill name="Android Studio"score={5}/>
            <Skill name="Xcode"score={4}/>
            <Skill name="Visual Studio"score={4}/>
            <Skill name="Intellij"score={4}/>
            <Skill name="Microsoft Office"score={4}/>
            <Skill name="Adobe Pro" score={3}/>
            <h2 className="skill-header">Frameworks</h2>
            <h2 className="skill-level-header">Skill Level & Experience</h2>
            <Skill name="AngularJS" score={3}/>
            <Skill name="React" score={3}/>
            <Skill name="ASP.Net"score={4}/>
            <h2 className="skill-header">Database</h2>
            <h2 className="skill-level-header">Skill Level & Experience</h2>
            <Skill name="SQL" score={4}/>
            <Skill name="SSMS" score={4}/>
            <Skill name="Oracle"score={2}/>
            <h2 className="skill-header">Other</h2>
            <h2 className="skill-level-header">Skill Level & Experience</h2>
            <Skill name="Git" score={4}/>
            <Skill name="JSON/XML" score={3}/>
        </div>
    )
}

const Skill = (props) => {
    let scores = [];
    for (var i = 0; i < props.score; i++) {
        scores.push(<span className="circle-fill"></span>)
    }
    for (var j = 0; j < 5-props.score; j ++) {
        scores.push(<span className="circle"></span>)
    }
    return (
        <div style={{textAlign: 'left', marginLeft: '300px'}}>
            <h2 className="skill" style={{width: '48%'}}>{props.name}</h2>
                <div style={{display: 'inline-block', width: '52%'}}>{scores}</div>
        </div>
    )
}

export default Skills;