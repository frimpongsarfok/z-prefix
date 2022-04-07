
import { Box} from "@mui/system";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Utils from '../Modules/Utils'
import LeftMenu from "../LeftMenu/LeftMenu";

import Alert from '@mui/material/Alert';



const User=(props)=>{
    const style={
        menu:{
            height:'auto',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            ProfileImg:{
                height:'270px',
            },
            InputField:{
                width:'50%',
                height:'50px',
                marginBottom:1,
            }
            ,Buttons:{
            marginTop:10
            },
            child:{
                marginBottom:2
            } 
        },
        alert:{
          width:'100%',
          height:'auto',
         
    
        }  
        
       
    }

    const ProfileImg=Utils.Image;//({src:null});
    const InputField=Utils.Input;//({readonly:true});
    const SaveButton=Utils.Button;
    const isLogin=props.app.isLogedIn();
    const queryParams= new URLSearchParams(window.location.search);
    const urlUsername=queryParams.get('username')===null?undefined:queryParams.get('username');
    let user=props.app.state.user;
   const isViewer=(urlUsername&& (urlUsername!==user.credential.username));
   if(isViewer){
        user=props.app.state.searchUser
        if(urlUsername!==props.app.state.searchUser.credential.username){
        props.app.handleGetUser(urlUsername);
        }
                
   }
   const [displayImageOnChange,setdisplayImageOnChange]=useState('');
  
   
   return (
   <Box sx={style.menu}>
     
         <Grid container spacing={2}>
            <Grid item xs={12} md={3} >
                 <LeftMenu isLogin={isLogin} hideMenu={true} ></LeftMenu>
            </Grid>
            <Grid item xs={12} md={8} >
            <Box sx={style.menu.InputField}>
                            {props.app.state.serverMsg.status?
                              props.app.state.serverMsg.status===200?
                                <Alert sx={style.alert} severity="success">{props.app.state.serverMsg.msg}</Alert>
                                :
                                <Alert sx={style.alert} severity="error">{props.app.state.serverMsg.msg}</Alert>
                            :
                            console.log(props.app.state.serverMsg)}
                    </Box>
            <form onSubmit={(e)=>props.app.handleSaveUser(e)}>
            <Box sx={style.menu}>
               
                 <Box sx={style.menu.ProfileImg}>      
                     <ProfileImg src={displayImageOnChange?displayImageOnChange:user.displayImage} style={{width:250,height:250}}/>
                </Box>
                {!isViewer?
                <Box >
                    <i style={{color:'#12CDD4'}}><u><input  accept="image/*" name='displayImage'  type='file' readOnly={false} onChange={(e)=>{     
                    const image=window.URL.createObjectURL(e.target.files[0]);
                    setdisplayImageOnChange(image);
                    }} /></u></i>                                   
                 </Box> 
                :<></>}
                
                <Box sx={style.menu.InputField}>
                    <InputField  value={user.fname} readOnly={isViewer } name='fname'   placeholder={'first name'} />
                </Box>
                 <Box sx={style.menu.InputField}>
                    <InputField  value={user.lname} readOnly={isViewer} name='lname' placeholder={'last name'}/>
                </Box>
                <Box sx={style.menu.InputField}>
                    <InputField  value={user.email} type='email' readOnly={isViewer} name='email' placeholder={'email'}/>
                </Box>
                <Box sx={style.menu.InputField}>
                    <InputField  value={user.credential.username} readOnly={isViewer} name='username'  placeholder={'user name'}/>:
                </Box>
               
                { isLogin&&!isViewer?
                    <>
                        
                        <Box sx={style.menu.InputField}>
                            <InputField  value={user.credential.password} name='password' type={'password'}   placeholder={'password'}/>:
                        </Box>
                        
                        <Box sx={style.menu.child}>
                            <SaveButton type='submit' title='Save Profile'></SaveButton>
                        </Box>
                    </>
                    :<></>
                }
            </Box>
            </form>
            </Grid>
        </Grid>
        
   </Box>)

}

export default User;