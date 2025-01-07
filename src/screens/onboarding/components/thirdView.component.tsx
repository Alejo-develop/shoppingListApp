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

const ThirdViewComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.titleMessage}>Lambo:</Text>
        <Text style={styles.message}>Damn reborn!</Text>
      </View>
      <Image
        style={[styles.img, {marginRight: 40}]}
        source={{uri: img.lambo}}
      />

      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>
          Create categories
          <Text style={styles.span}>
            {' '}
            and customize your purchases and wishes as{' '}
          </Text>
          you wish!
        </Text>

        <Text style={styles.subtitle}>
          Choose from different colors and images for your categories, as well
          as choose the image you want for your purchases and wishes, all images
          and banners are inspired in different content of the geek world.
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
    color: violet,
    fontFamily: fontTitles,
    fontSize: 22,
    textAlign: 'center',
    width: width * 0.8,
  },
  span: {
    color: 'white',
  },
  subtitle: {
    fontFamily: literataRegular,
    color: 'white',
    textAlign: 'center',
    width: width * 0.6,
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
    textAlign: 'center',
  },
  titleMessage: {
    color: violet,
    fontSize: 10,
    fontFamily: literataBold,
  },
});

export default ThirdViewComponent;
