import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Text } from '~/components/nativewindui/Text';

export default function Modal() {
  return (
    <>
      <Text className="text-2xl">Modal</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
