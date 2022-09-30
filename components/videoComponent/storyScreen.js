import React from 'react';
import { Text, View , StyleSheet, Dimensions, Pressable , Image} from 'react-native';
import { SharedElement } from "react-native-shared-element";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useVector, snapPoint } from "react-native-redash"
import Images from '../images';
const StoryScreen = ({route,navigation}) => {
  const { item } = route.params;

const { height } = Dimensions.get("window");
const margin = 16;
const borderRadius = 5;
const containerwidth = Dimensions.get("window").width / 2 - margin * 2;
  // const renderItem

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

const onGestureEvent = useAnimatedGestureHandler({
  onActive:(event,ctx)=>{
    translateX.value= event.translationX
    translateY.value = event.translationY
  },

  onEnd:({velocityX, velocityY}) =>{
   const goBack = snapPoint(translateY.value, velocityY,[0, height]) === height;
   if(goBack){
    runOnJS(navigation.goBack)();
   }else{
    translateX.value =  withSpring(0,{velocity: velocityX});
    translateY.value = withSpring(0, {velocity: velocityY});
   }
  } 

});

const style = useAnimatedStyle(() =>{
  const scale =interpolate(
    translateY.value,
    [0, height],
    [1,0.2],
    Extrapolate.CLAMP
  )
  return{
    flex:1,
    transform: [
      {translateX: translateX.value * scale}, 
      {translateY: translateY.value * scale},
      {scale}
    ]

  }
});
console.log("Type===>", item)
  return (
    
    <PanGestureHandler onGestureEvent={onGestureEvent}>
    
    <Animated.View style={style} >
    <SharedElement key={item.id} >
      {
        item.type == "video" ?
        <Text>video</Text>:
        <Image 
     source={item.source} 
     style={{
      width: "100%", 
      height:"100%"
    }} 
    />
      }
    
     </SharedElement>
    </Animated.View>
    
    </PanGestureHandler>
   

  );
}
const styles = StyleSheet.create({
    container: {
     width: Dimensions.get("window").width / 2 - 16 * 2,
      height: 300,
      marginTop: 16,
      borderRadius : 5,
      borderWidth: 1,
      margin: 10,
    },
   
  })
 
export default StoryScreen;