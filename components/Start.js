import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';

const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState(colors[0]);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background-image.png")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text>This is the start screen!</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Type your username here'
        />
        <Text style={styles.chooseColorText}>Choose Background Color:</Text>
        <View style={styles.colorContainer}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                bgColor === color && styles.colorButtonSelected
              ]}
              onPress={() => setBgColor(color)}
              accessible={true}
              accessibilityLabel={`Select background color ${color}`}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.goToChatButton}
          onPress={() => navigation.navigate('Chat', { name: name, bgColor: bgColor })}
        >
          <Text style={styles.goToChatButtonText}>Go to Chat</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  chooseColorText: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20, // half of width/height for circle
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  colorButtonSelected: {
    borderColor: '#5F5F5F',
  },
  goToChatButton: {
    backgroundColor: '#757083',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  goToChatButtonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default Start;