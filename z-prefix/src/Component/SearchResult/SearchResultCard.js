import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function SearchResultCard(props) {
  const handleExpandClick = () => {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.name[0]}
          </Avatar>
        }
        title={props.name}
        subheader={props.username}
      />

      <CardContent>
        {props.media?<CardMedia
          component="img"
          height="100"
          image={props.media}
          alt="Paella dish"
        />:<></>}
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
