import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import {violet} from '../../utils/style.constants';
import InputComponent from '../../components/input/input.component';
import AvatarContainerComponents from './components/containerAvatars.component';
import ButtonGenericComponent from '../../components/buttonGeneric/buttonGeneric.component';
import SelectComponent from '../../components/select/select.component';
import SettingsItemHook from './hooks/settingsItem.hook';

const AddNewItemScreen = () => {
  const {nameCategory, categories, setNameCategory} = SettingsItemHook();

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <HeaderComponent color={violet} text="Add Purchase" />

      <View style={styles.containerPage}>
        <Text style={styles.title}>Select Img</Text>
        <View style={styles.containerAvatars}>
          <AvatarContainerComponents />
        </View>

        <View style={styles.form}>
          <InputComponent
            color={violet}
            entry={false}
            value="Name"
            placeholder="Name of the purchase..."
          />
          <InputComponent
            color={violet}
            entry={false}
            value="Price"
            placeholder="Price..."
          />
          <SelectComponent data={categories} setName={setNameCategory} />
          <InputComponent
            color={violet}
            entry={false}
            value="Description"
            placeholder="Description..."
          />
        </View>

        <ButtonGenericComponent text="Create" color={violet} />
      </View>
    </ScrollView>
  );
};

export default AddNewItemScreen;

// style={[styles.img, item.img === imgSelected ? {borderWidth: 2, borderColor: color} : {}]}
