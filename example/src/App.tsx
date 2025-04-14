import { multiply, signInWithGoogle, signOut } from 'react-native-google-acm';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button
        title="Sign In"
        onPress={() =>
          signInWithGoogle({
            nonce: '12313123123',
            serverClientId:
              '882363291751-2a37cchrq9oc1lfj1p419otvahnbhguv.apps.googleusercontent.com',
            autoSelectEnabled: false,
            filterByAuthorizedAccounts: true,
          })
            .then((credential) => {
              console.log(credential);
            })
            .catch((error) => {
              console.log(error);
            })
        }
      />
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
