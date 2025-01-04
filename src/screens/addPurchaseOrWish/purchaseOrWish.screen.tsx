import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import InputComponent from '../../components/input/input.component';
import AvatarContainerComponents from './components/containerAvatars.component';
import ButtonGenericComponent from '../../components/buttonGeneric/buttonGeneric.component';
import SelectComponent from '../../components/select/select.component';
import SettingsItemHook from './hooks/settingsItem.hook';
import {useRoute} from '@react-navigation/native';

const AddNewItemScreen = () => {
  const route = useRoute();
  const {type} = route.params as any;
  
  const {
    categories,
    color,
    form,
    setCategorieId,
    createItem,
    handleFormChange,
    setColor,
    setImg,
    setNameCategory,
  } = SettingsItemHook();

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <HeaderComponent color={color} text={`Add ${type}`} />

      <View style={styles.containerPage}>
        <Text style={[styles.title, {color: color}]}>Select Img</Text>
        <View
          style={[
            styles.containerAvatars,
            {borderColor: color, borderWidth: 1},
          ]}>
          <AvatarContainerComponents color={color} setImg={setImg} />
        </View>

        <View style={styles.form}>
          <InputComponent
            color={color}
            entry={false}
            value="Name"
            placeholder={`Name of the ${type}...`}
            onChangeText={text => handleFormChange('name', text)}
          />
          <SelectComponent
            data={categories}
            setName={setNameCategory}
            setColor={setColor}
            setCategorieId={setCategorieId}
          />
          <InputComponent
            color={color}
            entry={false}
            value="Price"
            placeholder="Price..."
            onChangeText={text => handleFormChange('price', text)}
            keyBoardPad="decimal-pad"
          />
          <InputComponent
            color={color}
            entry={false}
            value="Description"
            placeholder="Description..."
            onChangeText={text => handleFormChange('description', text)}
          />
        </View>

        <ButtonGenericComponent
          text="Create"
          color={color}
          onPress={() => createItem({item: form, type: type})}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewItemScreen;
