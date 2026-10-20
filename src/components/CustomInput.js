import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';

export default function CustomInput(props) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.textLight}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: { width: '100%', height: 52, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: Colors.text, marginVertical: 8 },
});