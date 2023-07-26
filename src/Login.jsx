import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function BasicCard() {
    const navigate = useNavigate();
    const [email2, setEmail2] = useState("");
    const [password2, setPassword2] = useState("");

    function NEVIGATE() {
        navigate("/");
    }

    console.log({ email2, password2 });


    function callback2(data) {
        console.log(data);
        if (data.message === 'Logged in successfully') {
            NEVIGATE();
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
            
        }
        localStorage.setItem("token", data.token);

    }
    function callback1(res) {
        res.json().then(callback2)
    }

    function CHECKVALUE() {
        fetch("http://localhost:3005/admin/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email2,
                password: password2,
            })
        }).then(callback1);
       
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
                        Kindly Login Here
                    </Typography>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField id="filled-basic" label="Enter Your Email" variant="filled" onChange={(e) => { setEmail2(e.target.value) }} />
                    </div>

                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField id="password-field" label="Password" variant="filled" onChange={(e) => setPassword2(e.target.value)} />
                    </div>

                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="contained" onClick={CHECKVALUE}>login</Button>
                    </div>
                    <br />
                </CardContent>
            </Card>
        </div>
    );
}

export default BasicCard;
