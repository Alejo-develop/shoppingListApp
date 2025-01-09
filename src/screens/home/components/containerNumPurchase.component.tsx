import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';
import {img} from '../../../utils/img.constants';
import React from 'react';

interface NumPurchasesContainerComponentProps {
  num: number;
  imgForComponent: string;
}

const NumPurchasesContainerComponent = ({
  num,
  imgForComponent,
}: NumPurchasesContainerComponentProps) => {
  return (
    <View style={styles.container}>
      {num && imgForComponent ? (
        <>
          <View style={styles.containerStatistics}>
            <Text style={styles.num}>{num}</Text>
            <View style={{width: width * 0.4}}>
              <Text style={styles.text}>
                Number of purchases in the last month
              </Text>
            </View>
          </View>
          <View style={styles.containerImg}>
            <Image style={styles.img} source={{uri: imgForComponent}} />
          </View>
        </>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: width * 0.125,
          }}>
          <Text
            style={{
              fontFamily: literataRegular,
              color: 'white',
              textAlign: 'center',
              fontSize: 12,
              width: width * 0.6,
            }}>
            Create categories to register your purchases in the menu and here we
            will tell you how many purchases you have made in the month ;)
          </Text>

          <Image
            source={{uri: img.piramidHead}}
            style={{width: width * 0.3, height: height * 0.1, position: 'absolute',
              bottom: 1,
              right: -30,
              zIndex: -1
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryBlack,
    width: width * 0.84,
    height: height * 0.21,
    elevation: 6,
    flexDirection: 'row',
  },
  containerStatistics: {
    width: width * 0.515,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  num: {
    color: violet,
    fontFamily: literataRegular,
    fontSize: height * 0.04,
  },
  text: {
    textAlign: 'center',
    fontFamily: literataBold,
    fontSize: 14,
    color: 'white',
  },
  containerImg: {
    width: width * 0.32,
    justifyContent: 'flex-end',
  },
  img: {
    height: height * 0.175,
    width: width * 0.26,
  },
});

export default NumPurchasesContainerComponent;
