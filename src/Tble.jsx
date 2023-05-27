import { Table ,TableBody, TableCell,TableHead, TableContainer, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tble = () => {
    var[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setUsers(response.data)
        console.log(response.data)
})
.catch(err=>console.log(err))

    },[])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                     <TableRow>
                     <TableCell style={{color:"red"}}>ID</TableCell>
                     <TableCell style={{color:"red"}}>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {users.map((value,index)=>{
                        return(
                            <TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.title}</TableCell>
                            </TableRow>
                        )
                })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tble