import { View,  TouchableOpacity, Image } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.eventIconOrange}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.myTicketIconWhite}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
   
    </View>
  );
};

export default Footer;
