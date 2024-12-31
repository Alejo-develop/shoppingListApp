import {
  Animated,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  primaryBlack,
  width,
} from '../../utils/style.constants';
import {useState} from 'react';

export interface InputGenericProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  entry: boolean;
  keyBoardPad?: KeyboardTypeOptions;
  color: string;
}

const InputComponent = ({
  placeholder,
  value,
  onChangeText,
  keyBoardPad,
  color,
}: InputGenericProps) => {
  const [isFocused, setFocused] = useState(false);
  const labelPosition = useState(new Animated.Value(0))[0];

  const handleFocus = () => {
    setFocused(true);
    Animated.timing(labelPosition, {
      toValue: -35,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setFocused(false);
    Animated.timing(labelPosition, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={[
          styles.labelContainer,
          {
            transform: [{translateY: labelPosition}],
          },
        ]}>
        <Text
          style={[
            styles.label,
            {
              fontSize: isFocused || value !== '' ? 14 : 16,
              color: color
            },
          ]}>
          {value}
        </Text>
      </Animated.View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? color : 'transparent',
            borderWidth: isFocused ? 1 : 0,
          },
        ]}
        placeholder={placeholder}
        editable={true}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
        keyboardType={keyBoardPad}
        focusable={true}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: height * 0.05,
    width: width * 0.6,
    backgroundColor: primaryBlack,
    paddingLeft: 12,
    elevation: 6,
    fontFamily: literataRegular,
  },
  labelContainer: {
    position: 'absolute',
    top: 15,
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: literataBold
  },
});

export default InputComponent;
