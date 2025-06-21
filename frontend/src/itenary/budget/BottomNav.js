import * as React from 'react'; 
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import HotelCard from './HotelCard.jsx'; 
import Box from '@mui/material/Box';

export default function BottomNav({stayPlace}) {
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
  {stayPlace.map((hotel, index) => (
    <li
      key={hotel.id}
      style={{
        listStyle: 'none',
        scrollSnapAlign: 'start',
        height: '250px',
        marginBottom: '20px', //  spacing
        marginTop: index === 0 ? '16px' : '0px',
      }}
    >
      <HotelCard stayPlace={hotel} />
    </li>
  ))}
</List>
    </Box>
  );
}
