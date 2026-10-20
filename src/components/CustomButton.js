import React from 'react';
import { Pressable, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from '../styles/colors';

export default function CustomButton({ title, onPress, type = 'primary' }) {
  const isSecondary = type === 'secondary';

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isSecondary && styles.secondaryButton,
        pressed && styles.pressed
      ]}
      onPress={onPress}
      onClick={Platform.OS === 'web' ? onPress : undefined}
    >
      <Text style={[styles.text, isSecondary && styles.secondaryText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: Colors.primary,
  },
});