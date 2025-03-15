import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';

export default function Modal() {
  return (
    <View>
      <Text className="text-2xl">Modl</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
