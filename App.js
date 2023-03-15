import'react-native-gesture-handler';

import React from 'react'
import {
  View,
} from 'react-native'

import Rout from './src/routes/routes'
import Profile from './src/screens/Profile'

export default function (){
  return(
    <View style={{flex:1,backgroundColor:'yellow'}}>
      <Rout/>
    </View>
      
  )
}

