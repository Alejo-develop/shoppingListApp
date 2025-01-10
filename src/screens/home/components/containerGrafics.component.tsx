import {Image, StyleSheet, Text, View} from 'react-native';
import {img} from '../../../utils/img.constants';
import {
  height,
  literataBold,
  primaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';
import {BarChart} from 'react-native-gifted-charts';
import {PuchasesMostRaqtedInterface} from '../../../interfaces/item.interface';

interface Props {
  item: PuchasesMostRaqtedInterface[];
}

const ContainerGraphicsComponent = ({item}: Props) => {
  const barData = item.map(purchase => ({
    value: purchase.percentage,
    label: purchase.category,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Statistics of the month</Text>
      </View>

      <View style={styles.containerStatics}>
        <View style={styles.containerImg}>
          <Image style={styles.img} source={{uri: img.solari}} />
        </View>
        <View style={styles.containerGraphics}>
          <BarChart
            hideRules
            data={barData}
            frontColor={violet}
            backgroundColor={primaryBlack}
            maxValue={100}
            stepValue={10}
            xAxisLabelTextStyle={styles.labelStyles}
            labelWidth={10}
            spacing={50} 
            yAxisColor={'transparent'}
            xAxisColor={'transparent'}      
          />
        </View>
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
  containerTitle: {
    height: height * 0.05,
    alignItems: 'center',
  },
  title: {
    color: violet,
    fontFamily: literataBold,
    fontSize: 15,
  },
  containerStatics: {
    height: height * 0.28,
    width: width * 0.9,
    flexDirection: 'row',
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
    backgroundColor: primaryBlack,
    width: width * 0.6,
    justifyContent: 'flex-end',
    paddingRight: 11,
    paddingBottom: 10
  },
  labelStyles: {
    fontFamily: literataBold,
    fontSize: 12,
    textAlign: 'center'
  },
  
});

export default ContainerGraphicsComponent;
