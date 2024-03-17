import React from 'react';
import { Image, View} from 'react-native';

import styles from "./logo.style";


import { images} from '../../../constants';

const Logo = () => {
  return (
    <View style={styles.imageContainer} >
    <Image source={images.logoLeftWhite} style={styles.image} />
    <Image source={images.logoRightWhite} style={styles.image} />
  </View>
    
  );
};

export default Logo;
