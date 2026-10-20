import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  itemLabel: {
    fontSize: 12,
    color: Colors.textLight,
    textTransform: 'uppercase',
    marginTop: 8,
  },
  itemValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 24,
    marginBottom: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 16,
  },
});