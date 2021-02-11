import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { LoginScreen, SignUp, Home } from '../container';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerContainer from '../component/DrawerContainer';
import { Icon } from 'native-base';

const Stack = createStackNavigator();

class Navigation extends Component {
    state = {
        authenticate: false,
    };

    handleSignIn = () => {
        this.setState(true);
    };

    render() {
        const Tab = createBottomTabNavigator();
        const TabScreen = (props) => {
            return (
                <Tab.Navigator>
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <Icon
                                    name="home"
                                    type={"Entypo"}
                                    focused={focused}
                                />
                            ),
                        }}
                        name="Home" component={Home} />
                    <Tab.Screen name="Home1"
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <Icon
                                    name="home"
                                    type={"Entypo"}
                                    focused={focused}
                                />
                            ),
                        }}
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <Icon
                                    name="home"
                                    type={"Entypo"}
                                    focused={focused}
                                />
                            ),
                        }} component={Home} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused, color }) => (
                                <Icon
                                    name="home"
                                    type={"Entypo"}
                                    focused={focused}
                                />
                            ),
                        }}
                        name="Home2" component={Home} />

                </Tab.Navigator>
            )
        }

        const Drawer = createDrawerNavigator();
        const DrawerScreen = (props) => {
            return (
                <Drawer.Navigator
                    gestureHandlerProps={true}
                    drawerContent={(props) => <DrawerContainer {...props} />}
                    headerMode={false} initialRouteName="MainDrawer">
                    <Drawer.Screen {...this.props} name="MainDrawer" options={() => {

                    }} component={TabScreen} />
                    {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
                </Drawer.Navigator>
            )

        }



        const Auth = createStackNavigator();
        const AuthScreen = () => {
            return (
                <Auth.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: 'false' }}>

                    <Auth.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Auth.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{
                            headerShown: false,

                        }}
                    />

                </Auth.Navigator>
            );
        };
        const Main = createStackNavigator();
        const MainScreen = () => {
            return (
                <Main.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: 'false' }}>

                    <Main.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />


                </Main.Navigator>
            );
        };

        return (
            <NavigationContainer>
                <Stack.Navigator

                    initialRouteName="Auth">
                    <Stack.Screen
                        name="Auth"
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={DrawerScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigation;

