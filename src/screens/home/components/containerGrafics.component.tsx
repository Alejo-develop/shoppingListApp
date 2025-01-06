import {Image, StyleSheet, Text, View} from 'react-native';
import {img} from '../../../utils/img.constants';
import {
  height,
  literataBold,
  violet,
  width,
} from '../../../utils/style.constants';

const ContainerGraphicsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Estadisticas Del mes</Text>
      </View>

      <View style={styles.containerStatics}>
        <View style={styles.containerImg}>
          <Image style={styles.img} source={{uri: img.solari}} />
        </View>
        <View style={styles.containerGraphics}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.33,
    width: width * 0.9,
    alignItems: 'center',
  },
  containerTitle:{
    height: height * 0.05,
    alignItems: 'center',
   
  },
  title: {
    color: violet,
    fontFamily: literataBold,
    fontSize: 15
  },
  containerStatics: {
    height: height * 0.28,
    width: width * 0.9,
    flexDirection: 'row'
  },
  containerImg: {
    width: width * 0.3,
    justifyContent: 'flex-end',
  },
  img: {
    height: height * 0.28,
    width: width * 0.3,
  },
  containerGraphics: {
    backgroundColor: 'white',
    width: width * 0.6,
  },
});

export default ContainerGraphicsComponent;
