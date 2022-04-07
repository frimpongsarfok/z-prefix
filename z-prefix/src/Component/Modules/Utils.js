import { Button, CardMedia } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import ProfileImg from '../../img/profile.png'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const style={
    Image:{
        height:'20vh',
        borderRadius:'50%'
    },
    Button:{
        backgroundColor:'#12CDD4',
        color:'white',
        borderRadius:'30px',
        width:'100%',
        height:'30px',
        marginLeft:'auto',
        maginRight:'auto',
        
    },
    InputProps:{
       
        fontSize:20,
        borderTop:0,
        borderLeft:0,
        borderRight:0,
        borderColor:'#12CDD4',
        width:'90%',
        marginTop:'10px',
        marginBottom:'10px',
        paddin:'10',
        "& .MuiOutlinedInputRoot": {
            outline:'none',
            textAlign:'center',
            "&.Mui-focused fieldset": {
              border: "0" // customized
            }
          },
        backgroundColor:'black',
        color:'#12CDD4',
        textAlign:'center',
        color:'#12CDD4',
        'input:focus':{
            border:0
        },

        InputFileType:{
            border:0,
            color:'#12CDD4',
            '::fileSelectorButton':{
               backgroundColor:'#12CDD4',
               color:'white',
            }
        },
        TextArea:{
            width:'90%',
            height:'100%',
            borderColor:'#12CDD4',
            borderWidth: 'bold',
            textAlign:'center',
            borderRadius:'20px',
            backgroundColor:'black',
            color:'#12CDD4',
            fontSize:20,
           

        }
     }
        
}
const Utils={

    Image:(props)=>(
        <img  src={props.src?props.src:ProfileImg} style={{...style.Image,...props.style}}/>
    ),
    Button:(props)=>(
        <Button variant={props.active?'contained':'outlined'} type={props.type} onClick={(e)=>{if(props.onClick)props.onClick(e)}} sx={{...style.Button,...props.sx}}>{props.title}</Button>
    ),
    Input:(props)=>(
        <input
            
            type={props.type} 
            defaultValue={props.value} 
            placeholder={props.placeholder}  
            style={style.InputProps} 
            id={props.id}
            autoComplete={'on'}
            required={props.required}
            name={props.name}
            readOnly={props.readOnly}
            />
           
    ),
    InputFile:(props)=>(
        <input 
            type='file'
            name={props.name}
            style={style.InputProps.InputFileType}
        />),

    TextArea:(props)=>(
        <TextareaAutosize
        minRows={10}
        name={props.name}
        placeholder={props.placeholder}
        style={style.InputProps.TextArea}
        required
        />
    )
    
        
}
export default Utils;