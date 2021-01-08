import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../CSS/Home.css'
const Home = () => {
    return (
        <div id='homeScreen'>
            <h1 id="name">Hi, I am <span id='myname'>Thiruvarul Selvan</span></h1>
            <h3 id="para">I am a frontend web developer. I can provide clean code <br />
            and pixel perfect design. I also make website more & more interactive with web animations.

</h3>

            <div id='iconContainer'>
                <div>
                    <a id="fb" href="https://www.facebook.com/selva.surya.984786">
                        <FacebookIcon style={{ fontSize: '34px', color: 'black' }} />
                    </a>
                </div>

                <div id="twitter">
                    <a  href="https://twitter.com/selvasuryaaa">
                        <TwitterIcon style={{ fontSize: '34px', color: 'black' }} />
                    </a>
                </div>

                <div>
                    <a id="git" href="https://github.com/selvasuryaa">
                        <GitHubIcon style={{ fontSize: '34px', color: 'black' }} />
                    </a>
                </div>

            </div>
        </div>

    )
}
export default Home;
// #10121b light black color its cool and have good contrast n readable


