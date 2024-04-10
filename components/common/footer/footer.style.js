import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#083B51", 
        height: 60, 
        paddingHorizontal: 20, 
        borderTopWidth: 1, 
        borderTopColor: "#ccc", 
      },
      likeBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      likeBtnImage: {
        width: 50, 
        height: 0
      }
});

export default styles;
