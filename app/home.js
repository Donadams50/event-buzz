import  {SafeAreaView,View,ImageBackground} from 'react-native';

import { images} from '../constants';

import {Logo,Welcome} from '../components';

import styles from "../components/home/backgroundimage/Backgroundimage.style";

//This is the js file for the home page which comprises of 3 different component.
// The Imagebackground, the logo component and 
// the Welcome component(2 caption and a get started button) 
const Home = () => {

    return (
        <SafeAreaView style = {styles.safeAreaView}>
              <ImageBackground
                source={images.backgroundImage}
                style={styles.backgroundImage}
              >
                <View style={styles.container}>
                    <Logo></Logo>
                </View>
                <Welcome></Welcome>
            </ImageBackground>
        </SafeAreaView>
      );
}


export default Home;