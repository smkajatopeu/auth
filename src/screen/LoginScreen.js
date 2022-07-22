import {
  Stylesheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../database/firebase';
import AppStyles from '../styles/AppStyles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Signed in!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={AppStyles.wrapper}>
      <View style={AppStyles.container}>
        <View style={AppStyles.header}>
          <View style={AppStyles.logo}>
            <Text style={AppStyles.text__logo}>Bonjour!</Text>
          </View>
        </View>
        <View AppStyles={AppStyles.main}>
          <View style={AppStyles.title}>
            <Text style={AppStyles.title__text}>Login</Text>
          </View>
          <View style={AppStyles.subtitle}>
            <Text style={AppStyles.subtitle__text}>Don't Worry Be Happy</Text>
          </View>
          <View style={AppStyles.form}>
            <TextInput
              style={AppStyles.form__input}
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              value={email}
              placeholderTextColor={'#9DA1A3'}></TextInput>
            <TextInput
              style={AppStyles.form__input}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              placeholderTextColor={'#9DA1A3'}></TextInput>
            <View style={{left: -90}}>
              <InlineTextButton text="Forgot Password?" />
            </View>
            <TouchableOpacity
              style={AppStyles.send__button}
              onPress={handleLogin}>
              <Text style={AppStyles.button__text}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={AppStyles.form__footer}>
            <Text style={AppStyles.text}>New user? Come to me my brother</Text>
            <InlineTextButton
              text="Register"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
        <View style={AppStyles.footer}>
          <Text style={AppStyles.footer__text}>
            All rights reserved Betterise Technologies 2020
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
