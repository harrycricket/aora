import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Link href={'/'}>Back to home</Link>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})