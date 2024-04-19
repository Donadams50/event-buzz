

import  {SafeAreaView, View} from 'react-native';

import {Footer, Header,  PaymentScreen} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const Payment = () => {
    return (
    <SafeAreaView style = {styles.safeAreaView}>

      <View style={styles.dashboardContainer}>

                <Header />

                <View style={styles.eventListContainer}>
                   <PaymentScreen />
                </View>
  
        <Footer />
      </View>
    </SafeAreaView>
    );
};

export default Payment;