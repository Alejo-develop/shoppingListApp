import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  width,
} from '../../../utils/style.constants';

interface CardinfoDetailProps {
  title: string;
  info: string | number;
  color: string;
}

const CardInfoDetailComponent = ({title, info, color}: CardinfoDetailProps) => {
  return (
    <View style={[style.container, {backgroundColor: color}]}>
      <Text style={style.title}>{title}</Text>
      <View>
        <Text style={style.info}>
          {typeof info === 'number' ? `$${info} COP` : info}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.28,
    height: height * 0.11,
    gap: 16,
  },
  title: {
    color: primaryBlack,
    fontFamily: literataBold,
  },
  info: {
    color: primaryBlack,
    fontFamily: literataRegular,
    textAlign: 'center',
    fontSize: 11
  },
});

export default CardInfoDetailComponent;
