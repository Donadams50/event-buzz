import  {SafeAreaView} from 'react-native';

import {Login} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const SignUpBase = () => {

    return (
        <SafeAreaView style = {styles.safeAreaView}>
              <Login></Login>
        </SafeAreaView>
      );
}


export default SignUpBase;