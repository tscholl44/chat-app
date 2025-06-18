import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { disableNetwork, enableNetwork, getFirestore } from 'firebase/firestore';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start';
import Chat from './components/Chat';
import { getStorage } from 'firebase/storage';
import { useNetInfo } from '@react-native-community/netinfo';

const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();

// Firebase Config
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
  const storage = getStorage(app);

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost")
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {props => <Chat isConnected={connectionStatus.isConnected} db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;