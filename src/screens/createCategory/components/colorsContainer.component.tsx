import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, height, width} from '../../../utils/style.constants';
import { SetStateAction } from 'react';

const ColorsContainer = ({onChange} : {onChange: React.Dispatch<SetStateAction<string>>}) => {
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.containerColor,
            {backgroundColor: color.color},
          ]}
          onPress={() => onChange(color.color)}></TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerColor: {
    height: height * 0.04,
    width: width * 0.1,
  },
});

export default ColorsContainer;
