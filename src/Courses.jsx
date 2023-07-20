import Image1 from './Image/Image1.jpg';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Courses() {
  return (
    <div>
      <div style={{ margin: '50px' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={Image1} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Live Full Stack Open Source Cohort
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn by doing open source contribution the course is led by.....
            </Typography>
            <br></br>
            <Typography gutterBottom variant="h5" component="div">
              $500
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center', // Align the content horizontally at the center
              paddingBottom: '16px', // Add padding to the bottom to separate the button from the card content
            }}
          >
            <Button variant="contained" style={{ maxWidth: 300, paddingLeft: 100, paddingRight: 100 }}>
              View detail
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Courses;
