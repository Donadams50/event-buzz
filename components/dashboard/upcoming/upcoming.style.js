import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    marginRight: 10,
    width: 150, // Adjust card width as needed
    height: 200, // Adjust card height as needed
    borderRadius: 10,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: '70%', // 70% of card height for image
    resizeMode: 'cover',
  },
  eventDetails: {
    padding: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
});


export default styles;
