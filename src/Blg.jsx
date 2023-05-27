import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Blg = () => {
    var [blog,setBlog]=useState("");
    var [dss,setDss]=useState("");
    var [aot,setAot]=useState("");
    const Bln=(b)=>
    {
        setBlog(b.target.value);
        console.log(blog);
    }
    const Dss=(d)=>
    {
        setDss(d.target.value);
        console.log(dss);
    }
    const Aot=(a)=>
    {
        setAot(a.target.value);
        console.log(aot);
    }
    const add=()=>{
        alert("Data added")
    }
  return (
    <div>
        <TextField variant='filled' label="BLOG NAME" onChange={Bln}></TextField>
        <TextField variant='filled' label="DESCRIPTION" onChange={Dss}></TextField>
        <TextField variant='filled' label="AUTHOR NAME" onChange={Aot}></TextField>
        <br></br>
        <Button variant='outlined'onClick={add}>ADD BLOG</Button>
    </div>
  )
}

export default Blg