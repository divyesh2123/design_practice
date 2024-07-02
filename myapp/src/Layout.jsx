import React, { useState } from 'react'
import Header from './Header';
import { Box } from '@mui/material';

export default function Layout(props) {

    const { window } = props;
    const [toggleMenu, setToggleMenu] = useState(false);



  return (
   <Box sx={{ display: "flex" }} >

    <Header/>

  </Box>
  )
}
