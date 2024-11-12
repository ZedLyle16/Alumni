import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../../constants'

import { Link } from 'expo-router'


const Bookmark = () => {
  return (
    <View className = "w-full h-full justify-center items-center">
      <Image source ={icons.cart}
      className = "w-full h-[100] mt-[50]"
      resizeMode = "contain"
    />

    <Link href = "/index">Cart</Link>
    </View>
  )
}

export default Bookmark