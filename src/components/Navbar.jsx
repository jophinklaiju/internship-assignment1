import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{"paddingTop":"80px"}}>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>Blog</Typography>&nbsp; &nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to={'home'} style={{textDecoration:'none', color:'white'}}>Home</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to={'add'} style={{textDecoration:'none', color:'white'}}>Add blog</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar