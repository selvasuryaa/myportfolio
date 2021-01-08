import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import MediaCard from '../Components/Cards'
// import LinearBuffer from '../Components/Progress';
// import TypographyDemo from '../Components/WaveAnim'
import '../CSS/Contact.css'
import LinearIndeterminate from '../Components/Linear_Progress'

const Contact = () => {
    return (
        <div  id='contact'>
             <h1 id="title">CONTACT ME</h1>
            <LinearIndeterminate/>
        
        <div id='cardHolder'>
            <div id='card1'>
            <MediaCard  icon={<PhoneIcon style={{ fontSize: "57px", color: "blue", margin: '5px 7px' }} />} title="Phone" content={ <div><h3>+91 860 811 8057</h3> <h3>+91 830 090 7104</h3></div> } />
            </div>

            <div id='card2'>
            <MediaCard  icon={<MailIcon style={{ fontSize: "57px", color: "blue", margin: '5px 7px' }} />} title="Email" content={<div><h3>selva97eee@gmail.com</h3> <h3>selvasuryaaa@gmail.com</h3></div>}/>
            </div>

            <div id='card3'>
            <MediaCard  icon={<RoomIcon style={{ fontSize: "57px", color: "blue", margin: '5px 7px' }} />} title="Address" content={<div><h3> 44 / 161, Senthamil Nagar, Pettai, <br/>Tirunelveli - 627010, Tamilnadu.</h3></div>}/>
            </div>
          
        </div>
        </div>
    )
}
export default Contact;