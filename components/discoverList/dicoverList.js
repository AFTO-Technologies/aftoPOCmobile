import React from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import StoryThumbnail from './stroyThumbnail';
import {SharedElement} from 'react-navigation-shared-element';
import Images from '../images';

const stories = [
  {
    id: 1,
    source: Images.asset1,
    user: 'user1',
  },
  {
    id: 2,
    source: Images.asset2,
    user: 'user2',
  },
  {
    id: 3,
    source: Images.asset3,
    user: 'user3',
  },
  {
    id: 4,
    source: Images.asset4,
    user: 'user4',
  },
  {
    id: 5,
    source: Images.asset5,
    user: 'user5',
  },
  {
    id: 6,
    source: Images.asset6,
    user: 'user6',
  },
  {
    id: 7,
    source: Images.asset7,
    video: Images.asset8,
    user: 'user7',
  },
];

const DicoverList = props => {
  const {navigation} = props;

  const onPressThumbnail = story => {
    navigation.navigate('StoryScreen', {
      item: story,
    });
  };
  return (
    <ScrollView>
      <View style={styles.contentcontainer}>
        {stories.map(story => {
          return (
            <SharedElement key={story.id} id={story.id}>
              <StoryThumbnail
                onPressThumbnail={onPressThumbnail}
                key={story.id}
                story={story}
              />
            </SharedElement>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default DicoverList;
