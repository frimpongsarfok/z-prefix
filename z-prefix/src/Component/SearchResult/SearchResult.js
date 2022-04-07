import SearchResultCard from './SearchResultCard'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function SearchResult(props){
 return(<Box sx={{ flexGrow: 1 ,textAlign:'center'}}>
      <Grid container spacing={2} sx={{textAlign:'center'}}>
        {props.app.state.searchResult.map(ele=><Grid key={ele.id} item xs={6} md={4}><SearchResultCard name={`${ele.fname} ${ele.fname}`} username={ele.username} title={ele.title} media={ele.media}/></Grid>)}
      </Grid>
    </Box>)
    
}