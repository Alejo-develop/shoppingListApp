import {Text,View} from 'react-native';
import styles from './styles';
import {useGlobalContext} from '../../context/global.context';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {
  const globlaContext = useGlobalContext();
  const user = globlaContext.getInfoUser()
  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.welcome}>Welcome <Text>{user.name}</Text></Text>
      </View>

      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default LayoutComponent;
