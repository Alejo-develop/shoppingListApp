import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ButtonPurchaseCardProps} from '../../interfaces/button.interface';
import InfoCardModal from './components/infoItem.modal';
import UseItemCard from './hooks/useItemCard.hook';

const ItemCardComponent = ({
  img,
  id,
  color,
  title,
  categorie,
  date,
  price,
  description,
  categorieId,
  formattedDate,
  itemType,
}: ButtonPurchaseCardProps) => {
  const {isVisibleModal, setVisibleModal, changeToPurchased, deleteItem} =  
  UseItemCard(id, color, {
      img: img ? img : '',
      id,
      name: title,
      categorie,
      date,
      price,
      description: description ? description : '',
      categorieId,
    });

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        key={id}
        onPress={() => setVisibleModal(true)}>
        <View style={styles.containerImage}>
          <Image style={styles.img} source={{uri: img}} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.categorie, {color: color}]}>{categorie}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>${price} COP</Text>
          {itemType === 'wish' ? (
            <Text style={[styles.statusText, {color: color}]}>
              Status: Pending
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>

      <InfoCardModal
        visibleModal={isVisibleModal}
        onClose={() => setVisibleModal(false)}
        color={color}
        type={itemType}
        item={{
          id,
          name: title,
          categorie,
          formattedDate: formattedDate,
          price,
          img: img ? img : '',
          description: description ? description : 'N/A',
        }}
        changeToPurchased={changeToPurchased}
        deleteWish={deleteItem}
      />
    </View>
  );
};

export default ItemCardComponent;
