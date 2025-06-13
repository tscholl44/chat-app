import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Platform, KeyboardAvoidingView, FlatList } from 'react-native';
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
  const { name, backgroundColor, userID } = route.params;
  const [messages, setMessages] = useState([]);
  const [lists, setLists] = useState([]);
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }


  useEffect(() => {
    navigation.setOptions({ title: name });
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())
        })
      })
      setMessages(newMessages);
    })
    return () => {
      if (unsubMessages) unsubMessages();
    }
  }, []);

  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // adjust if needed
    >
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <GiftedChat
          messages={messages}
          renderBubble={renderBubble}
          onSend={messages => onSend(messages)}
          user={{
            _id: userID,
            name: name
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Chat;