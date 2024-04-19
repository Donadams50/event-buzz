import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FE',
    height: '100%',
    justifyContent: 'center',
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexGrow: 1,
  },
  cardField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {

    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',

    backgroundColor: '#083B51',
   
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles ;
