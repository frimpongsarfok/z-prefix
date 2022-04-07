
import { Box} from "@mui/system";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Utils from '../Modules/Utils'
import Alert from '@mui/material/Alert';
import LeftMenu from "../LeftMenu/LeftMenu";
import RightSideProfile from "../User/RightSideProfile";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NewPost=(props)=>{
    const style={
        menu:{
            height:'auto',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            ProfileImg:{
                height:'20vh',
            },
            InputField:{
                width:'90%',
                height:'30px',
                marginTop:5,
            },
            TextArea:{
                width:'90%',
                height:'auto',
                marginBottom:5,
                marginTop:5,
            }
            ,Buttons:{
               marginTop:10
            },
            child:{
                marginTop:5
            },
            
        },
        header:{
            color:'#12CDD4',
            marginTop:10
            
        },child:{
            height:'auto',
            overflow:'auto',
            textAlign:'center'
       },
       alert:{
        width:'100%',
        height:'auto',
       
  
      } 
        
       
    }

    const InputField=Utils.Input;//({readonly:true});
    const TextArea=Utils.TextArea;
    
    const CreateNewPost=Utils.Button;
    const InputFile=Utils.InputFile;
    const isLogin=props.app.isLogedIn();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!props.app.isLogedIn()){
            return <>{navigate('/')}</>
        }
   
     })
    
   return (
        <section>
            <header>
            <NavigationBar app={props.app}/>
        </header>
        <article>
        <Grid container spacing={2} sx={style}>
                <Grid item xs={12} md={3} >
                    <LeftMenu app={props.app}></LeftMenu>
                </Grid>
                <Grid item xs={12} md={6} sx={style.child} >
                <form onSubmit={e=>props.app.handleNewPost(e)}>
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
                                <Typography variant='h3' sx={style.header} >
                                        Z-Prefix 
                                </Typography>
                                <Typography variant='h5' sx={style.header} >
                                        Post New Content
                                </Typography>
                            </Box>
                            <Box sx={style.menu.InputField}>
                                <InputField  value={props.username} readOnly={false} name='title'  placeholder={'Title'} required={true}/>
                            </Box>
                            <Box sx={style.menu.TextArea}>
                                <TextArea  name='content'   placeholder={'Type or paste content here'} required={true}/>
                            </Box>   
                            <Box sx={style.menu.child}>
                                 <InputFile name='media'/>
                            </Box>
                            <Box sx={style.menu.child}>
                                <CreateNewPost type='submit' title='Publish'></CreateNewPost>
                            </Box>
                    
                    </Box>
                </form>
                </Grid>
                <Grid item xs={12} md={3}>
                    <RightSideProfile  app={props.app} ></RightSideProfile>
                </Grid>
            </Grid>
        </article>

        </section>
       
    )

}

export default NewPost;