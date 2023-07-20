import React from "react";
import Image1 from './Image/Image1.jpg';
import Image2 from './Image/Image2.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
    const youtubeLink = 'https://www.youtube.com/watch?v=eZT8RUuWvR8&ab_channel=HarkiratSingh';
    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'flex-start', margin: '50px' }}>
                <img src={Image1} alt="Image 1" style={{ height: '300px', border: '2px solid black', borderRadius: '10px' }} />
            </div>


            <div style={{ margin: '50px', display: "flex", justifyContent: 'center' }}>
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

            <div style={{ margin: '50px', display: 'flex',  }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={Image2} title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Open Source contribution | Part 2
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '16px',
                        }}
                    >
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="contained" style={{ maxWidth: 300, paddingLeft: 100, paddingRight: 100 }}>
                                View video
                            </Button>
                        </a>
                    </CardActions>
                </Card>


            </div>

            


        </div>

    )
}

export default Home;
