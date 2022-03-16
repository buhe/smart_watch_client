import * as React from 'react';
import { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import supabase from '../../services/supabase';
import { Onoff } from '../../types/Profile';

export default function SwitchScreen() {

    const [isCatEnabled, setIsCatEnabled] = useState(false);
    const [isDistanceEnabled, setIsDistanceEnabled] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row',padding: 22 }}>
                <Text style={{ fontSize:24, width: 122}}>Cat Play</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isCatEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={async () => {
                        setIsCatEnabled(previousState => !previousState);
                        await supabase.from<Onoff>('onoff').upsert({'id':1, 'en': 0});
                    }}
                    value={isCatEnabled}
                />
            </View>
            <View style={{ flexDirection: 'row', padding: 22 }}>
                <Text style={{ fontSize: 24, width: 122 }}>Distance</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDistanceEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setIsDistanceEnabled(previousState => !previousState);

                     }}
                    value={isDistanceEnabled}
                />
            </View>
        </View>
    );
}


