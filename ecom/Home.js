import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { buyVanillaCake,buyPineAppleCake,buyChocoCake,addVanillaCake } from './redux/cakeSlice';
export default function Home() {
  const cake = useSelector((state)=>state.cake);
  const dispatch  = useDispatch();
  return (
   <View style={{marginTop:100}}>
     <Text>Open up App.js to start working on your app!</Text>
      <Text>Vanila Cakes in Store! {cake.vanillaCake}</Text>
      <Text>PineApple Cakes in Store! {cake.pineappleCake}</Text>
      <Text>Chocolate Cakes in Store! {cake.chocoCake}</Text>
      <Button title='Buy Vanila Cake' onPress={()=>{dispatch(buyVanillaCake())}} />
      <Button title='Buy Pineapple Cake' onPress={()=>{dispatch(buyPineAppleCake())}} />
      <Button title='Buy Chocolate Cake' onPress={()=>{dispatch(buyChocoCake())}} />
      <Button title='Add Vanilla Cake' onPress={()=>{dispatch(addVanillaCake(15))}} />


      <StatusBar style="auto" />
   </View>
  )
}
