import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
      </Provider>
  );
}


