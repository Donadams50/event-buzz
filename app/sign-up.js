import  {SafeAreaView} from 'react-native';

import {SignUp, ModalMessage} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const SignUpBase = () => {

    return (
        <SafeAreaView style = {styles.safeAreaView}>
              <SignUp  ModalMessage={ModalMessage}></SignUp>
        </SafeAreaView>
      );
}


export default SignUpBase;