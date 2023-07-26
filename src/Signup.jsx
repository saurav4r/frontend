import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


function BasicCard() {
    const navigate = useNavigate();
    const [email1, setEmail1] = useState("");
    const [username1, setUsername1] = useState("");
    const [password1, setPassword1] = useState("");
    
    console.log(username1,email1,password1);

    function NEVIGATE() {
        navigate("/login");
    }

    async function ASSIGNVALUE() {
        try {
            if (username1 && email1 && password1) {
                const response = await fetch('http://localhost:3005/admin/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username1,
                        password: password1,
                        email: email1,
                    }),
                });

                const data = await response.json();
                console.log(data);

                // Call the navigate function when the request is successful and all fields are filled
                NEVIGATE();
            } else {
                console.log("Please fill all fields before signing up.");
            }

        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ccf2ff' }}>
            <Card>
                <CardContent>
                    <br />
                    <br />
                    <Typography sx={{ fontSize: 35 }} variant="h2" color="black" gutterBottom>
                        Welcome To 100xdev
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }} component="div">
                        Kindly Signup Here
                    </Typography>

                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField id="filled-basic" label="Enter Your Name" variant="filled" onChange={(e) => {
                            setUsername1(e.target.value);
                        }} />
                    </div>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField id="filled-basic" label="Enter Your Email" variant="filled" onChange={(e) => {
                            setEmail1(e.target.value);
                        }} />
                    </div>

                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => {
                            setPassword1(e.target.value);
                        }} />
                    </div>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="contained"  onClick={ASSIGNVALUE}>Signup</Button>
                    </div>

                    <br />
                </CardContent>
            </Card>
        </div>
    );
}

export default BasicCard;
