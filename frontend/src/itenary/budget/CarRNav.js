import * as React from 'react'; 
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import CarRCard from './HotelCard.jsx'; 
import Box from '@mui/material/Box';

export default function CarRNav({places}) {
  return (
  <Box sx={{ padding: 2 }} >
  <List
  sx={{
    borderRadius: '16px',
    overflowY: 'auto',
    maxHeight: '108vh', 
    bgcolor: 'transparent',
    scrollSnapType: 'y mandatory',
    scrollBehavior: 'smooth',
    marginTop:'20px',
    pt: '20px',

       // Hide scrollbar
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',  
    'scrollbar-width': 'none',     

  }} 
  
>
  {places.map((carRental, index) => (
    <li
      key={carRental.id}
      style={{
        listStyle: 'none',
        scrollSnapAlign: 'start',
        height: '250px',
        marginBottom: '20px', //  spacing
        marginTop: index === 0 ? '16px' : '0px',
      }}
    >
      <CarRCard  key={carRental._id} places={carRental} />
    </li>
  ))}
</List>
    </Box>
  );
}
