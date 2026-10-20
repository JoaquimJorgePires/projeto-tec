import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primary, justifyContent: 'center', padding: 24 },
  card: { backgroundColor: Colors.cardBackground, padding: 24, borderRadius: 20, elevation: 5 },
  title: { fontSize: 28, fontWeight: 'bold', color: Colors.primary, marginBottom: 4 },
  subtitle: { fontSize: 14, color: Colors.textLight, marginBottom: 24 },
});