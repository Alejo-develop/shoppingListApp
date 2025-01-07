import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';

interface ContainerPurchaseByCategorie {
  title: string;
  count: number;
}

const ContainerPurchaseByCategorie = ({
  title,
  count,
}: ContainerPurchaseByCategorie) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={{width: width * 0.47, paddingLeft: 13}}>
          <Text style={styles.title}>
            the majority of your purchases this month were in
          </Text>
        </View>
      </View>
      <View style={styles.containerStatic}>
        <Text style={styles.textStatic}>{count}</Text>
        <Text style={styles.textStatic}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.84,
    height: height * 0.08,
    backgroundColor: primaryBlack,
    flexDirection: 'row',
    elevation: 12,
  },
  containerTitle: {
    width: width * 0.515,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: literataBold,
    color: 'white',
    fontSize: 12,
  },
  containerStatic: {
    width: width * 0.32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 17,
  },
  textStatic: {
    textAlign: 'center',
    color: violet,
    fontFamily: literataRegular,
    fontSize: 12,
  },
});

export default ContainerPurchaseByCategorie;
