import React from 'react';
import profile from "../Assets/studio-1.jpg";
import MediaCard from '../Components/Cards'
import PaletteIcon from '@material-ui/icons/Palette';
import CodeIcon from '@material-ui/icons/Code';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinearProgress from '@material-ui/core/LinearProgress';


import "../CSS/About.css";
import LinearBuffer from '../Components/Progress';

const About = () => {
    return (
        <div id="about">
            
                <h1 id="title">ABOUT ME</h1>
                <LinearBuffer />
                <img src={profile} alt="profilepic" id="aboutPic" />
            
           
                <h1 id="name"> I am <span id='myname'>Thiruvarul Selvan</span></h1>
                <h3 id="para" >I am a frontend web developer. I can provide clean code 
                                        and pixel <br />perfect design. I also make website more & more interactive with web animations.</h3>
                {/* <h1 className="description">hello</h1> */}
                <div id="biocontainer" >
                    <pre >{
                        <div id='bio'>
                            <span>Full Name</span>     :  M.Thiruvarul Selvan<br />

                            <span>Age</span>                :  24 Years  <br />

                            <span>Nationality</span>    :  Indian<br />
                            <span>Languages</span>    :  English, Tamil<br />
                            <span>Address</span>         :  44 / 161, Senthamil Nagar, Pettai.<br />
                            <p id='s1'>Tirunelveli - 627010, Tamilnadu</p>
                            

                        </div>
                    }
                    </pre>
                </div>
                <h1 id="title">SERVICES</h1>
                <LinearBuffer/>
            
            <div id='cardHolder'>
                <MediaCard icon={<PaletteIcon style={{ fontSize: "57px", color: "blue",margin:'5px 7px' }} />} title="Web Design" content="selvass are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica"/>
                <MediaCard icon={<CodeIcon style={{ fontSize: "57px", color: "blue",margin:'5px 7px' }} />} title="Web Development" content="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica"/>
                <MediaCard icon={<PhoneAndroidIcon style={{ fontSize: "57px", color: "blue",margin:'5px 7px' }} />} title="Mobile Application" content="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica"/>
            </div>


        </div>

         
       
    )
}
export default About;