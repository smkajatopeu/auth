import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export default function InlineTextButton(props) {
  let style = {};
  if (props.color) {
    style.color = props.color;
  }
  return (
    <Pressable onPress={props.onPress}>
      {({pressed}) => (
        <Text
          style={[
            pressed ? styles.pressedInlineTextButton : styles.inlineTextButton,
            style,
          ]}>
          {props.text}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inlineTextButton: {
    color: '#A3D8A9',
  },
  pressedInlineTextButton: {
    color: '#A3D8A9',
    opacity: 0.6,
  },
});
