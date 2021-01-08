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
                <WorkIcon style={{fontSize:'34px',color:'black'}}/>

                <h1>Working Experience</h1>

            </div>
            <div id='experience'>
            <h3>June 2020 – August 2020</h3>
            <span>-----</span>
            
            <h4> Worked as a  MERN stack Developer as Intern in Talento Academy</h4>
                {/* <span></span><h4> Worked as a  MERN stack Developer as Intern in Talento Academy</h4> */}
            </div>
            <div id='category2'>
                <CastForEducationIcon style={{fontSize:'34px',color:'black'}}/>

                <h2 >Educational Qualifications</h2>

            </div>
            <div id='qualification'>
            <h3>June 2020 – August 2020</h3>
            <span>-----</span>
            
            <h4> Worked as a  MERN stack Developer as Intern in Talento Academy</h4>
                {/* <span></span><h4> Worked as a  MERN stack Developer as Intern in Talento Academy</h4> */}
                <div id='experience'>
            <h3>June 2020 – August 2020</h3>
            <span>-----</span>
            
            <h4> Worked as a  MERN stack Developer as Intern in Talento Academy</h4>
                {/* <span></span><h4> Worked as a  MERN stack Developer as Intern in Talento Academy</h4> */}
                {/* P.G DIPLOMA in Renewable Energy Science & Management and Auditing (2018-2019)in Manonmaniam Sundaranar University,Tirunelveli.

B.E. Electrical and Electronics Engineering (2014-2018) with6.91CGPA
Francis Xavier Engineering College, Tirunelveli

HSC in Kamarajar Municipal Higher Secondary School (2013-2014) with84%
Pettai, Tirunelveli

SSLC in Kamarajar Municipal Higher Secondary School (2011-2012) with94%
Pettai, Tirunelveli. */}

            </div>
            </div>
        </div>
    )
}
export default Resume;