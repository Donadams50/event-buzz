import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -10,
    marginBottom: 10,
  },
  totalTicketcard: { 
    flex: 1,
    backgroundColor: '#FFA600', 
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center'
  },
  
 transactionsCard: {
    marginLeft: 10, 
    flex: 1,
    backgroundColor: '#083B51',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 3, 
    shadowColor: '#000', 
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
    marginBottom: 15,
  },
});

export default styles;
