// src/screens/HistorialScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, RefreshControl, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Estimacion = {
  id: string;
  fotoUri: string;
  pesoEstimado: number;
  fecha: string;
};

export default function HistorialScreen() {
  const [estimaciones, setEstimaciones] = useState<Estimacion[]>([]);
  const [loading, setLoading] = useState(false);

  const cargarHistorial = async () => {
    setLoading(true);
    try {
      const historialStr = await AsyncStorage.getItem('historial_estimaciones');
      if (historialStr) {
        const historial = JSON.parse(historialStr);
        setEstimaciones(historial);
      }
    } catch (error) {
      console.error('Error al cargar historial:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarHistorial();
  }, []);

  const limpiarHistorial = async () => {
    try {
      await AsyncStorage.removeItem('historial_estimaciones');
      setEstimaciones([]);
    } catch (error) {
      console.error('Error al limpiar historial:', error);
    }
  };

  const renderItem = ({ item }: { item: Estimacion }) => {
    const fecha = new Date(item.fecha);
    const fechaFormato = fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Asegurar que pesoEstimado sea un número
    const peso = typeof item.pesoEstimado === 'number' ? item.pesoEstimado : parseFloat(item.pesoEstimado);

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.fotoUri }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Ionicons name="scale-outline" size={24} color="#2f5d75" />
            <Text style={styles.cardPeso}>{peso.toFixed(1)} kg</Text>
          </View>
          <View style={styles.cardFooter}>
            <Ionicons name="calendar-outline" size={16} color="#999" />
            <Text style={styles.cardFecha}>{fechaFormato}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {estimaciones.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconContainer}>
            <Ionicons name="file-tray-outline" size={80} color="#ccc" />
          </View>
          <Text style={styles.emptyTitle}>Sin estimaciones</Text>
          <Text style={styles.emptySubtitle}>
            Las estimaciones que realices aparecerán aquí
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Historial</Text>
              <Text style={styles.headerSubtitle}>{estimaciones.length} estimaciones</Text>
            </View>
            <TouchableOpacity style={styles.clearButton} onPress={limpiarHistorial}>
              <Ionicons name="trash-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={estimaciones}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={cargarHistorial}
                colors={['#2f5d75', '#4a8cb0']}
                tintColor="#2f5d75"
                progressBackgroundColor="#e8f2f8"
              />
            }
            contentContainerStyle={styles.listContent}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8fb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1f4b67',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#5f7280',
    marginTop: 2,
  },
  clearButton: {
    backgroundColor: '#d32f2f',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    padding: 20,
    paddingTop: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    width: 120,
    height: 120,
    backgroundColor: '#d7e6f0',
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardPeso: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2f5d75',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardFecha: {
    fontSize: 13,
    color: '#758896',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyIconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e8f2f8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6a7f8d',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 15,
    color: '#8aa0af',
    textAlign: 'center',
    lineHeight: 22,
  },
});
