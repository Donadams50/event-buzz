import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
    marginBottom: 10,
  },
  totalTicketcard: {
    flex: 1,
    backgroundColor: '#FFA600', // Adjust card background color as needed
    borderRadius: 10,
    padding: 15,
    elevation: 3, // For Android elevation
    shadowColor: '#000', // For iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center'
  },
  
 transactionsCard: {
    marginLeft: 10, 
    flex: 1,
    backgroundColor: '#083B51', // Adjust card background color as needed
    borderRadius: 10,
    padding: 15,
    elevation: 3, // For Android elevation
    shadowColor: '#000', // For iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff'
  },
  cardValue: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 15,// Adjust text color as needed
  },
});

export default styles;
