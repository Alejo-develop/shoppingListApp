import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import {InfoItemModalProps} from '../../../interfaces/modals.interface';
import {
  height,
  literataBold,
  primaryBlack,
  width,
} from '../../../utils/style.constants';
import ButtonGenericComponent from '../../buttonGeneric/buttonGeneric.component';
import CardInfoDetailComponent from './cardInfo.component';

const InfoCardModal = ({
  item,
  color,
  visibleModal,
  onClose,
}: InfoItemModalProps) => {
  return (
    <Modal
      visible={visibleModal}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={[styles.header, {backgroundColor: color}]}>
            <View
              style={[
                styles.containerImg,
                {borderWidth: 1, borderColor: color},
              ]}>
              <Image
                style={styles.img}
                source={{uri: item.img ? item.img : ''}}
              />
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.containerCardInfo}>
              <CardInfoDetailComponent
                title="Price"
                info={item.price}
                color={color}
              />
              <CardInfoDetailComponent
                title="Date"
                info={item.formattedDate ? item.formattedDate : ''}
                color={color}
              />
              <CardInfoDetailComponent
                title="Categorie"
                info={item.categorie}
                color={color}
              />
            </View>

            <View style={styles.containerDescription}>
              <Text style={{fontFamily: literataBold, textAlign: 'center',
                fontSize: 11
              }}>
                {item.description
                  ? item.description
                  : "This item Doesn't have description"}
              </Text>
            </View>

            <ButtonGenericComponent color={color} text="Ok" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: height * 0.08,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    backgroundColor: primaryBlack,
    height: height * 0.66,
    width: width * 1,
    elevation: 12,
    alignItems: 'center',
  },
  header: {
    height: height * 0.11,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingTop: height * 0.075,
    alignItems: 'center',
    gap: 27,
  },
  name: {
    fontFamily: literataBold,
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  containerImg: {
    backgroundColor: primaryBlack,
    width: width * 0.26,
    borderRadius: (width * 0.51) / 2,
    height: height * 0.115,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * -0.055,
    elevation: 6,
  },
  img: {
    height: height * 0.075,
    width: width * 0.175,
  },
  containerCardInfo: {
    flexDirection: 'row',
    gap: 20,
  },
  containerDescription: {
    width: width * 0.94,
    height: height * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
  },
});
export default InfoCardModal;
