import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState}from "react";
import { StyleSheet, Text, View, Image, SafeAreaView,TextInput, Button, alert, Alert, TouchableOpacity,props, FlatList, SectionList,renderItem,keyExtractor, BackHandler } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from 'react-native-navigation';
//import App7 from './FILE3'


const Tab=createBottomTabNavigator();
export default function App3(){
 return(
    
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:'red', tabBarInactiveTintColor:'grey'}}>
             
             <Tab.Screen name= 'App4' component={App4} options={{tabBarIcon: ({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'grey'}}
            source={require('./assets/home_fillo.png')}/>
          )
        }}}/> 
             <Tab.Screen name= 'App5' component={App5} options={{tabBarIcon: ({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'grey'}}
            source={require('./assets/image.png')}/>
          )
        }}}/>            
    </Tab.Navigator>
          
  )

 };
 

 const App4=()=>{ 
  const [data, setData]=useState('undefined')
  const getApi=async()=>{
    const url='https://jsonplaceholder.typicode.com/todos/1'
    let result= await fetch (url)
     result=await result.json()
    //console.warn('result')
    setData(result)
  }   
  useEffect(()=>{
    getApi()
  },[])

  console.log(data)
    return(
        <View style={styles.container}>
          <View>
            <Text style={{marginTop:30, marginLeft:40, color:'white', fontSize:20, fontWeight:'bold'}}>API call</Text>
            
            {data ?
              <View> 
                 
              <Text style={{marginLeft:40, marginTop:20,fontSize:20,color:'white'}}>{data.userId}</Text>
              <Text style={{marginLeft:40, marginTop:20,color:'white'}}>{data.id}</Text>
              <Text style={{marginLeft:40, marginTop:20,color:'white'}}>{data.title}</Text>
              <Text style={{marginLeft:40, marginTop:20,color:'white'}}>{`${data.completed}`}</Text>
            

              </View>:null
 
 }
            </View>
 
        </View>
    )
}
const Drawer = createDrawerNavigator();
const App5=(props)=>{
  return (
    
      <Drawer.Navigator >
        <Drawer.Screen name="Part" component={Part}  />
        <Drawer.Screen name="App6" component={App6} />
        <Drawer.Screen name="App7" component={App7} />
        <Drawer.Screen name="App8" component={App8} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    
  );
}
const Part=(props)=>{  
  const [data,setData]=useState([])  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  return(
      <View style={styles.container}>
          <Text style={{marginTop:20, marginLeft:120, color:'white', fontSize:20, fontWeight:'bold'}}>Get API</Text>
          
        
          {/* <Table>
          <View>
            <Text>userId</Text>
            <Text>title</Text>
            <Text>id</Text>
            <Text>userId</Text>
          </View>
          </Table>  */}
          {data.map((item)=>
          <View>
            <Text style={{fontSize:10, marginLeft:20,color:'white'}}>{item.userId}</Text>
            <Text style={{fontSize:10, marginLeft:20,color:'white'}}>{item.title}</Text>
            <Text style={{fontSize:10, marginLeft:20,color:'white'}}>{item.id}</Text>
            <Text style={{fontSize:10, marginLeft:20,color:'white'}}>{item.completed}</Text>
          </View>
)}
          <View >
     
    </View>  
      </View>
      
    

  )
}
const App6=(props)=>{ 
  const [data, setData]= useState([])
  const getApi=async()=>{
    const url='https://jsonplaceholder.typicode.com/todos';
    let result =await fetch(url)
    result= await result.json()
    console.log("result", result)

    setData(result)
  }

    useEffect(()=>{
      getApi()
    },[])
    console.log(data)   
  return(
      <View >
          <Text style={{marginTop:20, marginLeft:60,color:'blue', fontSize:20, fontWeight:'bold'}}>List with flatlist componenet</Text>
          <FlatList
          data={data}
          renderItem={({item})=><Text style={{color:'white',margin:10,justifyContent:'space-between', marginHorizontal:10,backgroundColor:'blue',borderColor:'black',borderWidth:1 }}>{item.userId+'\t\t'} {item.title+'\t\t'}{item.id+'\t\t'} {`${item.completed+'\t\t'}`}</Text>}//n-nextline //t-tab..for space
          keyExtractor={item=>item.id}
          ></FlatList> 
          
          <View>
      
    </View>   
      </View>
    

  )
}

const App7=(props)=>{    
  const [data, setData]= useState([])
  const name=async()=>{
    const url='https://jsonplaceholder.typicode.com/todos';
    let result =await fetch(url);
    result= await result.json();
    console.log("result", result)
    //console.warn('hello')
    let b= result.map((item,index)=>{

     // console.log(item)
      let data=[item.completed, item.id, item.userId]
      console.log(data)
      
      return(
      {
        title:item.title, 
        data
      }
      )
      
      
     })
     console.log(b)

    setData(b)
  }

    useEffect(()=>{
     name()
    },[])
    
  return(
      <View >
          <Text style={{marginTop:20, marginLeft:80, color:'blue', fontSize:20, fontWeight:'bold'}}>sectionList example </Text> 
        <SafeAreaView>
         {data? 
         <SectionList
           sections={data}
           renderItem={({item})=><Text style={{color:'blue',margin:10,fontSize:20}}>{item} </Text>}
           renderSectionHeader={({section})=>
         
           <Text style={{fontSize:20, color:'blue'}}>{section.title}</Text>
           
           }
          keyExtractor={(item,index)=>item+index}
        ></SectionList> 
      :null}
        </SafeAreaView>
           
      </View>
      
    

  )
}
const App8=(props)=>{
  const [name, setName]=useState("")
  const [age, setAge]=useState("")

  const Postapi =async()=>{
  console.warn(name)
  console.warn(age)
  const data={ 
    'name': 'vanshika',
     'age':24
   }
  
  const url="https://dummyjson.com/posts/1";
  let result= await fetch (url,{
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    //body:JSON.stringify(data)
    body:JSON.stringify({
      name: 'vanshika',
      age:24
    })
  })
  .then(res => res.json())
.then(an => console.log("kkkkkkkk",an))
console.log("res ===>", result)
 result=result.json();fxv
 result=await result.json()
 if (result){
 console.log('data added')
 }


  }

  return(
    <View style={{ backgroundColor:'blue',flex:1}}>
      <Text style={{marginTop:20, marginLeft:120,color:'blue', fontSize:20, fontWeight:'bold'}}>Post API</Text>
      <TextInput
      
      style={{ borderColor: 'white',borderRadius: 50, color:'white', textAlign:'center',padding: 5, borderWidth: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 20, marginLeft: 60, marginRight:60 }}
      onChangeText={(text) => setName(text)}
      placeholder='Enter a name'
      placeholderTextColor={'white'}
      value={name}
    />
    <TextInput      
      style={{ borderColor: 'white',borderRadius: 50,color:'white', textAlign:'center',padding: 5, borderWidth: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 20, marginLeft: 60, marginRight:60 }}
      onChangeText={(text) => setAge(text)}
      placeholder='Enter a age'
      placeholderTextColor={'white'}
      value={age}
    />

    <View style={{marginLeft:120, marginRight:120, marginTop:20, borderRadius:200}}>
      <Button 
    title='Save Data'
   

   ></Button>
   </View>
    </View>
    
  )
}

const Logout=(props)=>{  
  
    const createTwoButtonAlert=()=>
      Alert.alert( 'Log out', 'Are you sure want to exit?',[
        {
          text:'NO',
          onPress:()=>console.log('No Pressed'),
          style: 'No'
        },
        {
          text:'yes',
          onPress: ()=>props.navigation.navigate("Login")
        },
      ]);
      
    
  
  return(
      <View style={styles.container}>
          <Text style={{marginTop:80, marginLeft:60,color:'white', fontSize:40, fontWeight:'bold'}}>Hello </Text> 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View 
          style={{marginLeft:70, marginRight:70, marginTop:150}}>
        <Button title={' Logout'} onPress={createTwoButtonAlert} />
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
