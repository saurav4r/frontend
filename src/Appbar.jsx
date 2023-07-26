import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
export default function ButtonAppBar() {

  const navigate = useNavigate();

  return (

    
    <div
      
        style={{
          backgroundColor:'white',
          display: 'flex',
          flexDirection: 'row',
          width: "97%",
          height: '10vh',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', 
          borderRadius: '8px',
          position: 'fixed',
          top: 0, 
      }}
    >
      <div>
        <h3>100x-dev</h3>
      </div>

      <div style={{ textAlign: 'right' }}>
        <TextField
          label="type here to search"
          id="outlined-size-small"
          size="small"
        />
        <span style={{ marginLeft: '10px' }} />
        <Button variant="contained" onClick={()=>{navigate("/login")}}>login</Button>
        <span style={{ marginLeft: '10px' }} />
        <Button variant="contained" onClick={()=>{navigate("/signup")}}>sign-up</Button>
      </div>
    </div>
  );
}
