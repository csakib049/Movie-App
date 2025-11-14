import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'


const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"cyan",
        tabBarInactiveTintColor:"gray",
        tabBarStyle:{
            backgroundColor:"#632CAB",
            borderTopWidth:1,
            borderTopColor:"#ddd",
            height:90,
            paddingBottom:10,
            paddingTop:15,

        },
        tabBarLabelStyle:{
            fontSize:14,
            fontWeight:"600",
        },
        

    }}
    >
        <Tabs.Screen
          name="index"
          options={{
            title:"Todos",
            tabBarIcon:({color,size}) =>(
                <Ionicons name='flash-outline' size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title:"settings",
            tabBarIcon:({color,size}) =>(
                <Ionicons name='settings' size={size} color={color} />
            )
          }}
        />

    </Tabs>
  )
}

export default TabsLayout