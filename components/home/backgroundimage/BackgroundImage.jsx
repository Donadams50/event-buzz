import React from 'react';
import { ImageBackground,View } from 'react-native';

import styles from "./Backgroundimage.style";
import {Logo} from "../../../components";

const BackgroundImage = ({ source }) => {
  return (
    <ImageBackground
      source={source}
      style={styles.backgroundImage}
    >
   
    </ImageBackground>
    
  );
};

export default BackgroundImage;
