import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default class App extends React.Component{
  render(){
    return(
      <View>
        <View style = {styles.container}>
          <Blink text= "I Love Blink"/>
        </View>
        <View style = {styles.text2}>
          <Text> "Yes blinking is so great"</Text>
          <Text> "Why did they ever take this out of HTML"</Text>
          <Text> "Look at me! look at me! "</Text>
        </View>
      </View>
    )
  }
}

const Blink = (props) =>{
  const [isShowingText, setIsShowingText] = useState(true);
  
  useEffect(() =>{
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);
    
    return () => clearInterval(toggle);
})

  if (!isShowingText){
    return null;
  }

  return <Text style = {{fontSize: 100, fontWeight: 'bold'}}> {props.text} </Text>
  
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'lightyellow',
      alignItems: 'center',
      marginTop: Constants.statusBarHeightd
    },
    text2: {
      backgroundColor: 'lightpink',
      alignItems: 'center',
      marginTop: Constants.statusBarHeightd
    }
});
