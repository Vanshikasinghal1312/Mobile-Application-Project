import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './APP-REDUX/store';
//import authSlice, { signup } from './APP-REDUX/authSlice';
import { setsignup } from './APP-REDUX/authSlice';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, alert, Alert, TouchableOpacity, props, FlatList, SectionList, renderItem, keyExtractor } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App1 from './App1'
//import reducer from './redux-toolkit/redux-tlk-demo/features/cake/cakeSlice';

// const reducer = (state = { email: "vansh" }, action = () => { type: "abc" }) => {
//   return state
// }

const Stack = createNativeStackNavigator();
//const store =createStore(reducer)
export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='App1' component={App1} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )


}

const Signup = (props) => {

  const storeFullName = useSelector((state) => state.user.fullname)//check
  const storeMobileNumber = useSelector((state) => state.user.mobilenumber)
  const storePassword = useSelector((state) => state.user.password)
  const dispatch = useDispatch()
  const [fullname, setFullname] = useState(storeFullName);
  const [mobilenumber, setMobileNumber] = useState(storeMobileNumber);
  const [password, setPassword] = useState(storePassword);



  console.log(storeFullName, storeMobileNumber, storePassword)

  const loginPress = () => {
    if (!storeFullName && !storeMobileNumber && !storePassword) {
      dispatch(setsignup({ fullname: fullname, mobilenumber: mobilenumber, password: password }))
    }

    props.navigation.navigate("Login")
  }


  return (

    <View style={styles.container}>
      <Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', marginTop: 100, fontSize: 30, marginLeft: 130 }}>Sign Up!</Text>
      <TextInput
        style={{ borderColor: 'white', textAlign: 'center', color: 'white', borderRadius: 50, borderWidth: 3, padding: 5, marginRight: 60, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 50, marginLeft: 60 }}
        onChangeText={(text) => setFullname(text)}
        placeholder='Full Name'
        placeholderTextColor={'grey'}
        value={fullname}
      />
      <TextInput

        style={{ borderColor: 'white', borderRadius: 50, textAlign: 'center', padding: 5, borderWidth: 3, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 20, marginLeft: 60, marginRight: 60 }}
        onChangeText={(text) => setMobileNumber(text)}
        placeholder=' Mobile Number'
        placeholderTextColor={'white'}
        value={mobilenumber}
      />

      <TextInput
        style={{ borderColor: 'white', borderRadius: 50, textAlign: 'center', borderWidth: 3, padding: 5, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 10, marginLeft: 60, marginRight: 60 }}
        onChangeText={(text) => setPassword(text)}
        placeholder='Enter password'
        placeholderTextColor={'white'}
        value={password}
      />

      <TouchableOpacity
        //onPress={handleLogin}

        onPress={loginPress}
      // onPress={ ()=> {
      //   if (fullname!=='', mobilenumber!=='', password!=='')
      //   Alert.alert (props.navigation.navigate("Login"))
      // else
      // Alert.alert ('enter a Valid Details')
      //}}
      >
        <View
          style={{ borderColor: 'white', backgroundColor: 'dodgerblue', borderRadius: 20, borderWidth: 4, marginTop: 20, marginLeft: 60, marginRight: 60, justifyContent: 'center', padding: 8 }}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', justifyContent: 'center', marginLeft: 90, marginRight: 80 }}>Signup </Text>




        </View>
      </TouchableOpacity>

    </View>
  )
}

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");



  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', marginTop: 80, fontSize: 30, marginLeft: 100 }}>Welcome Back!</Text>
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
        style={{
          height: 200,
          width: 200,
          marginLeft: 100,
          marginTop: 10,
          justifyContent: 'center',

        }}
      />
      <TextInput

        style={{ borderColor: 'white', borderRadius: 50, textAlign: 'center', padding: 4, borderWidth: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 20, marginLeft: 60, marginRight: 60 }}
        onChangeText={(text) => setMobile(text)}
        placeholder='Login with mobile'
        placeholderTextColor={'white'}
        value={mobile}
      />
      <Text style={{ color: 'black', fontWeight: '500', fontSize: 20, alignItems: 'center', marginLeft: 200, justifyContent: 'center', marginRight: 200, marginTop: 5 }}>or</Text>
      <TextInput
        style={{ borderColor: 'white', textAlign: 'center', borderRadius: 50, borderWidth: 4, padding: 4, marginRight: 60, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 10, marginLeft: 60 }}
        onChangeText={(text) => setUsername(text)}
        placeholder='Enter your email'
        placeholderTextColor={'white'}
        value={username}
      />
      <TextInput
        style={{ borderColor: 'white', borderRadius: 50, textAlign: 'center', borderWidth: 4, padding: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 80, marginTop: 10, marginLeft: 60, marginRight: 60 }}
        onChangeText={(text) => setPassword(text)}
        placeholder='Enter password'
        placeholderTextColor={'white'}
        value={password}
      />
      <TouchableOpacity
        onPress={() => { }}>
        <Text style={{ color: 'deepskyblue', marginTop: 10, marginLeft: 150, fontWeight: '500', fontSize: 15, textDecorationColor: 'blue' }}>Forgot password?</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => props.navigation.navigate("App1")}>
        {/* onPress={ () => {
      //   if (mobile !=='')
      //   Alert.alert("welcome")
      //   else if (mobile=='' && username=='' && password=='')
      //     Alert.alert("enter a mobile/usernamre/password")
      //   else if (mobile=='' && username=='' && password!=='')
      //     Alert.alert("enter a username")
      //   else if (mobile=='' && username!==''&& password=='')=
      //    Alert.alert("enter a password")
      //    else (mobile!==''||username!=='' && password!=='')
      //    Alert.alert("welcome")
      //  }
      //  } */}



        {/* //     if (mobile!=='')
      //     Alert.alert ("welcome")
      //   else if ( username!=='' && password!=='')
      //   Alert.alert("welcome")
      //   else if (mobile=='' && username=='' && password=='')
      //     Alert.alert("enter a mobile/usernamre/password")
      //   // else if (mobile=='' || username!=='' && password!=='')
      //   //   Alert.alert("welcome")
      //   else if ( username==''&& password!=='')
      //    Alert.alert("enter a username")
        
      //    else (password=='' && username!=='')
      //    Alert.alert("enter a password")
      //  }
      //  }
      //  > */}


        <View
          style={{ borderColor: 'white', backgroundColor: 'dodgerblue', borderRadius: 20, borderWidth: 4, marginTop: 20, marginLeft: 60, marginRight: 60, justifyContent: 'center', padding: 9 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', justifyContent: 'center', marginLeft: 90, marginRight: 100 }}>Login </Text>
          {console.log(username, password)}



        </View>
      </TouchableOpacity>
      <View
        style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>

        <Text style={{ color: 'white', fontSize: 15, }}>Dont have an account?</Text>
        <TouchableOpacity
          onPress={() => { }}>
          <Text style={{ color: 'aqua', marginLeft: 8 }}>sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
  },
});



const style = StyleSheet.create({
  items: {
    marginTop: 50,
    marginLeft: 50,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'blue',
    borderBlockColor: 'black'
  }

})
