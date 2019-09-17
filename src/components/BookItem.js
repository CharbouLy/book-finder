import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';

const displayImageSrc = (imageLinks) => {
  return imageLinks ? imageLinks.smallThumbnail : 'http://www.hackatraz.com/images/team/majdi.jpg';
}

const displayAuthor = (authors) => {
  return authors ? authors.slice(0, 3).join(', ').slice(0, 60) : 'N/A';
}

const displayTitle = (title) => {
  return title ? title.slice(0, 60) : 'N/A';
}

const displayPublisher = (publisher) => {
  return publisher ? publisher.slice(0, 60) : 'N/A';
}

const BookItem = ({ books }) => {
  return books.map(book => {
    const { id, volumeInfo: { authors, title, publisher, imageLinks, infoLink } } = book;
    
    return (
      <View key={id}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: displayImageSrc(imageLinks)}} 
        />
        <Text>Auteur: {displayAuthor(authors)}</Text>
        <Text>{displayTitle(title)}</Text>
        <Text>Editeur: {displayPublisher(publisher)}</Text>
        <Button title="Achète-moi" onPress={ ()=>{ Linking.openURL(infoLink)}} />
      </View>
    )
  })
}

export default BookItem;