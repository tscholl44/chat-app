import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase at the top-level, outside the App component!
const firebaseConfig = {
  apiKey: "AIzaSyCcTJAJX9tgg2vKgnZvC1jGW5jZdvBMlfM",
  authDomain: "chat-app-99ab2.firebaseapp.com",
  projectId: "chat-app-99ab2",
  storageBucket: "chat-app-99ab2.firebasestorage.app",
  messagingSenderId: "428948498459",
  appId: "1:428948498459:web:82314807d7e73366b8b0be"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// import the screens
import Start from './components/Start';
import Chat from './components/Chat';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;