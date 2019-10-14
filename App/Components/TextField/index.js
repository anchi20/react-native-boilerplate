import React, { Component, useState } from 'react';
import { TextInput } from 'react-native';

export default function UselessTextInput(props) {
  const [value, onChangeText] = useState('');

  const sendToParent = (text) => {
    props.onChangeText(text);
    onChangeText(text);
  }
  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => sendToParent(text)}
      value={value}
    />
  );
}
