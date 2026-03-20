import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.100.7:8000',
  timeout: 60000, // 60 segundos para procesamiento de imagen
});

const PREDICT_UPLOAD_ENDPOINT = '/api/predict/upload/';

const getMensajeErrorBackend = (data: any): string => {
  const preprocessReason = data?.preprocess?.reason;
  const stage = data?.stage;

  if (preprocessReason === 'no_mask_detected') {
    return 'No se pudo segmentar el cerdo en la imagen.';
  }

  if (
    preprocessReason === 'reference_circle_not_found' ||
    preprocessReason === 'reference_circle_not_detected' ||
    preprocessReason === 'no_reference_circle_detected'
  ) {
    return 'No se pudo detectar el circulo de referencia. Verifica que el circulo sea visible, completo y con buen contraste.';
  }

  if (stage === 'preprocess') {
    return 'Fallo el preprocesamiento de la imagen. Repite la foto evitando sombras y desenfoque.';
  }

  return data?.message || 'No se pudo estimar el peso con la imagen enviada.';
};

export const estimarPesoVaca = async (fotoUri: string): Promise<number> => {
  console.log('[API] Iniciando estimación de peso...');
  console.log('[API] URI de foto:', fotoUri);
  
  const formData = new FormData();
  
  // Extraer el nombre del archivo desde la URI
  const filename = fotoUri.split('/').pop() || 'chancho.jpg';
  console.log('[API] Nombre de archivo:', filename);
  
  // @ts-ignore - FormData acepta objetos tipo File/Blob en React Native
  formData.append('image', {
    uri: fotoUri,
    type: 'image/jpeg',
    name: filename,
  });

  try {
    console.log('[API] Enviando petición a:', api.defaults.baseURL + PREDICT_UPLOAD_ENDPOINT);
    
    const response = await api.post(PREDICT_UPLOAD_ENDPOINT, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('[API] Respuesta recibida:', response.data);
    
    if (response.data?.ok === false) {
      const mensaje = getMensajeErrorBackend(response.data);
      const backendError = new Error(mensaje) as Error & { kind?: string; backend?: any };
      backendError.kind = 'backend-validation';
      backendError.backend = response.data;
      throw backendError;
    }

    const pesoEstimado = response.data.peso_estimado_kg;
    
    if (typeof pesoEstimado !== 'number') {
      throw new Error(`Peso estimado inválido: ${pesoEstimado}`);
    }

    // Guardar en historial local
    await guardarEnHistorial(fotoUri, pesoEstimado);

    return pesoEstimado;
  } catch (error: any) {
    console.error('[API] Error detallado:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      code: error.code,
    });
    throw error;
  }
};

const guardarEnHistorial = async (fotoUri: string, pesoEstimado: number) => {
  try {
    const historialStr = await AsyncStorage.getItem('historial_estimaciones');
    const historial = historialStr ? JSON.parse(historialStr) : [];
    
    const nuevaEstimacion = {
      id: Date.now().toString(),
      fotoUri,
      pesoEstimado,
      fecha: new Date().toISOString(),
    };

    historial.unshift(nuevaEstimacion); // Agregar al inicio
    
    // Mantener solo las últimas 50 estimaciones
    const historialLimitado = historial.slice(0, 50);
    
    await AsyncStorage.setItem('historial_estimaciones', JSON.stringify(historialLimitado));
  } catch (error) {
    console.error('Error al guardar en historial:', error);
  }
};

export default api;
