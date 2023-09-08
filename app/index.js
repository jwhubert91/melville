import React, { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { KeyboardAvoidingView } from "react-native"
import { router } from "expo-router"
import { ROUTES } from "../helpers/routes"
import WelcomeHeader from "../components/WelcomeHeader"

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
        <WelcomeHeader />
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
          <Pressable
            onPress={() => router.push(ROUTES.signup)}
            className="mb-3"
          >
            <Text className="text-sm text-center">
              Don't have an account? Sign up
            </Text>
          </Pressable>
          <Pressable className="w-full py-3 bg-secondary">
            <Text className="text-xl text-center font-medium text-white">
              Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
