import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"
import { TextField } from "@mui/material"

function NavigationBar(prop){
    const style={
        width:'100%',
        position:'relative',
        textAlign:'center',
        logo:{
            color:'#12CDD4',
            textColor:'#12CDD4',
            fontFamily:'Avenir',
            fontSize:30,
            marginTop:3,
            textAlign:'center'

        },
        search:{
            height:'50%',
            width:'90%',
            fontSize:15,
            input:{
                color:'#12CDD4',
                textAlign:'center',
                outline:'none'
            },      
            "& .MuiOutlinedInput-root": {
                textAlign:'center',
                "&.Mui-focused fieldset": {
                  border: "0" // customized
                }
              },
            color:'#12CDD4',
            border:2,
            marginTop:3,
            borderRadius:'5vh'
        },
        searchCard:{
          width:'100%',
          height:'auto',
          borderBottom:'2px',
          border:'0 0 0 3px solid white',
          child:{
            with:'100%',
            height:'100px',
            displayImage:{
              width:'50px',
              height:'50px'
            }
          }
        }

        
    }

    
  return (
  <nav>
    
    <Grid container  sx={style}>
        <Grid item xs={12} md={2} sx={{textAlign:'center'}}>
            <Typography sx={style.logo}>Z-Prefix</Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{textAlign:'center'}} >
            <TextField
            id="searchPost"
            placeholder="search for post or users with user first name, last name, username  or email adress " 
            type="search"
            InputLabelProps={{style:{color:'#12CDD4'}}}
            sx={style.search}
            onChange={e=>prop.app.handleSearchPost(e)}
            />


        </Grid>
        <Grid  item xs={12} md={12} sx={{width:'100%',height:'auto',backgroundColor:'#12CDD4',textAlign:'center',color:'white',fontStyle:'italic'}}>
        <span>{prop.app.state.barTitle}</span>
        </Grid>
        
         
    </Grid>
   
  </nav>)
}

export default NavigationBar;