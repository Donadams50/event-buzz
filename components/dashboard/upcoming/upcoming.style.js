import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -15,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    marginRight: 10,
    width: 200, 
    height: 300, 
    borderRadius: 10,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: '70%', 
    resizeMode: 'cover',
  },
  eventDetails: {
  
    marginTop:5
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 5,
  },
  dateTimeContainer: {
    position: 'absolute',
    top: 2,
    left:70,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    zIndex: 1,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
    
  },
 
  eventTime: {
    position: 'absolute',
    top: 5, 
    right: 5, 
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'left', 
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
});


export default styles;
