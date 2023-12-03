import { StatusBar} from 'expo-status-bar';
import React,{useState}from "react";
import { StyleSheet, Text, View, Image, SafeAreaView,TextInput, Button, alert, Alert, TouchableOpacity,props, FlatList, SectionList,renderItem,keyExtractor } from 'react-native';
import {NavigationContainer}from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import App3 from './FILE2'
import App4 from './FILE2'
import App6 from './FILE2'

const Stack=createNativeStackNavigator();
export default function App1() {

    return(
        
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name= 'App2' component={App2}/>
              <Stack.Screen name= 'App3' component={App3}/>
              <Stack.Screen name= 'App4' component={App4}/>
              <Stack.Screen name='bottomTab' component={App3} />
          </Stack.Navigator>
     
      )}

      const App2=(props)=>{
    const[mobile, setMobile]=useState("")
    return(  
    <View style={styles.container}>
              <View>
                  <Text style={{marginTop:100, marginLeft:100, color:'white', fontSize:25, fontWeight:'900'}}>Welcome Abroad!</Text>  
                  <Text style={{marginTop:20, marginLeft:110, color:'white', fontSize:15}}>Let's get you career ready.</Text>
                  <Text style={{marginTop:70, marginLeft:110, color:'white', fontSize:15}}>Register With mobile Number</Text> 

             <View style={{flexDirection:'row',padding:5, marginLeft:5, justifyContent: "flex-start",alignItems: "center",}}>   
        <TextInput style={{borderColor:'white',flexDirection:'row', color:'white',borderRadius:50, borderWidth:1, padding:4, marginLeft:70,  marginTop:20, textAlign:'auto'}}
           placeholder='+91-9911110328'
           placeholderTextColor={'white'}
           onChangeText={(number)=>{
            //console.log(number)
           let a= number.length
           if (a<=10)
           setMobile(number)
           }}

           
           //onChangeText={(number)=>setMobile(number.length==10)}
           value={mobile}
           />
        <TouchableOpacity
        onPress={() => {
            if (mobile=='')
            Alert.alert('Enter a mobile number')
        else if (mobile.length!=10)
        Alert.alert('Enter a valid mobile number')
           else 
           props.navigation.navigate("bottomTab")
        }}>
            <View style={{color:'aqua',borderRadius:8,backgroundColor:'dodgerblue', padding:2, marginTop:20}}>
            <Text style={{ color: 'aqua', textAlign:'center'}}>send</Text>
            </View>
            </TouchableOpacity>  
        </View>
        <View style={{flexDirection:'row', marginTop:20, marginLeft:20}}>
        <Image
            source={{uri:'data:image/png;base64,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'}}
            style={{height: 40,width: 40,marginLeft: 80,marginTop:10,justifyContent: 'center', borderRadius:30}}>
        
        </Image>
        <TouchableOpacity>
            <View>
        <Text style={{marginLeft:5, marginTop:20, color:'white', fontSize:15}}>Continue With Facebook</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', marginTop:20, marginLeft:20}}>
        <Image
            source={{uri:'data:image/png;base64,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'}}
            style={{height: 40,width: 40,marginLeft: 80,marginTop:10,justifyContent: 'center', borderRadius:30}}>
        
        </Image>
        <TouchableOpacity>
            <View>
        <Text style={{marginLeft:5, marginTop:20, color:'white', fontSize:15}}>Continue With Google</Text>
        </View>
        </TouchableOpacity>

        </View>

        <Text style={{marginLeft:110, marginTop:20, color:'white', fontSize:15, fontWeight:'bold'}}>Login With manas Studies</Text>

        <TouchableOpacity >
            <View style={{borderColor:'white', borderRadius:20, padding:8, backgroundColor:'dodgerblue', marginTop:20,marginLeft:70, marginRight:70}}>
                <Text style={{ color:'white',borderColor:'white', borderRadius:5,fontSize:15,textAlign:'center'}}>Register</Text>
            </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row', marginLeft:40, marginTop:20}}>
        <Text style={{marginLeft:50, marginTop:20, color:'white', fontSize:15}}>Already have an account?</Text>
        <TouchableOpacity>
            <View>
                <Text style={{marginLeft:5, marginTop:20, color:'aqua'}}>Sign in</Text>
            </View>
        </TouchableOpacity>
        </View>






              </View>
     </View>
          )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'blue'
      
    }
  
})
    


