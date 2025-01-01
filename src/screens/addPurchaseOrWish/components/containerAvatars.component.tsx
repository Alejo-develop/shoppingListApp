import {FlatList, Image, TouchableOpacity} from 'react-native';
import {avatars} from '../../../utils/img.constants';
import styles from '../style';

const AvatarContainerComponents = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={avatars}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.containerAvatar}>
          <Image style={styles.img} source={{uri: item.img}} />
        </TouchableOpacity>
      )}
      numColumns={3}
    />
  );
};

export default AvatarContainerComponents;
