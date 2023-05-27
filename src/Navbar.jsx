import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <AppBar position="static">
            <Toolbar style={{ paddingLeft: 'auto' }}>
                <Typography variant='h3' component="div">BLOG DASHBOARD</Typography>
                <div style={{ marginLeft: 'auto' }}>
                <Button variant='contained'color='warning' ><Link to={'/'}>HOME</Link></Button>
                <Button variant='contained' color='warning'><Link to={'/Blg'}>ADD BLOG</Link></Button>
                </div>
            </Toolbar>
        </AppBar>

        


    </div>
  )
}

export default Navbar