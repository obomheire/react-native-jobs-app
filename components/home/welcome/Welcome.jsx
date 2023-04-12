import React, { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { COLOR, COLORS, icons, images, SIZES } from "../../../constants";

const Welcome = () => {

  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Zack</Text>
         <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput />
    </View>
    </View>
    </View>
  )
}

export default Welcome  