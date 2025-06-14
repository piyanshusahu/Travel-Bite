import * as React from 'react'; 
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import HotelCard from './HotelCard.jsx'; // adjust the path if needed
import Box from '@mui/material/Box';


export default function PinnedSubheaderList({stayPlace}) {
  return (
  <Box sx={{ padding: 2 }}>
  <List
    sx={{
      borderRadius: '16px',
      boxShadow: 3,
      overflow: 'auto',
      maxHeight: '100vh',
      bgcolor: 'background.paper',
    }}
    subheader={<li />}
  >
      <li>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          
          {stayPlace.map((hotel, index) => (
            <HotelCard key={index} stayPlace={hotel} />
          ))}
        </ul>
      </li>
    </List>
    </Box>
  );
}
