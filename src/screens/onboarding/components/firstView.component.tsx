import {Image, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {
  fontTitles,
  height,
  literataBold,
  literataRegular,
  violet,
  width,
} from '../../../utils/style.constants';
import {img} from '../../../utils/img.constants';

const FirstViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
      <Text style={styles.titleMessage}>Reborn:</Text>
        <Text style={styles.message}>Ciaossu</Text>
      </View>
      <Image
        style={[styles.img, {marginLeft: 40}]}
        source={{uri: img.reborn}}
      />

      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.span}>Vongola </Text>Cart
        </Text>

        <Text style={styles.subtitle}>
          The best place for save your purchases if you'r freak
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    width: width * 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  img: {
    height: height * 0.3,
    width: width * 0.57,
  },
  title: {
    color: 'white',
    fontFamily: fontTitles,
    fontSize: 25,
  },
  span: {
    color: violet,
  },
  subtitle: {
    fontFamily: literataRegular,
    color: 'white',
    textAlign: 'center',
    width: width * 0.6,
    fontSize: 14
  },
  messageBox: {
    width: width * 0.3,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
    position: 'absolute',
    left: 40,
    top: height * 0.35
  },
  message: {
    color: 'white',
    fontFamily: literataRegular
  },
  titleMessage: {
    color: violet,
    fontSize: 10,
    fontFamily: literataBold
  }
});

export default FirstViewComponent;
