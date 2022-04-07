import { Box, margin, typography } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Utils from '../Modules/Utils'
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
const  RightSideProfile=(props)=>{
    const style={
       
        menu:{
            height:'auto',
            paddingTop:'10vh',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            ProfileImg:{
                height:'20vh',
            },
            InputField:{
               
                height:'30px',
                marginBottom:5,
            }
            ,Buttons:{
            width:'auto',
            },
            child:{
                marginBottom:2,
                textAlign:'center'
            } 
        }  
        
       
    }
    const ProfileImg=Utils.Image;
    const InputField=Utils.Input;
    
    const LogInOut=Utils.Button;
    const EditProfile=Utils.Button;
    const {user}=props.app.state;
    const isLogin=props.app.isLogedIn();
    const navigate=useNavigate();
      
   
    const fullName=!user.fname&&!user.fname?'':`${user.fname}  ${user.lname}`;
    
   return (
   <Box sx={style.menu}>
         <Box sx={style.menu.ProfileImg}>
            {isLogin? 
                <ProfileImg src={user.displayImage} style={{width:150,height:150}}/>:<></>
            }
        </Box>
        <Box sx={style.menu.InputField}>
            {isLogin? 
            <>
                <Box sx={style.menu.child}>
                    <InputField  value={fullName} readOnly={true}  placeholder={'full name'}/>
                    <InputField  value={user.credential.username} readOnly={true}  placeholder={'username'}/>
                </Box>
                <Box>
                    <Box sx={style.menu.child}>
                        <LogInOut title='LogOut' onClick={()=>props.app.logout() } sx={style.menu.Buttons}></LogInOut>
                    </Box>
                    <Box sx={style.menu.child}>
                        <EditProfile title='Edit Profile' onClick={()=>navigate('/user')}  sx={style.menu.Buttons} ></EditProfile>
                    </Box>
                 </Box>
            </>
            : 
            <>
                <Box sx={style.menu.child}>
                         <Typography variant='h4' sx={{textDecoration:'none',color:'#12CDD4'}}>login</Typography>
                </Box>
                <form  method='GET' onSubmit={(e)=>props.app.handleLogIn(e)}>
                    <Box sx={style.menu.child}>
                        <InputField placeholder={'username'}  name='username' type='text' readOnly={false} required={true}/>
                        <InputField placeholder={'password'}  name='password' type='password' readOnly={false} required={true}/>
                    </Box>
                    <Box sx={style.menu.child}>
                        <LogInOut type='submit'  title='LogIn'/>
                    </Box>
                    <Box sx={style.menu.child}>
                        <Link  style={{textDecoration:'none',color:'#12CDD4'}} to='/signup'>SignUp</Link>
                    </Box> 
                    <Box sx={style.menu.child}>
                         <Typography variant='h6' sx={{textDecoration:'none',color:'#12CDD4'}}>{props.app.state.serverMsg.msg}</Typography>
                    </Box> 
                </form>
            </>
            }
        </Box>
       
   </Box>)

}

export default RightSideProfile;