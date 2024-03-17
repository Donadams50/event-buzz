import  {SafeAreaView} from 'react-native';

import {SignUp} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const SignUpBase = () => {

    return (
        <SafeAreaView style = {styles.safeAreaView}>
              <SignUp></SignUp>
        </SafeAreaView>
      );
}


export default SignUpBase;