import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Input from '../../component/Input'
import Button from '../../component/Button'
import { Spinner } from 'native-base'

import { StackActions } from '@react-navigation/native';


const { width, height } = Dimensions.get('screen')
export default class index extends Component {

    state = {
        email: 'ghazi1@gmail.com',
        password: '1234567',
        errorMessage: null,
        loading: false,
    };

    onLogin() {
        this.setState({ loading: true });
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                this.props.navigation.dispatch(StackActions.replace('Main'));
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        keyboardDismissMode="interactive"
                        keyboardShouldPersistTaps="handled">
                        <View style={{ marginTop: 20 }}></View>
                        <View style={{ marginTop: width / 2 }}>
                            <Input
                                label="Email address"
                                placeholder="Enter your email address..."
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                secureTextEntry
                            />

                            <Button onPress={() => this.onLogin()}>
                                <Text>Log in</Text>
                            </Button>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginTop: 15,
                                }}>
                                <Text>Not have an Account? </Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#0FB6FF',
                                        }}>
                                        Signup
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {this.state.loading ? (
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Spinner color={'#0FB6FF'} />
                        </View>
                    ) : null}
                </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loggedinMessage: {
        textAlign: 'center',
        padding: 5,
    },
    signInButton: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: width / 5.3,
        marginTop: 10,
    },

    userInfoContainer: {
        marginVertical: 20,
    },
    profileImageContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
    },
    displayTitle: {
        fontSize: 22,
        color: '#010101',
    },

    status: {
        marginVertical: 20,
    },
    loggedinMessage: {
        fontSize: 20,
        color: 'tomato',
    },
});

