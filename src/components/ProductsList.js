import React from 'react';
import { useFilterContext } from '../contexts/filterContext/filterContext';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const ProductsList = () => {
  const { dataList } = useFilterContext();

  return (
    <Box
      sx={{
        flex: '2.5',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {dataList &&
        dataList.map((item) => {
          const { id, title, category, cuisine, rating, price } = item;
          return (
            <Card sx={{ maxWidth: 345, margin: '2rem' }} key={id}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  category: {category}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  cuisine: {cuisine}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  rating: {rating}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  price: {price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
    </Box>
  );
};

export default ProductsList;
