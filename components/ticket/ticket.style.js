import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    
      paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
    ticketContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      borderColor: 'lightgrey', // Thin line color
      borderWidth: 1, // Thin line width
    },
    imageCard: {
      width: '35%',
      backgroundColor: '#083B51',
      marginRight: -1, 
    },
    ticketImage: {
      width: '100%',
      height: 130,
    },
    infoCard: {
      width: '65%',
      backgroundColor: '#083B51',
      padding: 10,
    
    },
    ticketTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'white'
    },
    ticketInfo: {
      fontSize: 16,
      marginBottom: 5,
      color: 'white'
    },
    line: {
      width: 1, // Thin line width
      backgroundColor: 'lightgrey', // Thin line color
    },
    noTicketsContainer: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
      noTicketsText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  });
export default styles;