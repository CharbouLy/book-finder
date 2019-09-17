import React, { useState, useContext } from 'react';
import { SearchBar, Button, Icon } from 'react-native-elements';
import axios from 'axios';
import { DataContext } from './Context'

const SearchBarInput = () => {
  const [value, onChangeText] = useState('');
  const { setData } = useContext(DataContext);

  const getBooksData = (query) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => {
        const books = res.data;
        setData(books);
    })
  };

  return (
    <>
      <SearchBar
        onChangeText={onChangeText}
        value={value}
        label='Book Finder chacal'
        placeholder='Auteur, titre..'
      />
      <Button
        onPress={() => getBooksData(value)}
        title="Cherche un livre le sang"
        icon={
          <Icon
            name="book"
            size={17}
            color="white"
          />
        }
      />
    </>
  );
};

export default SearchBarInput;
