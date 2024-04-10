import  {SafeAreaView, View} from 'react-native';

import {Footer, Header,  TicketQRCode} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const Dashboard = () => {
    return (
    <SafeAreaView style = {styles.safeAreaView}>

      <View style={styles.dashboardContainer}>

                <Header />

                <View style={styles.eventListContainer}>
                   <TicketQRCode />
                </View>
  
        <Footer />
      </View>
    </SafeAreaView>
    );
};

export default Dashboard;