import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: 60,
  },
  text__logo: {
    color: 'black',
    fontWeight: '700',
    fontSize: 22,
    top: 20,
    left: 30,
  },
  tlogoGreen: {
    color: '#70C178',
  },
  title: {
    alignItems: 'center',
    marginTop: 50,
  },
  title__text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 32,
  },
  subtitle: {
    width: '80%',
    height: 'auto',
    left: '10%',
    marginTop: 15,
    marginBottom: 40,
  },
  subtitle__text: {
    color: '#A1A4A7',
    fontSize: 12,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: 'black',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form__input: {
    width: '80%',
    backgroundColor: '#F2F3F4',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    color: '#000',
  },
  placeholder: {
    color: '#9DA1A3',
  },
  send__button: {
    backgroundColor: 'black',
    width: '80%',
    height: 60,
    borderRadius: 20,
    top: 35,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button__text: {
    color: 'white',
  },
  form__footer: {
    alignItems: 'center',
    top: 60,
    marginTop: 20,
  },
  footer: {
    width: '100%',
    top: '30%',
    alignItems: 'center',
  },
  footer__reg: {
    width: '100%',
    top: '24%',
    alignItems: 'center',
  },
  footer__text: {
    color: '#D1D3D4',
    fontSize: 10,
  },
  home__body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50%',
  },
});
