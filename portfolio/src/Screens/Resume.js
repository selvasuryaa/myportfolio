import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';


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
            <div id='category'>

                <h2 >Working Experience</h2>
            </div>
        </div>
    )
}
export default Resume;