import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Account, Activity, Food, Home, Inbox, Payment } from '../../page';

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


class BottomTabs extends Component {
  render() {
    return (
      <MaterialBottom.Navigator
        shifting={false}
        initialRouteName="Home"
        activeColor="#09AB54"
        inactiveColor="#676767"
        barStyle={{
          backgroundColor: 'white',
          borderWidth: 0.1,
          borderColor: 'lightgrey',
        }}

      >
        <MaterialBottom.Screen
          name="Home"
          component={Home}
          //styles
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <View style={{ marginTop: -2 }}>
                {color == '#09AB54' ? (
                  <Image
                    source={require('../../../assets/icon/nav-home-active.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/icon/nav-home.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                )}
              </View>
            ),
          }}
        />

        <MaterialBottom.Screen
          name="Activity"
          component={Activity}
          //styles
          options={{
            tabBarLabel: 'Activity',
            tabBarIcon: ({ color }) => (
              <View style={{ marginTop: -2 }}>
                {color == '#09AB54' ? (
                  <Image
                    source={require('../../../assets/icon/nav-activity-active.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/icon/nav-activity.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                )}
              </View>
            ),
          }}
        />

        <MaterialBottom.Screen
          name="Payment"
          component={Payment}
          //styles
          options={{
            tabBarLabel: 'Payment',
            tabBarIcon: ({ color }) => (
              <View style={{ marginTop: -2 }}>
                {color == '#09AB54' ? (
                  <Image
                    source={require('../../../assets/icon/nav-payment-active.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/icon/nav-payment.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                )}
              </View>
            ),
          }}
        />

        <MaterialBottom.Screen
          name="Inbox"
          component={Inbox}
          //styles
          options={{
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ color }) => (
              <View style={{ marginTop: -2 }}>
                {color == '#09AB54' ? (
                  <Image
                    source={require('../../../assets/icon/nav-inbox-active.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/icon/nav-inbox.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                )}
              </View>
            ),
            tabBarBadge: 1,
          }}
        />

        <MaterialBottom.Screen
          name="Account"
          component={Account}
          //styles
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <View style={{ marginTop: -2 }}>
                {color == '#09AB54' ? (
                  <Image
                    source={require('../../../assets/icon/nav-account-active.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/icon/nav-account.jpg')}
                    style={{ height: 30, width: 30 }}
                  />
                )}
              </View>
            ),
          }}
        />
      </MaterialBottom.Navigator>
    );
  }
}

const HomeStack = () =>

  <Stack.Navigator
    headerMode="none">
    <Stack.Screen name='Home' component={BottomTabs} />
    <Stack.Screen name='Food' component={Food} />
  </Stack.Navigator>




const Index = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Index;

