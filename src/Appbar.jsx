import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ButtonAppBar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        // background: '#e6f2ff',
        maxWidth: '100vw',
        height: '10vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Adding a box shadow for the card-type look
        borderRadius: '8px', // Adding border-radius for rounded corners
        
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
        <Button variant="contained">sign-in</Button>
        <span style={{ marginLeft: '10px' }} />
        <Button variant="contained">sign-up</Button>
      </div>
    </div>
  );
}
