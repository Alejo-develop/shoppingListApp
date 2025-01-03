import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectComponentProps} from '../../interfaces/select.interface';
import {useState} from 'react';
import styles from './styles';
import { literataRegular, primaryBlack, violet } from '../../utils/style.constants';

const SelectComponent = ({data, setName, setColor}: SelectComponentProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{flexDirection: 'row'}}>
      <Dropdown
        style={styles.dropdown}
        data={data || []}
        labelField="name"
        containerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={[styles.inputSearchStyle]}
        itemContainerStyle={[styles.itemContainerStyle]}
        itemTextStyle={[styles.itemTextStyle]}
        dropdownPosition={'bottom'}
        activeColor={primaryBlack}
        valueField="name"
        fontFamily={literataRegular}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setName(item.name);
          setColor(item.color)
        }}
      />
    </View>
  );
};

export default SelectComponent;
