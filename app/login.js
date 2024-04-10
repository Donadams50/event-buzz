import  {SafeAreaView} from 'react-native';

import {Login, ModalMessage} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

const SignUpBase = () => {

    return (
        <SafeAreaView style = {styles.safeAreaView}>
              <Login ModalMessage={ModalMessage}></Login>
        </SafeAreaView>
      );
}


export default SignUpBase;