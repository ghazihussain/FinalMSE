import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    SafeAreaView, TouchableOpacity
} from 'react-native';
import Button from '../../component/Button';
import Input from '../../component/Input';
import themes from '../../utils/theme';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
const { height, width, fontScale } = Dimensions.get('window');


export default class index extends Component {
    state = {
        email: 'ghazi1@gmail.com',
        password: '1234567',
        name: 'Ghazi Hussain',

    };
    onPressButton() {
        auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            firestore().collection('users').doc(user.user.uid).set({
                name: this.state.name,
                email: this.state.email
            }).then(() => this.props.navigation.navigate('Login'))
        }).catch((err) => {
            alert(err)
        })
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
                            <Input
                                label="Name"
                                placeholder="Full Name"
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}

                            />

                            <Button onPress={() => this.onPressButton()}>
                                <Text>Sign Up</Text>
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
                                <Text>Do you have an Account? </Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#0FB6FF',
                                        }}>
                                        Login
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
        width: '100%',
        backgroundColor: '#fff',
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
    },
    pipleHeader: {
        backgroundColor: themes.colors.primary_color,
        width: '100%',
        height: height / 5,
    },
    pipliTextContainerOne: {
        paddingLeft: 15,
        width: width / 0.2,
        marginTop: 80,
    },
    pipliTextContainerTwo: {
        marginTop: '2%',
    },
    pipliText: {
        fontSize: fontScale * 24,
        color: '#505050',
        fontFamily: 'NunitoSans-Bold',
    },
});