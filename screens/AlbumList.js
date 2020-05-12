import * as React from "react";
import { Button, View, Text } from "react-native";

export default function AlbumList({ navigation }) {
  return (
    <View>
      <Text>Album List</Text>
      <Button
        title="Song List"
        onPress={() => navigation.navigate("Song List")}
      />
    </View>
  );
}
