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

const SecondViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.titleMessage}>Tsuna:</Text>
        <Text style={styles.message}>Keep track of your purchases</Text>
      </View>
      <Image
        style={[styles.img, {marginRight: 40}]}
        source={{uri: img.tsuna}}
      />

      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>
          Save Your <Text style={styles.span}>Pruchases</Text> and <Text style={styles.span}>Wishes</Text>
        </Text>

        <Text style={styles.subtitle}>
          We know that out there there are many things that we buy on a daily
          basis and many others that remain as wishes.
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
    width: width * 0.8,
    fontSize: 12,
  },
  messageBox: {
    width: width * 0.3,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
    position: 'absolute',
    right: 20,
    top: height * 0.35,
  },
  message: {
    color: 'white',
    fontFamily: literataRegular,
    fontSize: 10,
    textAlign: 'center'
  },
  titleMessage: {
    color: violet,
    fontSize: 10,
    fontFamily: literataBold,
  },
});

export default SecondViewComponent;
