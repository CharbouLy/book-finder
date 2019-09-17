import React, { useState } from 'react';
import SearchBarInput from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { DataContext } from '../components/Context';

const BookFinderScreen = () => {
  const [data, setData] = useState({});
  
  return (
    <DataContext.Provider value={{ data, setData }}>
      <SearchBarInput />
      <SearchResults />
    </DataContext.Provider>
  );
};

export default BookFinderScreen;
