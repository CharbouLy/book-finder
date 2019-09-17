import React, { useContext } from 'react';
import { Text, ScrollView } from 'react-native';
import BookItem from './BookItem';
import { DataContext } from './Context';

const SearchResults = () => {
  const { data } = useContext(DataContext);
  const books = data.items || [];

  if (0 === data.totalItems) {
    return <Text>Rien frero</Text>
  } 

  return (
    <ScrollView>
      <BookItem books={books} />
    </ScrollView>
  );
};

export default SearchResults;
