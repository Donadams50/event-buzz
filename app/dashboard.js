import  {SafeAreaView, View} from 'react-native';

import {Footer, Header, DashboardSummary, DashboardSearchButton, DashboardUpcomingEvent} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const Dashboard = () => {
    return (
    <SafeAreaView style = {styles.safeAreaView}>

      <View style={styles.dashboardContainer}>

                <Header />

                <View style={styles.summaryContainer}>
                   <DashboardSummary />
                </View>
            
                <View style={styles.searchEventContainer}>
                   <DashboardSearchButton />
                </View>
        
            
                <View style={styles.upcomingEventContainer}>
                   <DashboardUpcomingEvent />
                </View>
  
        <Footer />
      </View>
    </SafeAreaView>
    );
};

export default Dashboard;