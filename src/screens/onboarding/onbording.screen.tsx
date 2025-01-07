import {View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {secondaryBlack} from '../../utils/style.constants';
import FirstViewComponent from './components/firstView.component';
import SecondViewComponent from './components/secondView.component';
import ThirdViewComponent from './components/thirdView.component';
import FourthViewComponent from './components/fourthView.component';
import {useState} from 'react';

const OnboardingScreen = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const hanldeDone = () => {
    setIsVisibleModal(true);
  };

  return (
    <Onboarding
      onSkip={hanldeDone}
      onDone={hanldeDone}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: secondaryBlack,
          image: <View style={{width: 0, height: 0}} />,
          title: <FirstViewComponent />,
          subtitle: '',
        },
        {
          backgroundColor: secondaryBlack,
          image: <View style={{width: 0, height: 0}} />,
          title: <SecondViewComponent />,
          subtitle: '',
        },
        {
          backgroundColor: secondaryBlack,
          image: <View style={{width: 0, height: 0}} />,
          title: <ThirdViewComponent />,
          subtitle: '',
        },
        {
          backgroundColor: secondaryBlack,
          image: <View style={{width: 0, height: 0}} />,
          title: <FourthViewComponent isVisible={isVisibleModal} onClose={() => setIsVisibleModal(false)} modal={setIsVisibleModal}/>,
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
