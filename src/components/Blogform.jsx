import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Blogform = () => {
  return (
    <div style={{"paddingTop":"80px"}}>
        <Typography variant='h4'>Blog Form</Typography><br/><br/>

        <TextField
            label='Blog Name'
            variant='outlined'
        />
        <br/><br/>
        <TextField
            label='Description'
            variant='outlined'
        /><br/><br/>
        <TextField
            label='Author Name'
            variant='outlined'
        /><br/><br/>
        <Button variant='contained' color='secondary'>Submit</Button>

    </div>
  )
}

export default Blogform