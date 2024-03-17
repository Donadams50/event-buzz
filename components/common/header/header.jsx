import { View, Text, Image } from 'react-native';
import styles from "./header.style";
import { icons } from "../../../constants";

const Header = () => {
  return (
    <View style={styles.container}>
  
        
        <View style={styles.iconContainer}>
            <Image
            source={icons.logoIconWhite}
            style={styles.icon}
            resizeMode="contain"
            />
        </View>

        <View style={styles.iconContainer}>
        <Image
          source={icons.eventBuzzWordIconWhite} 
          style={styles.icon}
          resizeMode="contain"
        />
     
     </View>
     
   
      
     
     
    </View>
  );
};


export default Header;
