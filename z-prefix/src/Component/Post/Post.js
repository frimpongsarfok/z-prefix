import { Grid } from "@mui/material";
import React from "react"
import LeftMenu from "../LeftMenu/LeftMenu";
import NavigationBar from "../NavigationBar/NavigationBar.js"
import RightSideProfile from "../User/RightSideProfile";
import SearchResult from '../SearchResult/SearchResult';
import PostCard from "./PostCard";
import Kanye from '../../img/kanye.webp'


const style={
    height:'auto',
    
    child:{
         height:'auto',
         overflow:'auto',
    },
    postSession:{
        height:'90vh',
         overflow:'auto'
    }
}
const Post=(props)=>{
    const {credential}=props.app.state.user;
    const username=credential.username;
    const isLogin=props.app.isLogedIn();
   
    

    return (
        <section>
        <header>
            <NavigationBar app={props.app}/>
        </header>
        <article >
            <Grid container spacing={2} sx={style}>
                <Grid item xs={12} md={3} >
                    <LeftMenu app={props.app} ></LeftMenu>
                </Grid>
                <Grid item xs={12} md={6} sx={style.postSession} >
                    {props.app.state.searchResult.length?
                    
                    <SearchResult app={props.app}/>
            
                    :
                    props.app.state.post.length?props.app.state.post.map(ele=><PostCard key={ele.id} isLogIn={isLogin} fromMe={ele.user.username===username} post={ele}/>):<></>}
                </Grid>
                <Grid item xs={12} md={3}>
                    <RightSideProfile  app={props.app} ></RightSideProfile>
                </Grid>
            </Grid>
        </article>
    </section>);

}

export default Post;