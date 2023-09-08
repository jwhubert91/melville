import React from "react"
import { View, Text } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

function WelcomeHeader() {
  return (
    <View className="items-center justify-center">
      <View className="mb-2">
        <FontAwesome5 name="book-open" size={48} color="black" />
      </View>
      <View className="text-center">
        <Text className="text-2xl">Welcome to Melville</Text>
        <Text className="text-sm text-center">The book club app</Text>
      </View>
    </View>
  )
}

export default WelcomeHeader
