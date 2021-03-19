import React,{useState} from 'react';
import {Text,View,Image,TouchableOpacity,StyleSheet} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';


const App=()=>{
const [uri,setUri]=useState(DiceOne);
const [uri2,setUri2]=useState(DiceTwo);
const [uri3,setUri3]=useState(DiceThree);
const changeNumber=()=>{
  let randomNumber1=Math.floor((Math.random()*6))+1;
  let randomNumber2=Math.floor(Math.random()*6)+1;
  switch (randomNumber1,randomNumber2) {
    case 1:
      setUri(DiceOne);
      setUri2(DiceOne);
      break;
    case 2:
      setUri(DiceTwo);
      setUri2(DiceTwo);
      break;
    case 3:
      setUri(DiceThree);
      setUri2(DiceThree);
      break;
    case 4:
      setUri(DiceFour);
      setUri2(DiceFour);
      break;
    case 5:
      setUri(DiceFive);
      setUri2(DiceFive);
      break;
    case 6:
      setUri(DiceSix);
      setUri2(DiceSix);
      break;
    default:
      setUri(DiceOne);
      setUri2(DiceThree);
      break;
  }
}

const clickImageAndPlay=()=>{
  let randomImageKey=Math.floor(Math.random()*6)+1;
switch (randomImageKey) {
  case 1:
    setUri3(DiceOne);    
    break;
  case 2:
    setUri3(DiceTwo);    
    break;
  case 3:
    setUri3(DiceThree);    
    break;
  case 4:
    setUri3(DiceFour);    
    break;
  case 5:
    setUri3(DiceFive);    
    break;
  case 6:
    setUri3(DiceSix);    
    break;
  

  default:
    setUri3(DiceFour);
    break;
}

};


return(
  <>
  <View style={styles.container}>
  <Image source={uri} style={styles.image} />
  <Image source={uri2} style={styles.image} />  
  <TouchableOpacity onPress={changeNumber}>  
  <Text style={styles.playText}>
    Play Game
  </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={clickImageAndPlay}  >
   <Image source={uri3} style={[{marginTop:20},{width:100,height:100}]} />
   </TouchableOpacity>
  </View>
  </>
);

};
export default App;
const styles=StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'purple'
},
image:{
  width:200,
  height:200

},
playText:{
  fontSize:20,
  color:'yellow',
  marginTop:30,
  paddingHorizontal:40,
  paddingVertical:10,
  borderRadius:5,
  borderColor:'#30475E',
  borderWidth:2,
  fontWeight:'bold'
}
});