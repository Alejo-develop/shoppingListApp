import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {SelectComponentProps} from '../../interfaces/select.interface';
import {useState} from 'react';
import styles from './styles';

const SelectComponent = ({data, setName: onChange}: SelectComponentProps) => {
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
        valueField="name"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChange(item.name);
        }}
      />
    </View>
  );
};

export default SelectComponent;
