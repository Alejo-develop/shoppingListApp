import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';
import { img } from '../../../utils/img.constants';

interface NumPurchasesContainerComponentProps{
  num: number;
  img: string;
}

const NumPurchasesContainerComponent = ({num, img}: NumPurchasesContainerComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerStatistics}>
        <Text style={styles.num}>{num}</Text>
        <View style={{width: width * 0.4}}>
          <Text style={styles.text}>Number of purchases in the last month</Text>
        </View>
      </View>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={{uri: img}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryBlack,
    width: width * 0.84,
    height: height * 0.21,
    elevation: 6,
    flexDirection: 'row',
  },
  containerStatistics: {
    width: width * 0.515,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  num: {
    color: violet,
    fontFamily: literataRegular,
    fontSize: height * 0.04,
  },
  text: {
    textAlign: 'center',
    fontFamily: literataBold,
    fontSize: 14,
    color: 'white'
  },
  containerImg: {
    width: width * 0.32,
    justifyContent: 'flex-end'
  },
  img: {
    height: height * 0.175,
    width: width * 0.26
  },
});

export default NumPurchasesContainerComponent;
