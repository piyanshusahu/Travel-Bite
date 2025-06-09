import * as React from 'react'; 
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import HotelCard from './HotelCard.jsx'; // adjust the path if needed
import Box from '@mui/material/Box';

// Mock data (simulate database)
const hotelData = [
  {
    name: 'Taj Mahal Palace',
    image: '/media/images/hotp.webp',
    price: 1624,
    stars: 5,
    amenities: ['wifi', 'tv', 'ac', 'spa', 'pet', 'accessible'],
    description: 'Experience timeless luxury at the iconic Taj Mahal Palace in Mumbai...',
    rating: 4.7,
    reviews: 1044,
  },
  {
    name: 'The Oberoi',
    image: '/media/images/hotp.webp',
    price: 1980,
    stars: 4,
    amenities: ['wifi', 'tv', 'ac', 'spa'],
    description: 'Luxury and elegance in the heart of the city...',
    rating: 4.6,
    reviews: 865,
  },
   {
    name: 'The Oberoi',
    image: '/media/images/hotp.webp',
    price: 1980,
    stars: 4,
    amenities: ['wifi', 'tv', 'ac', 'spa'],
    description: 'Luxury and elegance in the heart of the city...',
    rating: 4.6,
    reviews: 865,
  },
 
];

export default function PinnedSubheaderList() {
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
          
          {hotelData.map((hotel, index) => (
            <HotelCard key={index} stayPlace={hotel} />
          ))}
        </ul>
      </li>
    </List>
    </Box>
  );
}
