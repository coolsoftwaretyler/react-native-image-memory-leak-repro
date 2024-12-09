/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const images = [
  require('./image-1.jpg'),
  require('./image-2.jpg'),
  require('./image-3.jpg'),
  require('./image-4.jpg'),
];

const {width, height} = Dimensions.get('window');

function App(): React.JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={images[currentImageIndex]}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.button} onPress={handleNextImage}>
          <Text style={styles.buttonText}>Next Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.8,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

export default App;
