import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import LandingPage from './app/screens/LandingPage';
import ResponsePage from './app/screens/ResponsePage';

export default function App() {



const getJokeAxios = async () => {
  const { data } = await axios.get("https://v2.jokeapi.dev/joke/Any")
  console.log(data)
  // axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => {
  //   console.log(response.data)
  // })
}

  return (
    <ResponsePage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
