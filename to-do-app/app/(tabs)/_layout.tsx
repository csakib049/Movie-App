import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import  useTheme  from "@/hooks/useTheme";



const TabsLayout = () => {
  const { colors } = useTheme();

  return (
    <Tabs
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor:colors.textMuted,
        tabBarStyle:{
            backgroundColor:colors.surface,
            borderTopWidth:1,
            borderTopColor:colors.border,
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