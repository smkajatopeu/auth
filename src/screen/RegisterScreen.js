import {
  Stylesheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import InlineTextButton from '../components/InlineTextButton';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../database/firebase';
import AppStyles from '../styles/AppStyles';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Account created!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
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
            <Text style={AppStyles.title__text}>Sign Up</Text>
          </View>
          <View style={AppStyles.subtitle}>
            <Text style={AppStyles.subtitle__text}>
              Don't worry (Ooh, ooh ooh ooh oo-ooh ooh oo-ooh) be happy
            </Text>
          </View>
          <View style={AppStyles.form}>
            <TextInput
              style={AppStyles.form__input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="Email"
              placeholderTextColor={'#9DA1A3'}
            />
            <TextInput
              style={AppStyles.form__input}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              placeholderTextColor={'#9DA1A3'}
            />
            <View style={{left: '9%', flexWrap: 'wrap', width: '70%'}}>
              <Text
                style={{color: '#9DA1A3', width: '75%', textAlign: 'center'}}>
                By signing up, you're agree to our Terms & Conditions and
                Privacy Policy
              </Text>
            </View>
            <TouchableOpacity
              style={AppStyles.send__button}
              onPress={handleRegister}>
              <Text style={AppStyles.button__text}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={AppStyles.form__footer}>
            <Text style={AppStyles.text}>Joined us before?</Text>
            <InlineTextButton
              text="Sign in"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
        <View style={AppStyles.footer__reg}>
          <Text style={AppStyles.footer__text}>
            All rights reserved Betterise Technologies 2020
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
