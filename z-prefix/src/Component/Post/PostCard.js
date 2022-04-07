
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { borderBottom, color, style } from '@mui/system';
import { Link } from 'react-router-dom';
import { Button, Input } from '@mui/material';
import Utils from '../Modules/Utils';
const hide100Content=false;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const handleAddFile=(e)=>{

}

const PostCard=(props)=>{
  const [expanded, setExpanded] = React.useState(false);
  const [editMode, setEditMode] =React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleEditClick=()=>{
      setEditMode(!editMode);
  }
  const InputFile=Utils.InputFile;
  return (
    <Card sx={{ width:'100%',backgroundColor:'black',color:'white', borderBottom:2, borderBlockColor:'#12CDD4'}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor:'#12CDD4' }} aria-label="recipe">
            {props.post.user.fname[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Link to={`/user?username=${props.post.user.username}`} style={{color: 'white', fontSize:'16px'}}>{`${props.post.user.fname} ${props.post.user.lname}`}</Link>}
        subheader={ <Typography sx={{color: 'white', fontSize:'12px'}}>{props.post.date}</Typography>}
      />
     <CardContent>
        <Typography variant="h6" color="white">
            {props.post.title}
        </Typography>
      </CardContent>
      {props.post.media.src?<CardMedia
        component="img"
        height="auto"
        image={props.post.media.src}
        alt={props.post.media.name}
      />:<></>}
       {expanded&& props.isLogIn?<></>:
        <CardContent >
            <Typography paragraph color="white">
                {props.post.content.substring(0,100)+'...'}
            </Typography>
        
        </CardContent>
      }
      <CardActions disableSpacing>
        <IconButton aria-label="share" style={{color:"#12CDD4"}}>
          <ShareIcon />
        </IconButton>
        {props.isLogIn && props.fromMe?
        <ExpandMore
          expand={editMode}
          onClick={()=>{if(!expanded)handleExpandClick();handleEditClick()}}
          vane-expanded={editMode?'true':'false'}
          aria-label="show more"
          style={{color:"#12CDD4"}}
        >
          <EditIcon />
        </ExpandMore>
        :<></>}
        {props.isLogIn?
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          vane-expanded={expanded?'true':'false'}
          aria-label="show more"
          style={{color:"#12CDD4"}}
        >
            <ExpandMoreIcon />
        </ExpandMore>
        :<></>}
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Input  
            multiline={true} 
            readOnly={!editMode} 
            rows={10} 
            defaultValue={
                props.post.content} sx={
                {
                    color:'white',
                    backgroundColor:'black',
                    height:'auto',
                    width:'100%'
                }
            }/>
          {editMode && props.isLogIn?
            <>
            <InputFile/>
            <Button variant='contained' sx={
              {
                  float:'right',
                  backgroundColor:"#12CDD4",
                  color:'white',borderRadius:'30px',
                  margin:'5',':active':
                  {
                      backgroundColor:'white'
                  }
              }
          }>Save</Button>
            </>:<></>}
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default PostCard;