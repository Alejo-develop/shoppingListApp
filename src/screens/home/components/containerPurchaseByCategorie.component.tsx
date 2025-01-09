import {StyleSheet} from 'react-native';
import {Text, View, Image} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';
import React from 'react';
import {img} from '../../../utils/img.constants';

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
      {title && count ? (
        <>
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
        </>
      ) : (
        <>
          <Text
            style={{
              fontFamily: literataRegular,
              color: 'white',
              fontSize: 10,
              textAlign: 'center',
              width: width * 0.45,
              marginTop: 3,
              alignSelf: 'center',
              paddingLeft: 47
            }}>
            Here you could see Your categorie With most purchases
          </Text>

          <Image
            source={{uri: img.reborn3}}
            style={{
              width: width * 0.27,
              height: height * 0.078,
              position: 'absolute',
              right: 11,
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.84,
    height: height * 0.08,
    backgroundColor: primaryBlack,
    flexDirection: 'row',
    elevation: 6,
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
