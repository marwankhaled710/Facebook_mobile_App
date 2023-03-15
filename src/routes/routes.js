import 'react-native-gesture-handler';

import React from 'react';
import {
  Image,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Notification from '../screens/Notifications'
import Gaming from '../screens/Gaming'
import Market from '../screens/Marketplace'
import Menu from '../screens/Menu'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile}
        options={{
          title:'',
          headerStyle:{
           // backgroundColor:'red'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default function Route() {
  return (
    <NavigationContainer>

      <Tab.Navigator  tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
        }}>
      {/********************* Home Tab *********************/}

      <Tab.Screen
          name="Home"
          component={HomeTabs}
        
        options={{
          tabBarIcon: () => (
            <Image
              style={{width:28,height:28}}
              source={require('../../imgs/home4.png')                  
              }/>
         ), 
          tabBarLabel: 'Home'   
        }} />

      {/********************* Notification Tab *********************/}

       <Tab.Screen name="Notifications" component={Notification}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width:23,height:23}}
              source={require('../../imgs/notifi.png')                  
              }/>
         ), 
         tabBarLabel: 'Notifications'             
        }} />

        {/********************* Gaming Tab *********************/}

       <Tab.Screen name="Gaming" component={Gaming} 
        options={{
          tabBarIcon: () => (
            <Image
              style={{width:25,height:25}}
              source={require('../../imgs/gaming2.png')                  
              }/>
         ), 
         tabBarLabel: 'Gaming'             
        }}/> 

      {/********************* Marketplace Tab *********************/}

       <Tab.Screen name="Marketplace" component={Market} 
        options={{
          tabBarIcon: () => (
            <Image
              style={{width:25,height:25}}
              source={require('../../imgs/marketplace.jpg')                  
              }/>
         ), 
         tabBarLabel: 'Marketplace'             
        }} /> 

      {/********************* Menu Tab *********************/}

      <Tab.Screen name="Menu" component={Menu} 
        options={{
          tabBarIcon: () => (
            <Image
              style={{width:40,height:40}}
              source={require('../../imgs/menu2.webp')                  
              }/>
         ), 
         tabBarLabel: 'Menu'             
        }}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}