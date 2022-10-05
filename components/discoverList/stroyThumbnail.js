import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import styles from './styles';
const StoryThumbnail = props => {
  const {story, onPressThumbnail} = props;
  const [opacity, setOpacity] = useState(1);
  const navigation = useNavigation();
  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });
  return (
    <Pressable
      style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}
      onPress={() => {
        onPressThumbnail(story);
        setOpacity(0);
      }}>
      <View key={story.id} style={[styles.container, {opacity}]}>
        <Image source={story.source} style={styles.image} />
      </View>
    </Pressable>
  );
};

export default StoryThumbnail;
