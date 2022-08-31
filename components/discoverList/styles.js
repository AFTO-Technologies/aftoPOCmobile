import { StyleSheet } from 'react-native';
import { Platform ,Dimensions } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';

const margin = 16;
const borderRadius = 5;
const width = Dimensions.get("window").width / 2 - margin * 2;

const styles = StyleSheet.create({
    container: {
      width,
      height: width * 1.77,
      marginTop: 16,
      borderRadius,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,
      height: undefined,
      resizeMode: "cover",
      borderRadius,
    },
  });
  
  export default styles;