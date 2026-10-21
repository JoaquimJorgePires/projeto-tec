import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { styles } from './Login.styles';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    setErrorMessage(''); 

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (username === 'aluno' && password === '123456') {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    } else {
      setErrorMessage('Usuário ou senha incorretos.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Entre para acessar sua conta</Text>

        <CustomInput 
          placeholder="Usuário (ex: aluno)" 
          value={username} 
          onChangeText={setUsername} 
          autoCapitalize="none" 
        />
        <CustomInput 
          placeholder="Senha (ex: 123456)" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={true} 
        />

        {errorMessage ? (
          <View style={{ marginTop: 10, padding: 8, backgroundColor: '#FEE2E2', borderRadius: 6 }}>
            <Text style={{ color: '#991B1B', fontSize: 13, textAlign: 'center', fontWeight: '600' }}>
              {errorMessage}
            </Text>
          </View>
        ) : null}
        
        <View style={{ marginTop: 14 }}>
          <CustomButton title="Entrar" onPress={handleLogin} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}