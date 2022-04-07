
import { Box} from "@mui/system";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Utils from '../Modules/Utils'
import Alert from '@mui/material/Alert';
import LeftMenu from "../LeftMenu/LeftMenu";
const SignUp=(props)=>{
    const style={
        menu:{
            height:'90vh',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            ProfileImg:{
                height:'20vh',
            },
            InputField:{
                width:'50%',
                height:'30px',
                marginBottom:5,
            }
            ,Buttons:{
            marginTop:10
            },
            child:{
                marginBottom:2
            },
            
        },
        header:{
            color:'#12CDD4',
            marginTop:10
            
        } 
        
       
    }

    const InputField=Utils.Input;//({readonly:true});
    const CreateAccount=Utils.Button;

   
   return (
    <form onSubmit={e=>props.app.handleSignUp(e)}>
        <Box sx={style.menu}>
        <Box sx={style.menu.InputField}>
                            {props.app.state.serverMsg.status?
                              props.app.state.serverMsg.status===200?
                                <Alert sx={style.alert} severity="success">{props.app.state.serverMsg.msg}</Alert>
                                :
                                <Alert sx={style.alert} severity="error">{props.app.state.serverMsg.msg}</Alert>
                            :
                            console.log(props.app.state.serverMsg)}
                    </Box>
                <Box>
                    <Typography variant='h2' sx={style.header} >
                            Z-Prefix
                    </Typography>
                </Box>
                <Box sx={style.menu.InputField}>
                    <InputField  value={props.username} readOnly={false} name='fname'  placeholder={'first name'} required={true}/>
                </Box>
                <Box sx={style.menu.InputField}>
                    <InputField  value={props.username} readOnly={false} name='lname'  placeholder={'last name'} required={true}/>
                </Box>
                <Box sx={style.menu.InputField}>
                    <InputField  value={props.email} readOnly={false} name='email'  placeholder={'email address'} required={true}/>
                </Box>
                <Box sx={style.menu.InputField}>
                    <InputField  value={props.username} readOnly={false}  name='username' placeholder={'user name'} required={true}/>
                </Box>  
                <Box sx={style.menu.InputField}>
                    <InputField  value={props.username} type={'password'} name='password' readOnly={false}  placeholder={'password'} required={true}/>
                </Box>    
                <Box sx={style.menu.child}>
                    <CreateAccount type='submit' title='Create Account'></CreateAccount>
                </Box>
        
        </Box>
    </form>)

}

export default SignUp;