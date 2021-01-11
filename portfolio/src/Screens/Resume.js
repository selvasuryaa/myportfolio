import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
// import LinearBuffer from '../Components/Progress';
import { withStyles } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LinearIndeterminate from '../Components/Linear_Progress'


import "../CSS/Resume.css"


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress)

const Resume = () => {
    return (
        <div id='resume'>
            <h1 id='title'  >MY SKILLS</h1>
            <LinearIndeterminate/>


            <div id='skillContainer'>
                <div id='skill1'>
                    <div style={{ width: "15%" }}>
                        <h2>HTML5</h2>

                        <p>95%</p>
                    </div>
                    <div style={{ width: "80%" }}>
                        <BorderLinearProgress variant="determinate" value={95} />
                    </div>
                </div>

                <div id='skill2'>


                    <div style={{ width: "15%" }}>
                        <h2>CSS3</h2>

                        <p>90%</p>
                    </div>
                    <div style={{ width: "80%" }}>
                        <BorderLinearProgress variant="determinate" value={90} />
                    </div>
                </div>

                <div id='skill3'>

                    <div style={{ width: "15%" }}>
                        <h2>Javascript</h2>

                        <p>75%</p>
                    </div>
                    <div style={{ width: "80%" }}>
                        <BorderLinearProgress variant="determinate" value={75} />
                    </div>
                </div>

                <div id='skill4'>

                    <div style={{ width: "15%" }}>
                        <h2>ReactJS</h2>

                        <p>80%</p>
                    </div>
                    <div style={{ width: "80%" }}>
                        <BorderLinearProgress variant="determinate" value={80} />
                    </div>
                </div>

                <div id='skill5'>

                    <div style={{ width: "15%" }}>

                        <h2>NodeJS</h2>

                        <p>70%</p>
                    </div>
                    <div style={{ width: "80%" }}>
                        <BorderLinearProgress variant="determinate" value={70} />
                    </div>
                </div>

                <div id='skill6'>

                    <div style={{ width: "15%" }}>
                        <h2>MongoDB</h2>

                        <p>85%</p>
                    </div>
                    <div style={{ width: "80%" }}>
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                </div>
            </div>
            <h1 id='title'>RESUME</h1>
            <LinearIndeterminate/>

            <div id='category1'>
                <WorkIcon style={{fontSize:'34px',color:'black',marginRight:"10px"}}/>

                <h1 style={{color:"black",}}>Working Experience</h1>

            </div>
            <div id='experience'>
            <div id="e1">June 2020 – August 2020</div>
            <div id="e2">-----</div>
            
            <div id="e3"> Worked as a  MERN stack Developer as Intern in Talento Academy</div>
            </div>

            <div id='category2'>
                <CastForEducationIcon style={{fontSize:'34px',color:'black',marginRight:"10px"}}/>

                <h1 style={{color:"black"}}>Educational Qualifications</h1>

            </div>
            <div id='qualification1'>
          
            <div id="q1">2018 - 2019</div>
            <div id="q2">-----</div>
            
            <div id="q3"><h2 id="caption1">Post Graduation</h2>P.G DIPLOMA in Renewable Energy Science & Management and Auditing in Manonmaniam Sundaranar University,Tirunelveli. </div>
            </div>
            <div id='qualification2'>
          
          <div id="q4">2014 - 2018</div>
          <div id="q5">-----</div>
          
          <div id="q6"><h2 id="caption2">Under Graduation</h2> Bachelor of Engineering in  Electrical and Electronics Engineering in
Francis Xavier Engineering College, Tirunelveli</div>
          </div>
          <div id='qualification3'>
          
          <div id="q7">2013 - 2014</div>
          <div id="q8">-----</div>
          
          <div id="q9"><h2 id="caption3">Higher School Graduation</h2> Higher School Graduation in Kamarajar Municipal Higher Secondary School 
Pettai, Tirunelveli</div>
          </div>
        </div>
    )
}
export default Resume;