import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const MovieCard = ({movie}) => {
  return (
    <Card sx={{ display: "flex", width: '400px' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://placekitten.com/400"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.release_date}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Rating name="movie-rating" defaultValue={movie.vote_average} precision={0.1} readOnly/>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCard;
