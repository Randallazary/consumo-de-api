const getInfo = async (userInp) => {
    const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
    
    try {
      const response = await fetch(url + userInp);
      const data = await response.json();
      
      if (data.drinks) {
        const myDrink = data.drinks[0];
        const ingredients = [];
        let count = 1;
        
        for (let i = 1; i <= 15; i++) {
          const ingredient = myDrink[`strIngredient${i}`];
          const measure = myDrink[`strMeasure${i}`];
          
          if (ingredient && measure) {
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        
        return {
          drink: myDrink,
          ingredients: ingredients
        };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  };
  
  export { getInfo };
  