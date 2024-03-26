import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 1,
    marginBottom: 10,
    marginTop: -15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  eventCard: {
    width: '50%', // Adjust the width to allow space for two cards on a row
    height: 300,
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 20,
    padding:2
  },
  eventImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  eventDetails: {
    marginTop: 5,
    marginLeft:5,
    marginRight: 5
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dateTimeContainer: {
    position: 'absolute',
    top: 2,
    left: 70,
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
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
   
    marginBottom: 50,
  },
  searchButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cancelIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  filterButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'lightgray', 
    paddingRight: 8, 
    borderRadius: 5, 
    marginRight: 5

  },
  buttonText: {
    marginLeft: 5, 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: 'black', 
  },
  inputContainer: {
   
    color:'white'
  },
  label: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '500',
  },
 
});

export default styles;
