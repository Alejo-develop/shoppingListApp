import {StyleSheet} from 'react-native';
import { height, primaryBlack, width } from '../../utils/style.constants';

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.05,
    width: width * 0.6,
    paddingHorizontal: 8,
    backgroundColor: primaryBlack,
    elevation: 6,
  },
  label: {
    position: 'absolute',
    left: 22,
    zIndex: 999,
    top: height * -0.01,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: primaryBlack,
    borderRadius: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
    borderRadius: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 12,
  },
  itemContainerStyle: {
    marginLeft: 12,
    width: width * 0.4,
    backgroundColor: primaryBlack,
    color: primaryBlack,
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 8,
    borderRadius: 12,
    fontWeight: '600',
    backgroundColor: primaryBlack,
  },
  dropdownContainer: {
    backgroundColor: primaryBlack,
    borderRadius: 12,
    borderColor: primaryBlack,
  },
  selectedItemContainerStyle: {backgroundColor: primaryBlack},
});

export default styles;
