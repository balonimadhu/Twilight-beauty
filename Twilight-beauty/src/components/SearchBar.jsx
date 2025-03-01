import React, { useState } from 'react';
import { TextField , useMediaQuery,useTheme } from '@mui/material';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md")); 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearch}
      sx = {{
        width: isMatch ? '70%' : '30%',
        margin : isMatch ? '10px 20px' : '10px 80px',
        borderRadius : '5px',
        backgroundColor : "white",
        fontSize : isMatch ? '12px': '14px',
      }}
    />
  );
};

export default SearchBar;