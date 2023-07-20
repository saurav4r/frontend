import * as React from 'react';

function IconMenu() {
  return (
    <div style={{display:'flex',
    flexDirection:'column',
     background:'#cce6ff',
      maxWidth:240,
       textAlign:'center',
        height:'100vh',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Adding a box shadow for the card-type look
        borderRadius: '1px'}}>
      <div>
      <h3>main menu</h3>
      <hr></hr>
      </div>
      
      <div>
       <h3>Home</h3>
       <h3>courses</h3>
      </div>
      
    </div>

  );
}

export default IconMenu;