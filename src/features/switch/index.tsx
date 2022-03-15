import * as React from 'react';
import { useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function SwitchScreen() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row',padding: 22 }}>
                <Text style={{ fontSize:24, width: 122}}>Cat Play</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{ flexDirection: 'row', padding: 22 }}>
                <Text style={{ fontSize: 24, width: 122 }}>Distance</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}


