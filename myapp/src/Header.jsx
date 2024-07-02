import { styled } from '@mui/material';
import React from 'react'
import { AppBar } from "@mui/material";

const drawerWidth=400;

const AppBarStyle = styled(AppBar)  (({ theme }) => {
    
    console.log(theme);
    
    return({
    boxShadow: "none",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    color: "#333333",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      flexShrink: 0,
    },
  }) }) ;

export default function Header() {
  return (
    <AppBarStyle position="fixed">


    </AppBarStyle>
  )
}
