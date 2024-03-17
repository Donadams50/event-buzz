import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FE',
 
    height: '100%',
    justifyContent: 'center',
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#252528',
    textAlign: 'center', 
    padding: 10,

   
  },
  space: {
    height: 20,
  },
  button: {
    backgroundColor: '#083B51',
    padding: 10,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 1
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10, 
    flexGrow: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%'
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  alreadyRegisteredText: {
    fontSize: 12,
    marginRight: 5,
  },
  loginLink: {
    color: 'orange',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
