import Toast from "react-native-toast-message";

interface MessageProps {
  type: 'success' | 'error' | 'info';
  text1: string;
  text2?: string;
  position?: 'top' | 'bottom';
  visibilityTime?: number;
  autoHide?: boolean;
  color: string
}

const MessageComponent = ({
  type,
  text1,
  text2,
  position = 'bottom',
  visibilityTime = 3000,
  autoHide = true,
  color
}: MessageProps) => {
  Toast.show({
    type: 'tomatoToast',
    position,
    text1,
    text2,
    visibilityTime,
    autoHide,
    props: {color: color}
  });
};

export default MessageComponent;
