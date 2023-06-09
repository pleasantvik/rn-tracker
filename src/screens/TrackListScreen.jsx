import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
