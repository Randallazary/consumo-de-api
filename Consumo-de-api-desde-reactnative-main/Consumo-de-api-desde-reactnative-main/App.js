import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, Image } from 'react-native';
import { getInfo } from './components/funciones';
import styles from './components/Estilos';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [drinkData, setDrinkData] = useState(null);

  const searchHandler = async () => {
    try {
      const data = await getInfo(userInput);
      setDrinkData(data);
      setUserInput('');
    } catch (error) {
      console.error(error);
      setDrinkData(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Introduce el nombre del cocktail ..."
          value={userInput}
          onChangeText={text => setUserInput(text)}
        />
        <Button title="Buscar" onPress={searchHandler} />
      </View>
      {drinkData && (
        <ScrollView>
          <Image style={styles.image} source={{ uri: drinkData.drink.strDrinkThumb }} />
          <Text style={styles.title}>{drinkData.drink.strDrink}</Text>
          <Text style={styles.heading}>Ingredients:</Text>
          <View style={styles.ingredientsContainer}>
            {drinkData.ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.ingredient}>{ingredient}</Text>
            ))}
          </View>
          <Text style={styles.heading}>Instructions:</Text>
          <Text>{drinkData.drink.strInstructions}</Text>
        </ScrollView>
      )}
      {drinkData === null && (
        <Text style={styles.message}>Please enter a valid input</Text>
      )}
    </View>
  );
};

export default App;
