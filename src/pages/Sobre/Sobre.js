import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { styles } from './Sobre.styles';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.imageCard}>
        <Image 
          source={require('../../aluna.png')} 
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Nexus Tech Inovação</Text>
        <Text style={styles.description}>
          Desenvolvemos soluções em software e consultoria tecnológica para otimizar processos corporativos e impulsionar negócios.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Missão</Text>
        <Text style={styles.description}>
          Entregar tecnologia de alta qualidade que facilite a rotina diária das empresas.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Visão</Text>
        <Text style={styles.description}>
          Tornar-nos referência nacional em inovação e desenvolvimento de aplicações móveis até 2030.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Valores</Text>
        <Text style={styles.bullet}>• Transparência com clientes e parceiros</Text>
        <Text style={styles.bullet}>• Foco constante em inovação</Text>
        <Text style={styles.bullet}>• Qualidade e segurança em primeiro lugar</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Informações da Aplicação</Text>
        <Text style={styles.metaText}>Versão: 1.0.0</Text>
        <Text style={styles.metaText}>Ambiente: Acadêmico / Institucional</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <CustomButton title="Voltar para Home" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}