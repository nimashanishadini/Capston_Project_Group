import * as React from 'react';
import './Studentpro.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IoMdHome } from "react-icons/io";
import { FiAirplay } from "react-icons/fi";
import { FaInternetExplorer } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidBookmark } from "react-icons/bi";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { green } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StudentProfile() {
  return (
    <>

<Grid container spacing={1}>
  <Grid item xs={10}> 

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
    <Grid item xs={{maxWidth:'90%',  padding:'20px',paddingLeft:'10px'}}>
        
        <div className='menu'>
            <div className='logo'>
            <img className='img1' src='logo.png' alt='logo'/>
            <h2> Y N A P</h2>
        </div>

        <div className='main-menu'>
            <h3> Main Menu </h3>
        </div>

        <div className='menu-list'>
            <a href='#' className='item'>
            <IoMdHome className='logo-icon'/> Dahboard </a>

            <a href='#' className='item'>
            <FiAirplay className='icon' />  My Cources </a>

            <div className='main-menu'>
            <h3>Learn</h3>
             </div>

            <a href='#' className='item'>
            <FaInternetExplorer className='icon'/> Explore </a>


            <a href='#' className='item'>
            <FaBookOpen className='icon'/>  
            Learning Path
            </a>

            <a href='#' className='item'>
            <BiSolidBookmark className='icon'/>
            AI Problem Solver
            </a>

            <div className='main-menu'>
            <h3>Grow</h3>
             </div>

            <a href='#' className='item'>
            <FiAirplay className='icon'/>  
           Leader Board 
            </a>

            <a href='#' className='item'>
            <MdReportProblem  className='icon'/>  
           Practice Problems
            </a>

            <div className='main-menu'>
            <h3>Preference</h3>
             </div>

            <a href='#' className='item'>
            <IoMdSettings className='icon'/>  
           Settings
            </a>

            <a href='#' className='item'>
            <IoIosHelpCircle className='icon'/>  
           Help 
            </a>
     </div>
     <br/>
     <br/>


     <div className='logout' >
    <Stack className='bottom'>
      <Button variant="contained" href="#contained-buttons"> Log Out </Button>
      <p className='bottom1'> Something Went Wrong ? </p>
    </Stack>
    </div>
        </div>

   
        </Grid>
        
       </Grid>
 </Box>


</Grid>
        
       </Grid>


   
    </>
  );
}