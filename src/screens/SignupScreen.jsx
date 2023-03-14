import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Input, Button } from "react-native-elements";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign up for Tracker</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign up" />
    </>
  );
};
const styles = StyleSheet.create({});

export default SignupScreen;
