import {FlatList, Image, TouchableOpacity} from 'react-native';
import {avatars} from '../../../utils/img.constants';
import styles from '../style';
import {SetStateAction, useState} from 'react';

interface AvatarContainerProps {
  setImg: React.Dispatch<SetStateAction<string | null>>;
  color: string;
}

const AvatarContainerComponents = ({color, setImg}: AvatarContainerProps) => {
  const [imgSelected, setImgSelected] = useState<string | null>(null);
  const handleSelect = (img: string) => {
    setImgSelected(img);
    setImg(img);
  };

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={avatars}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.containerAvatar}
          onPress={() => handleSelect(item.img)}>
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
      numColumns={3}
    />
  );
};

export default AvatarContainerComponents;
