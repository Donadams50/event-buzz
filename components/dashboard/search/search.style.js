import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -10,
    marginBottom: 1,
    flexDirection: 'row',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#083B51', 
    borderRadius: 10,
    justifyContent: 'center',
    overflow: 'hidden', 
    width: '85%',
    height: '75%',
    zIndex: 1, 
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#FFA500', 
    borderRadius: 100,
    width: '20%', 
    aspectRatio: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -20, 
    marginTop: -15,
    zIndex: 2,
    right: 0,
    top: 0,
    bottom: 0,
    paddingHorizontal: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default styles;
