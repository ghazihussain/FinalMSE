import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import theme from '../utils/theme'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'



const DrawerContainer = (props) => {
    const [name, setName] = useState('')
    useEffect(() => {
        var user = auth().currentUser.uid
        firestore().collection('users').doc(user).get().then((s) => {
            setName(s.data().name)
        })

    }, [])

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView />
            <View style={{ height: 100, borderBottomWidth: 1, borderColor: "rgba(0,0,0,0.1)", alignItems: "center", flexDirection: "row", marginLeft: 20 }}>
                <View>
                    <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1959&q=80" }} />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 10 }}>Good morning, </Text>
                    <Text style={{ fontWeight: "bold" }}>{name}</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "white", justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ justifyContent: "center" }}>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('ListCreditCard')} style={{ justifyContent: "center" }}>
                    <Text style={styles.text}>Account</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('Auth')} style={{ justifyContent: "center" }}>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 3 }}>

            </View>
            <View style={{ flex: .4, borderTopWidth: 1, borderColor: "rgba(0,0,0,.1)" }}>

            </View>
        </View>
    )

}
export default DrawerContainer
const styles = StyleSheet.create({
    text: {
        marginLeft: 15,
        fontWeight: "bold"
    }
})