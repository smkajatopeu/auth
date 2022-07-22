import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {getAuth, signOut} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../database/firebase';
import AppStyles from '../styles/AppStyles';

const HomeScreen = ({navigation}) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => alert(error.message));
  };
  return (
    <View style={AppStyles.wrapper}>
      <View style={AppStyles.container}>
        <View style={AppStyles.header}>
          <View style={AppStyles.logo}>
            <Text style={AppStyles.text__logo}>Welcome back</Text>
          </View>
        </View>
        <View AppAppStyles={AppStyles.main}>
          <View style={AppStyles.home__body}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 32,
              }}>
              {auth.currentUser?.email}
            </Text>
            <TouchableOpacity
              style={AppStyles.send__button}
              onPress={handleLogout}>
              <Text style={AppStyles.button__text}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
