import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AlbumList from './AlbumList';
import SongList from './SongList';


export default class MusicScreen extends React.Component {
    render() {
        const MusicStack = createStackNavigator();
        return (
            <MusicStack.Navigator>
                <MusicStack.Screen
                    name="Album List"
                    component={AlbumList}
                />
                <MusicStack.Screen
                    name="Song List"
                    component={SongList}
                />
            </MusicStack.Navigator>
        );
    }
    
}