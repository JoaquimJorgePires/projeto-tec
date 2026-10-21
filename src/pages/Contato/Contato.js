import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { styles } from './Contato.styles';

export default function Contato({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos do formulário.');
      return;
    }

    Alert.alert('Mensagem Enviada', 'Obrigado pelo contacto! A nossa equipa responderá em breve.');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Nexus Tech Inovação</Text>

        <Text style={styles.itemLabel}>Telefone Comercial</Text>
        <Text style={styles.itemValue}>(11) 3456-7890</Text>

        <Text style={styles.itemLabel}>E-mail de Suporte</Text>
        <Text style={styles.itemValue}>suporte@nexustech.com.br</Text>

        <Text style={styles.itemLabel}>Endereço da Sede</Text>
        <Text style={styles.itemValue}>Av. Paulista, 1000 - Conj 42 - São Paulo/SP</Text>

        <Text style={styles.itemLabel}>Horário de Atendimento</Text>
        <Text style={styles.itemValue}>Segunda a Sexta, das 08h às 18h</Text>

        <Text style={styles.sectionHeader}>Fale Conosco</Text>
        
        <CustomInput 
          placeholder="O seu nome" 
          value={nome} 
          onChangeText={setNome} 
        />
        <CustomInput 
          placeholder="O seu e-mail" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none"
        />
        <CustomInput 
          placeholder="Escreva a sua mensagem..." 
          value={mensagem} 
          onChangeText={setMensagem} 
        />

        <View style={{ marginTop: 10 }}>
          <CustomButton title="Enviar Mensagem" onPress={handleEnviar} />
        </View>

        <View style={{ marginTop: 10 }}>
          <CustomButton title="Voltar para Home" type="secondary" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

