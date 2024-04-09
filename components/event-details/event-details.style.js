import { StyleSheet } from 'react-native';

const eventDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    height: 200,
    width: 400,
    marginBottom: 20,
  },
  distance: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold'
   
  },
  image: {
    height: 200,
    width:   400,
    resizeMode: 'cover',
  },
  contentContainer: {
    marginBottom: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    marginBottom: 10
  },
  
  infoText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontSize: 16
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default eventDetailsStyles;
