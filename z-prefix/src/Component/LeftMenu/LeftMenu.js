import styled from "@emotion/styled";
import { Box, height, margin } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Utils from '../Modules/Utils'
const  LeftMenu=(props)=>{
    const navigate=useNavigate();
    styled.div({
        'font-size': 16
      });
    const style={
        menu:{
            height:'auto',
            paddingTop:'10vh',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center', 
            alignItems: 'center',
            child:{
                marginBottom:2
            } 
        }       
    }
    const AllPost=Utils.Button;
    const MyPost=Utils.Button;
    const PublishNewPost=Utils.Button;
    const Back=Utils.Button;

  
    return (
        <Box>
          <Box  sx={style.menu}>
            {props.hideMenu?
            <Box sx={style.menu.child}>
                <Back title='back' onClick={()=>navigate('/')}/>
            </Box>:
               <>
                <Box sx={style.menu.child}>
                        
                        <AllPost onClick={()=>{
                            props.app.getPost(false);
                            navigate('/post')}} title='All Post'/>
                </Box>
                {!props.app.isLogedIn()?
                    <>/</>
                   :
                    <>
                        <Box sx={style.menu.child}>
                            <MyPost onClick={()=>{
                            props.app.getPost(true);
                            navigate('/mypost')
                        }} title='My Post'/>
                        </Box>
                        <Box sx={style.menu.child}>
                            <PublishNewPost onClick={()=>{
                                props.app.handleSetBarTitle('Publish New Post')
                                navigate('/newpost')
                                }} title='Publish New Post'/>
                        </Box>
                    </>
                }          
                </>
         }
        </Box> 
        </Box>
    )


}
export default LeftMenu;