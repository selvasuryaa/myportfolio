import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../CSS/Cards.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
        
  },
  media: {
    height: 140,

  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card id='card' className={classes.root}>
      <CardActionArea>
       {props.icon}
{/* <PaletteIcon className='palete' style={{fontSize:"57px"}}/> */}
        <CardContent>
          {/* <Typography gutterBottom variant="h5" fontFamily="kurale" component="h2"> */}
          <h1 id='cardtitle'>
              {props.title}
              </h1>
            {/* Web Development */}
          {/* </Typography> */}
          {/* <Typography variant="body2" color="white"   component="p"> */}
              <h4 id='cardcontent'>
              {props.content}
              </h4>
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
          {/* </Typography> */}
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
