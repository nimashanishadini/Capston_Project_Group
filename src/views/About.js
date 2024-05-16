import * as React from 'react';
import './About.css';
import Box from '@mui/material/Box';
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
import SendIcon from '@mui/icons-material/Send';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#CECECE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AboutUS() {
  return (
    <>
<div className="Body">
      <div className="box1">
      <p className='para1'>Our goal is to help parents find the right classes for their children and  We want to make it easy for<br/>
parents and students to choose classes that fit their needs and interests.<br/>
Our website will have easy-to-use features to help with this. We'll also have tests and assessments to<br/>
track how well students are doing. Students will be able to <br/>
choose their own teachers, making sure they feel comfortable and respected.</p>
      </div>

      <div className="box2">
        <h4 className='our-tutors'>Our Tutors</h4>
   
        <p className='des-tutors'>Everyone in the team plays an important part tutoring coordinators, Graduate Lecturers,qualified teachers.<br/>  Our common goal is to 
        create a pleasant environment for tutoring in which everyone achieves excellent results.</p>
      </div>

      <div className="box3">
        <h4 className='target-audiance'>Target Audience</h4>
        <p className='des-audiance'>The target audience for this innovative application includes parents who are
seeking supplemental<br/> tuition services for their children and students 
who require additional academic support to excel in competitive educational <br/> 
environments.</p>
      </div>
     


<br/>
 <br/>
 <hr/>

  <div className="box4">
 <div className='navBar'>
    <h3> Non-Buiding Contact From </h3>
  <p> Based on the completed contact form, we will contact you, answer all your questions, and introduce you to the services of the 'Y N A P' platform.
+94 763 765 412 </p>
</div>

<div className='Information'>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} style={{padding:'40px', textAlign:'center'}}>
        <Grid item xs>
    <Item className='cap'><a href=''>
       <h4> Contact Information </h4>
         <FaEnvelope  className="icon"/></a>
    </Item>
    </Grid>

    <Grid item xs>
          <Item className='cap'><a href="">
          <h4> Tutoring Information  </h4>
           <IoInformationCircleOutline  className="icon"/></a>
          <href/>
          </Item>
        </Grid>

    <Grid item xs >
          <Item className='cap'><a href="">
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
</div>
    
    </>
  )
}

export default AboutUS