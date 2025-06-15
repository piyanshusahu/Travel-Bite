import * as React from 'react'; 
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import HotelCard from './HotelCard.jsx'; 
import Box from '@mui/material/Box';

// Mock data 
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

export default function PinnedSubheaderList({stayPlace}) {
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
  {hotelData.map((hotel, index) => (
    <li
      key={index}
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
