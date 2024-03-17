import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(5, 5, 9, 0.5)', // Transparent white color
    borderTopRightRadius: 30,
    borderTopLeftRadius:30,
    padding: 20,
    height: '50%',
    width: '100%',
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
   
  },
  subCaption: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  space: {
    height: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
