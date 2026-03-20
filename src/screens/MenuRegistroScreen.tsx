// src/screens/MenuRegistroScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuRegistroScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {/* Hero section con icono de cerdo */}
      <View style={styles.heroSection}>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/pig_vision.png')} style={styles.iconImage} resizeMode="contain" />
        </View>
        <Text style={styles.welcome}>Bienvenido a</Text>
        <Text style={styles.appName}>PigVision</Text>
        <Text style={styles.tagline}>Estimación de peso porcino inteligente</Text>
      </View>

      {/* Opciones principales */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={[styles.card, styles.cardPrimary]} 
          onPress={() => navigation.navigate('TomarFoto')}
        >
          <View style={styles.cardIcon}>
            <Ionicons name="camera" size={48} color="#fff" />
          </View>
          <Text style={styles.cardTitle}>Estimar Peso</Text>
          <Text style={styles.cardSubtitle}>Toma una foto de tu cerdo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card, styles.cardSecondary]} 
          onPress={() => navigation.navigate('Historial')}
        >
          <View style={styles.cardIcon}>
            <Ionicons name="list" size={48} color="#fff" />
          </View>
          <Text style={styles.cardTitle}>Historial</Text>
          <Text style={styles.cardSubtitle}>Ver estimaciones previas</Text>
        </TouchableOpacity>
      </View>

      {/* Info footer */}
      <View style={styles.infoFooter}>
        <Ionicons name="information-circle-outline" size={20} color="#4a8cb0" />
        <Text style={styles.infoText}>Sistema de estimación basado en IA</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8fb',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 28,
  },
  iconContainer: {
    width: 116,
    height: 116,
    borderRadius: 58,
    backgroundColor: '#e8f2f8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  iconImage: {
    width: 150,
    height: 150,
  },
  welcome: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1f4b67',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#4a8cb0',
    textAlign: 'center',
  },
  actionsContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardPrimary: {
    backgroundColor: '#4e9ec5',
  },
  cardSecondary: {
    backgroundColor: '#3f7898',
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  infoFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    paddingTop: 8,
    paddingBottom: 8,
    gap: 8,
  },
  infoText: {
    fontSize: 13,
    color: '#4a8cb0',
  }
});
