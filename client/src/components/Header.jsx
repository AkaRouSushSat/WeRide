import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
;



const Header = () => {
  return (
    <React.Fragment>
        <AppBar sx ={{background:'#FA7F3E'}}>
        <Toolbar>        
            <Typography>
                CoDrive
            </Typography>
        </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header