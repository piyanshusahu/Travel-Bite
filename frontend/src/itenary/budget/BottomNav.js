// import * as React from 'react';
// import { useState } from 'react';
// import List from '@mui/material/List';
// import ListSubheader from '@mui/material/ListSubheader';
// import Box from '@mui/material/Box';
// import HotelCard from './HotelCard.jsx';
// import HostelCard from './HostelCard.jsx';
// import DormitoryCard from './DormitoryCard.jsx';

// export default function BottomNav({ stayPlace, type }) {
//   const [isHovering, setIsHovering] = useState(false);

//   // Effect to add/remove a class from the body
//   React.useEffect(() => {
//     if (isHovering) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }

//     // Cleanup function to remove the class when the component unmounts
//     return () => {
//       document.body.classList.remove('no-scroll');
//     };
//   }, [isHovering]);

//   const renderCard = (place) => {
//     switch (type) {
//       case "hotel":
//         return <HotelCard stayPlace={place} />;
//       case "hostel":
//         return <HostelCard stayPlace={place} />;
//       case "dorm":
//         return <DormitoryCard stayPlace={place} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <List
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         sx={{
//           borderRadius: '16px',
//           bgcolor: 'transparent',
//           marginTop: '20px',
//           pt: '20px',
//           maxHeight: '108vh',
//           overflowY: 'auto', // Always enable internal scrolling
          
//           // Optional: hide scrollbars for cleaner UI
//           '&::-webkit-scrollbar': { display: 'none' },
//           '-ms-overflow-style': 'none',
//           'scrollbar-width': 'none',
//         }}
//       >
//         {stayPlace.map((place, index) => (
//           <li
//             key={place.id || index}
//             style={{
//               listStyle: 'none',
//               scrollSnapAlign: 'start',
//               height: '250px',
//               marginBottom: '20px',
//               marginTop: index === 0 ? '16px' : '0px',
//             }}
//           >
//             {renderCard(place)}
//           </li>
//         ))}
//       </List>
//     </Box>
//   );
// }

import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import HotelCard from './HotelCard.jsx';
import HostelCard from './HostelCard.jsx';
import DormitoryCard from './DormitoryCard.jsx';

export default function BottomNav({ stayPlace, type }) {
  const [isHovering, setIsHovering] = useState(false);

  // Effect to add/remove a class from the body
  React.useEffect(() => {
    if (isHovering) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isHovering]);

  const renderCard = (place) => {
    switch (type) {
      case "hotel":
        return <HotelCard stayPlace={place} />;
      case "hostel":
      return <HostelCard stayPlace={place} />;
      case "dorm":
      return <DormitoryCard stayPlace={place} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <List
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          borderRadius: '16px',
          bgcolor: 'transparent',
          marginTop: '20px',
          pt: '20px',
          maxHeight: '108vh',
          overflowY: 'auto', // Always enable internal scrolling
          
          // Optional: hide scrollbars for cleaner UI
          '&::-webkit-scrollbar': { display: 'none' },
          // FIX: Changed kebab-case to camelCase
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {stayPlace.map((place, index) => (
          <li
            key={place.id || index}
            style={{
              listStyle: 'none',
              scrollSnapAlign: 'start',
              height: '250px',
              marginBottom: '20px',
              marginTop: index === 0 ? '16px' : '0px',
            }}
          >
            {renderCard(place)}
          </li>
        ))}
      </List>
    </Box>
  );
}