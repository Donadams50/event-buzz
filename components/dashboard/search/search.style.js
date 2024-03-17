import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 1,
    marginBottom: 20,
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
    backgroundColor: '#FFA500', // Adjust button color as needed
    borderRadius: 100, // Make it round
    width: '20%', // Take 5% of the search button width
    aspectRatio: 1, // Ensure it remains square
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
    color: '#FFFFFF', // Adjust text color as needed
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default styles;
