import React, { useState } from "react"
import { Button, Pressable, Text, TextInput, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { KeyboardAvoidingView, SafeAreaView } from "react-native"
import { router } from "expo-router"
import { ROUTES } from "../helpers/routes"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View className="flex-1">
      <KeyboardAvoidingView
        className="px-3 h-full justify-around"
        behavior="height"
      >
        {/* Welcome container */}
        <View className="items-center justify-center">
          <View className="mb-2">
            <FontAwesome5 name="book-open" size={48} color="black" />
          </View>
          <View className="text-center">
            <Text className="text-2xl">Welcome to Melville</Text>
          </View>
        </View>
        {/* Sign in form */}
        <View>
          <View className="mb-2">
            <Text>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              className="border bg-white text-lg p-2"
              placeholder="name@email.com"
              keyboardType="email-address"
            />
          </View>
          <View className="mb-3">
            <Text>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              className="border bg-white text-lg p-2"
              secureTextEntry={true}
            />
          </View>
          <Pressable onPress={() => router.push(ROUTES.login)} className="mb-3">
            <Text className="text-sm text-center">
              Already have an account? Login
            </Text>
          </Pressable>
          <Pressable className="w-full py-3 bg-secondary">
            <Text className="text-xl text-center font-medium text-white">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
