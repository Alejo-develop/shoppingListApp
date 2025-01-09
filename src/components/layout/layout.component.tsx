import {Text, View} from 'react-native';
import styles from './styles';
import {useGlobalContext} from '../../context/global.context';
import {useEffect} from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {
  const globlaContext = useGlobalContext();
  let user = globlaContext.getInfoUser();

  useEffect(() => {
    if (globlaContext.isUpdate) {
      user = globlaContext.getInfoUser();
      globlaContext.changeStatusUpdate(false);
    }
  }, [globlaContext.isUpdate]);

  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.welcome}>
          Welcome <Text>{user.name}</Text>
        </Text>
      </View>

      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default LayoutComponent;
