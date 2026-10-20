import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6', 
    padding: 16,
  },
  headerBox: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  institutionName: {
    fontSize: 12,
    color: '#E5E7EB',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 2,
  },
  studentInfo: {
    fontSize: 13,
    color: '#F9FAFB',
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    paddingTop: 6,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
    paddingLeft: 8,
  },
  noticeBox: {
    backgroundColor: Colors.cardBackground,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  noticeDate: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 4,
  },
  noticeText: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 18,
  },
  buttonSpacing: {
    marginBottom: 8,
  },
  footerContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});