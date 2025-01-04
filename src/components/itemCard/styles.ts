import {StyleSheet} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  width,
} from '../../utils/style.constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryBlack,
    height: height * 0.1,
    width: width * 0.85,
    flexDirection: 'row',
    elevation: 6
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
  },
  img: {
    height: height * 0.08,
    width: width * 0.15,
  },
  containerInfo: {
    width: width * 0.39,
    justifyContent: 'center',
    gap: 10,
    paddingLeft: 12,
  },
  title: {
    color: 'white',
    fontFamily: literataBold,
    fontSize: height * 0.016,
  },
  categorie: {
    fontSize: height * 0.012,
  },
  containerPrice: {
    width: width * 0.26,
    justifyContent: 'center',
    paddingLeft: 10
  },
  price: {
    color: 'white',
    fontFamily: literataRegular,
    fontSize: 12,
    paddingBottom: 24
  },
});

export default styles;
