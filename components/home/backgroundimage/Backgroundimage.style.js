import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }, 
  
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5
  },
  safeAreaView:{
    flex:1
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#F3F7FE', // Adjust background color as needed
  },
  summaryContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchEventContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  upcomingEventContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
 
export default styles;
