import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { styles } from './Home.styles';

export default function Home({ navigation }) {
  const handleLogout = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.institutionName}>Nexus Tech</Text>
        <Text style={styles.welcomeText}>Portal Acadêmico</Text>
        <Text style={styles.studentInfo}>Aluno: Aluno Regular (3º Semestre)</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Mural de Avisos</Text>
        <View style={styles.noticeBox}>
          <Text style={styles.noticeDate}>20/10/2026</Text>
          <Text style={styles.noticeText}>
            Prazo final para entrega dos projetos práticos da disciplina de Desenvolvimento Mobile. Verifique a documentação e os requisitos.
          </Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Acesso Rápido</Text>
        
        <View style={styles.buttonSpacing}>
          <CustomButton 
            title="Sobre a Instituição" 
            onPress={() => navigation.navigate('Sobre')} 
          />
        </View>

        <View style={styles.buttonSpacing}>
          <CustomButton 
            title="Entre em Contato" 
            type="secondary"
            onPress={() => navigation.navigate('Contato')} 
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <CustomButton 
            title="Encerrar Sessão" 
            type="secondary" 
            onPress={handleLogout} 
        />
      </View>
    </ScrollView>
  );
}