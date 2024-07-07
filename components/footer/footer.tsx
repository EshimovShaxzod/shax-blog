'use client'
import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { socials } from './constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[#141414]'>
      <Box component='div' sx={{display: "flex", justifyContent: "space-between", alignItems: "center", paddingY: "15px", paddingX: "15px", color: "white", width: "100%"}}>
         <Typography>Copyright @2024. All Rights Reserved.</Typography>

           <List sx={{display: "flex", alignItems: "center"}}>
             {socials.map((socials) => (
               <ListItem key={socials.link}>
                 <Link
                   href={socials.link}
                 >
                   {socials.icon}
                 </Link>
               </ListItem>
             ))}
           </List>
         </Box>
    </footer>
  )
}

export default Footer