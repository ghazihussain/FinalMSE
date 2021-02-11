import { Icon } from 'native-base'
import React, { Component } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get('screen')
export default class index extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                <View style={{ height: 60, width, backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ marginLeft: 10 }}>
                        <Icon name={"menu"} type={"Entypo"} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", }}>Home</Text>
                    <Text style={{ marginRight: 10, }}></Text>



                </View>

            </View>
        )
    }
}
