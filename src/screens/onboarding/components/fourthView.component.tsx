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
import StartedFormModal from './startedForm.modal';
import { SetStateAction } from 'react';

interface FourthViewComponentProps {
  isVisible: boolean;
  onClose: () => void;
  modal: React.Dispatch<SetStateAction<boolean>>;
}

const FourthViewComponent = ({
  isVisible,
  onClose,
  modal
}: FourthViewComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.titleMessage}>Reborn:</Text>
        <Text style={styles.message}>
          The road is long, but stay strong, you've come this far.
        </Text>
      </View>
      <Image style={[styles.img]} source={{uri: img.reborn2}} />

      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>
          Finally, a few <Text style={styles.span}>Statistics</Text>
        </Text>

        <Text style={styles.subtitle}>
          Month by month we will tell you how many purchases you have made,
          where you have bought the most, among other things.
        </Text>
      </View>
      <StartedFormModal visibleModal={isVisible} onClose={onClose} modal={modal}/>
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
    fontSize: 12,
  },
  messageBox: {
    width: width * 0.4,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
    position: 'absolute',
    left: width * 0.31,
    top: height * 0.17,
  },
  message: {
    color: 'white',
    fontFamily: literataRegular,
    fontSize: 10,
    textAlign: 'center',
    width: width * 0.3,
  },
  titleMessage: {
    color: violet,
    fontSize: 10,
    fontFamily: literataBold,
  },
});

export default FourthViewComponent;
