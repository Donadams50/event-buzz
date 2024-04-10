import  {SafeAreaView, View} from 'react-native';

import {Footer, Header,  TicketPage} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const Dashboard = () => {
    return (
    <SafeAreaView style = {styles.safeAreaView}>

      <View style={styles.dashboardContainer}>

                <Header />

                <View style={styles.eventListContainer}>
                   <TicketPage />
                </View>
  
        <Footer />
      </View>
    </SafeAreaView>
    );
};

export default Dashboard;