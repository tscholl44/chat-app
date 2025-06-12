// import firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import the screens
import Start from './components/Start';
import Chat from './components/Chat';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// create the navigator
const Stack = createNativeStackNavigator();



const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCcTJAJX9tgg2vKgnZvC1jGW5jZdvBMlfM",
    authDomain: "chat-app-99ab2.firebaseapp.com",
    projectId: "chat-app-99ab2",
    storageBucket: "chat-app-99ab2.firebasestorage.app",
    messagingSenderId: "428948498459",
    appId: "1:428948498459:web:82314807d7e73366b8b0be"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
          {props => <Chat db={db} Storage={Storage} isConnected={netInfo.isConnected} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;