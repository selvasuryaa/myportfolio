import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../CSS/Home.css'
const Home =()=>{
    return(
        <div id='homeScreen'>
            <h1 id="name">Hi, I am <span id='myname'>Thiruvarul Selvan</span></h1>
            <h3 id="para">I am a frontend web developer. I can provide clean code <br/>
            and pixel perfect design. I also make website more & more interactive with web animations.

</h3>
            
            <div id='iconContainer'>
                <FacebookIcon style={{fontSize:'34px',color:'white'}}/>
                <TwitterIcon id='twitter' style={{fontSize:'34px',color:'white'}}/>
                <GitHubIcon style={{fontSize:'34px',color:'white'}}/>
            </div>

        </div>

    )
}
export default Home;