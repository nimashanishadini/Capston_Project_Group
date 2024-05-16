import * as React from 'react';
import './Hero.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FaEnvelope } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { FaMessage } from "react-icons/fa6";
import SendIcon from '@mui/icons-material/Send';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#CECECE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,

  
}));



export default function HeroPage() {
  return (
    <div className='menu-hero'>
     <div className ='logo1'>
            <img className ="photo" src="logo.png" alt="Logo"/>
      </div>

      <div className='logo2'>    
            <h3> Y N A P </h3>
            
        </div>

        <div className='logo3'>    
            <p>Learning System</p>
        </div>

    <Box sx={{ flexGrow: 1, }}>
      <Grid container spacing={3} style={{padding:'20px',justifyContent:'center', textAlign:'left' }}>
        <Grid item xs ={3} >

       <Item >
        <div className='item-list'>Tutoring</div>
          <ul type="square">
                <li>Math</li>
                <li>Bialogy</li>
                <li>Other</li>
            </ul>
         
            </Item>
          
        </Grid>
        <Grid item xs={2.5}>
          <Item>
          <div className='item-list'>Languages</div>
          
          <ul type="square" >
              <li>Sinhala</li>
              <li>English</li>
              <li>Tamil</li>
          </ul>
          </Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item>
          <div className='item-list'>Target</div>
          
          <ul type="square">
              <li>G.C.E.O/L</li>
              <li>G.C.E.A/L</li>
              <li>Other</li>
          </ul>
          </Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item>
          <div className='item-list'>Online </div>
          
          <ul type="square">
              <li>The Best Way of the Learning 
                <br/>
              </li>
              
          </ul>
          </Item>
        </Grid>
      </Grid>
      <div className='pop'>
        <h3> Number Of Population </h3>
      </div>

      <div className='pop1'>
      <Stack direction="row" spacing={5} justifyContent= {'center'} >
      <li>Active User</li>
      <li>Satisfied Clients</li>
      <li>Successfully pass</li>
      </Stack>
        </div>
    </Box>
<br/>
<br/>

<div className='container'>

<div className="para1"> 
<Box sx={{ flexGrow: 1, paddingLeft:'12px'}}>
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>

      <div className='img'>
        <img src='logo1.jpeg' alt='logo'/>
        <h4>Yasith Kaluthunga 
          <br/> 
        Mathamatics Tutour
          </h4>
      
    
    <p>Yasith has dedicated his entire life to pedagogical activities as a high school mathematics teacher and an educational counselor. 
      For the second year, he has been offering his years of experience in the school environment and personal life to the clients of ‘Y N A P’. 
      Not only does he like to teach, but he also motivates his students all the time. Yasith prefers an individual and friendly approach, 
      which is why he has chosen the 'Y N A P'. Now he is very happy that he can let the lesson flow and does not have to 
      watch the school bell ring.</p>
      </div>

  
      <Stack direction="row" spacing={5} justifyContent= {'center'} >
      <Button variant="contained">Previous</Button>
      <Button variant="contained" >All Tutors</Button>
      <Button variant="contained">Next</Button>
      </Stack>
      

      </Item>
     </Grid>
     </Grid>
    </Box>
    </div>

    <div className='para2'>

    <div className='tutour'>
  <p>Messages From Tutors</p>
  <a href="#"><FaMessage /> </a> 

        <div className='img2'>
            <img src="logo3.jpeg" width='200%' height='200%'/>
        </div>
      </div>
    </div>
</div>
  
  
  <br/>
<br/>
<div className='button2'>
 <Button variant="contained"> Start Your Journy </Button>
 </div>

 <br/>
 <br/>
 <hr/>

 <div className='navBar'>
    <h3> Non-Buiding Contact From </h3>
  <p> Based on the completed contact form, we will contact you, answer all your questions, and introduce you to the services of the 'Y N A P' platform.
+94 763 765 412 </p>
</div>

<div className='footer'>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} style={{padding:'40px', textAlign:'center'}}>
        <Grid item xs >
    <Item className='silver'><a href=''>
       <h4> Contact Information </h4>
         <FaEnvelope  className="icon"/></a>
    </Item>
    </Grid>

    <Grid item xs>
          <Item className='silver'><a href="">
          <h4> Tutoring Information  </h4>
           <IoInformationCircleOutline  className="icon"/></a>
          <href/>
          </Item>
        </Grid>

    <Grid item xs >
          <Item className='silver'><a href="">
          <h4> Addittional Information </h4>
           <IoInformationCircleOutline  className="icon"/></a>
          </Item>
        </Grid>
        </Grid>
      </Box>
      </div>

      
      <div className='for'>
        <p>Who is tutoring for ? </p>
        <FormControl>
       <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Formyself" control={<Radio />} label="For myself" />
        <FormControlLabel value="Guradin" control={<Radio />} label="Guardin" />
        <br/>
        <FormControlLabel value="parents" control={<Radio />} label="Parents" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
    <br/>
    <br/>
    

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Surname" variant="outlined" />
      <br/>
      <TextField id="outlined-basic" label="+94 SL" variant="outlined" width="25ch"/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
  </Box>
  <br/>
  <br/>


  <Stack direction="row" spacing={2} justifyContent= {'center'}>
  <Button variant="contained"  endIcon={<SendIcon />}>
        Send
      </Button>
  </Stack>
 </div>

 <br/>
  <br/>




  <Grid container spacing={1}>
  <Grid item xs={10}>  
     
    <div className='fotter'>
      <div className='sb_fotter section_padding'>
        <div className='sb_fotter_links'>
          <div className='sb_fotter_links_div'>
            <h4> Contact Us </h4>
            <a href='+94 25552567'>
              <p>< FaMobile className='icon'/> +94 25552567 </p>
            </a>

            <a href='ynapcap@gmail.com '>
              <p><FaEnvelope className='icon'/>ynapcap@gmail.com </p>
            </a>
       </div>

       <div className='sb_fotter_links_div'>
        <h4> How to start </h4>
       <a href='Show Services'>
         <p>Show Services</p>
        </a>

        <a href='Find Tutors'>
          <p>Find Tutors</p>
        </a>

        <a href='Contact Us'>
          <p>Contact Us</p>
        </a>
       </div>

       
       <div className='sb_fotter_links_div'>
        <h4>For Parents & Student</h4>
        <a href='Find Tutors'>
          <p>Find Tutors</p>
        </a>

        <a href='Complaint'>
          <p>Complaint</p>
        </a>

        <a href='Guidlines'>
          <p>Guidlines</p>
        </a>
       </div>

       <div className='sb_fotter_links_div'>
        <h4>About Us</h4>
        <a href='Y N A P'>
          <p>Y N A P</p>
        </a>

        <a href='Terms and Policies'>
          <p>Terms and Policies</p>
        </a>
</div>

<div className='sb_fotter_links_div'>
        <h4>Follow Us</h4>
       <div className='socialMedia'>
       <a href='#' className='item'>
            <FaFacebook/>  
            Facebook
            </a>
        
            <a href='#' className='item'>
            < FaInstagramSquare/>  
            Instagram
            </a>

            <a href='#' className='item'>
            <FaTwitterSquare/>  
            Twitter
            </a>
            
       </div>
</div>
       

      </div>
    </div>
    </div>
 
 
    </Grid>
</Grid>   
    
    </div>
    



);
}