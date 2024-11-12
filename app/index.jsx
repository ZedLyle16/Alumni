import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className="text-4xl font-caveatbold text-blue-400">SHOPMORE </Text> 
      <Link className="text-1xl font-pbold text-gray-500" href="./home"> Go To Home</Link>
    </View>
  );
};

export default index;

// const styles = StyleSheet.create({
//     container:{ 
//         display: 'flex',
//         flex:1,
//         alignItems:'center',
//         justifyContent: 'center',

//     }
// })