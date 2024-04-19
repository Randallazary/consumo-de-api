import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff9de', 
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40, 
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredientsContainer: {
    marginBottom: 10,
  },
  ingredient: {
    marginBottom: 5,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
});

export default styles;
