import {fontTitles, height, literataRegular, primaryBlack, width} from '../../utils/style.constants';
import {StyleSheet, Text, View} from 'react-native';

const toastConfig = {
  tomatoToast: ({text1, text2, props}: any) => (
    <View style={styles.container}>
      <View style={styles.alert}>
        <View style={[styles.color, {backgroundColor: props.color}]}></View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{text1}</Text>
          <Text style={styles.info}>{text2}</Text>
          <Text>{props.uuid}</Text>
        </View>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    padding: 0
  },
  alert: {
    backgroundColor: primaryBlack,
    height: height * 0.1,
    width: width * 0.75,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 6,
    flexDirection: 'row'
  },
  color: {
    width: width * 0.03,
    height: height * 0.1,
    borderBottomLeftRadius: 12
  },
  containerInfo: {
    paddingLeft: 20,
    paddingTop: 10,
    width: width * 0.72,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fontTitles
  },
  info: {
    fontFamily: literataRegular
  }
});

export default toastConfig;
