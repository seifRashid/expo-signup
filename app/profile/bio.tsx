import { Link } from "expo-router";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <View>
        <Text>Welcome to bio page</Text>
        <View style={styles.button}>
          <Link href="/profile/bio">
            <Text>Go to bio page</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button : {
    backgroundColor: 'green',
    padding: 10,
    width: '30%',
    margin: 10,
    borderRadius:10,
    color: 'white',
  }
});
