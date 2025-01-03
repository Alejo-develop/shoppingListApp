import {FlatList, Image, Modal, TouchableOpacity, View} from 'react-native';
import {ImgBannerModalProps} from '../../interfaces/modals.interface';
import styles from './style';
import HeaderModalComponent from '../headerModal/headerModal.component';
import {bannersCategory} from '../../utils/img.constants';
import ButtonGenericComponent from '../buttonGeneric/buttonGeneric.component';
import {useState} from 'react';

const ImgBannerModal = ({
  visibleModal,
  onClose,
  color,
  setImg,
  onCloseWithImg,
}: ImgBannerModalProps) => {
  const [imgSelected, setImgSelected] = useState<string | null>(null);
  const handleSelect = (img: string) => {
    setImgSelected(img);
    setImg(img);
  };

  return (
    <Modal
      visible={visibleModal}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <HeaderModalComponent
            text="Select Image"
            color={color}
            hanldeClose={onClose}
          />

          <View style={styles.containerBanners}>
            <FlatList
              contentContainerStyle={styles.list}
              data={bannersCategory}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item.img)}
                  style={styles.banner}>
                  <Image
                    style={[
                      styles.img,
                      item.img === imgSelected
                        ? {borderWidth: 2, borderColor: color}
                        : {},
                    ]}
                    source={{uri: item.img}}
                  />
                </TouchableOpacity>
              )}
              numColumns={2}
            />
          </View>

          <View style={styles.containerButton}>
            <ButtonGenericComponent
              text="Done"
              color={color}
              onPress={onCloseWithImg}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImgBannerModal;
