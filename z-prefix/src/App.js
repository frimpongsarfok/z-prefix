import React,{Component} from 'react'
import {Route,Routes} from 'react-router-dom'
import Post from './Component/Post/Post.js';
import NewPost from './Component/Post/NewPost.js';
import User from './Component/User/User.js';
import SignUp from './Component/SignUp/signup';
import Cookies  from 'js-cookie';
import './App.css'
class App extends Component{
  
constructor(prop){
  super(prop);

   console.log('cookie',Cookies.get('username'),prop)
    this.state={
      user:{
        credential:{
          username:prop.user.credential.username,
          password:prop.user.credential.password,
        },
      fname:'',
      lname:'',
      email:'',
      displayImage:undefined
      },
      post:[],
      barTitle:'',
      serverAddress:'https://sdi8-z-prefix-api.herokuapp.com',
      serverMsg:{} ,
      isLogedIn:false,
      searchUser:{credential:{}},
      searchResult:[]
    }
    
    

}

//LOGIN AFTER COMPONENT MOUNT
componentDidMount(){
  const username=this.state.user.credential.username;
  const password=this.state.user.credential.password;
  
  if(username&&password){
    this.login(username,password)
  }else{
    this.getPost(false);
  }

}




handleGetUser(username){
  fetch(`${this.state.serverAddress}/user?username=${username}`,
  {method:'GET',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
    'Content-Type': 'application/json',
     'Accept':'application/json'
  }}).then(res=>res.json()).then(user=>{
  const state={...this.state}
     console.log('userrrr',user);
    
      this.setState({searchUser:user});
  }).catch(err=>console.log(err))
}
handleNewPost(event){
  event.preventDefault();
  const file=event.target.media.files[0];
  const media=file?file:undefined;
  
  const formData=new FormData();
  formData.append('title',event.target.title.value);
  formData.append('content',event.target.content.value);
  if(media)formData.append('media',media,event.target.title.value,event.target.content.value)
  fetch(`${this.state.serverAddress}/post`,
  {method:'POST',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
     'Accept':'application/json'     
  },body:formData})
  .then(resp=>resp.json())
  .then(msg=>this.setState({serverMsg:msg})).catch(err=>this.setState({serverMsg:err}));
}

handleEditPost(event){
  event.preventDefault();
  const file=event.target.displayImage.files[0];
  const media=file?file:undefined;
  const formData=new FormData();
  formData.append('title',event.target.title.value);
  formData.append('content',event.target.content.value);
  if(media)formData.append('media',media)
  fetch(`${this.state.serverAddress}/user`,
  {method:'PUT',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
     'Accept':'application/json'     
  },body:formData})
  .then(resp=>resp.json())
  .then(msg=>this.setState({serverMsg:msg})).catch(err=>this.setState({serverMsg:err}));
}


handleSaveUser(event){

  event.preventDefault();

  const file=event.target.displayImage.files[0];
  const displayImage=file?file:undefined;
 
  const formData=new FormData();
  formData.append('new_username',event.target.username.value);
  formData.append('lname',event.target.fname.value);
  formData.append('fname',event.target.lname.value);
  formData.append('email',event.target.email.value);
  formData.append('new_password',event.target.password.value);
  if(displayImage)formData.append('displayImage',displayImage)
  fetch(`${this.state.serverAddress}/user`,
  {method:'PUT',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
     'Accept':'application/json'     
  },body:formData})
  .then(resp=>resp.json())
  .then(msg=>{

 if(displayImage){
  console.log("set display image",file)
  const state={...this.state};
  
 state.user.displayImage=URL.createObjectURL(file);
 state.serverMsg=msg;
  this.setState(state);
  
 }else{
  console.log("no display image")
  this.setState({serverMsg:msg})
  
 }
}).catch(err=>this.setState({serverMsg:err}));
}
 handleLogIn(event){
  event.preventDefault();
  const username=event.target.username.value;
  const password=event.target.password.value;
  this.login(username,password)
}
componentDidCatch(err,errInfo){
  console.log(err,errInfo)
}
//LOGIN INTO ACCOUNT
isLogedIn(){
  return !!(this.state.user.credential.username && this.state.user.credential.password);
}
login(username,password){
  
  fetch(`${this.state.serverAddress}/login?username=${username}&password=${password}`,
  {method:'GET',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
    //'Content-Type': 'application/x-www-form-urlencoded',
     'Accept':'application/json'
  }})
  .then(resp=>resp.json())
  .then(data=>{
   if(data.username){
    const state={...this.state};
    state.user.credential.username=data.username;
    state.user.credential.password=data.password;
    state.user.email=data.email;
    state.user.fname=data.fname;
    state.user.lname=data.lname;
    state.user.displayImage=data.displayImage;
    state.serverMsg={}
 
    state.isLogedIn=true;
  this.setState(state);
   }else{
  
    this.setState({serverMsg:data})
   }
  this.getPost(false)

  }).catch(err=> console.log(err));
  
}


handleSetBarTitle(title){
  this.setState({barTitle:title});
}
logout(){
  
  fetch(`${this.state.serverAddress}/logout`,
  {method:'GET',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
     'Accept':'application/json'
  }}).then(msg=>{
  const state={...this.state}
  state.user.credential.username=null;
  state.user.credential.password=null;
  state.isLogedIn=false;
  this.setState(state);
})
}
handleSearchPost(event){
   const searchValue=event.target.value;

   if(searchValue.length){
    fetch(`${this.state.serverAddress}/search?value=${searchValue}`,
    {method:'GET',
    credentials:"include",
    referrerPolicy:"origin-when-cross-origin",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
       'Accept':'application/json'
    }})
    .then(res=>res.json())
    .then(data=>this.setState({searchResult:data}))
    .catch(err=>console.log(err));
   }else{
     this.setState({searchResult:[]})
   }
  
}
handleSignUp(event){

  event.preventDefault();
  fetch(`${this.state.serverAddress}/signup`,
  {method:'POST',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
     'Content-Type': 'application/json',
     'Accept':'application/json'     
  },body:JSON.stringify({
    lname:event.target.lname.value,
    fname:event.target.fname.value,
    username:event.target.username.value,
    password:event.target.password.value,
    email:event.target.email.value,
  })
})
  .then(resp=>resp.json())
  .then(msg=>this.setState({serverMsg:msg})).catch(err=>this.setState({serverMsg:err}));
}

getPost(myPost){

  fetch(`${this.state.serverAddress}/post?mypost=${myPost}`,
  {method:'GET',
  credentials:"include",
  referrerPolicy:"origin-when-cross-origin",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
     'Accept':'application/json'
  }}).then(res=>res.json()).then(post=>{
  const state={...this.state}
      
      if(myPost){
        this.setState({post:post});
        this.handleSetBarTitle('My Post');
      }else{
        this.handleSetBarTitle('All Post')
        this.setState({post:post});
        
      }
  }).catch(err=>console.log(err))

  
   return this.state.post;
}

render(){
 
    return ( 
    <Routes>
        <Route path='/' element={<Post app={this}/>}></Route>
         <Route path='/post' element={<Post app={this}/>}></Route>
         <Route path='/mypost' element={<Post app={this}/>} myPost={true}></Route>
        <Route path='/user' element={<User app={this}/>}></Route>
        <Route path='/signup' element={<SignUp app={this}/>}></Route>
        <Route path='/newpost' element={<NewPost app={this}/>}></Route> 
      </Routes> 
  );
}     
}

export default  App;


