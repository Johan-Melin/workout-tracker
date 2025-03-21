import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Text } from '~/components/nativewindui/Text';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Stats' }} />
      <View style={styles.container}>
        <Text className="text-2xl">Stats</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
