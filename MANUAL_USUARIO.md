# Manual de Usuario - PigVision

## 📱 Guía de Uso de la Aplicación Móvil

---

## Índice
1. [Introducción](#1-introducción)
2. [Requisitos](#2-requisitos)
3. [Instalación](#3-instalación)
4. [Inicio de la Aplicación](#4-inicio-de-la-aplicación)
5. [Funcionalidades](#5-funcionalidades)
6. [Preguntas Frecuentes](#6-preguntas-frecuentes)
7. [Solución de Problemas](#7-solución-de-problemas)
8. [Soporte](#8-soporte)

---

## 1. Introducción

### ¿Qué es PigVision?

PigVision es una aplicación móvil que te permite **estimar el peso de cerdos** de manera rápida y precisa usando solo una fotografía. La aplicación utiliza inteligencia artificial avanzada para analizar la imagen y calcular el peso estimado de forma automática.

### Ventajas de usar PigVision

✅ **Rápido**: Obtén la estimación en segundos  
✅ **Preciso**: Tecnología de IA con alta precisión  
✅ **Fácil de usar**: Solo necesitas tomar una foto clara  
✅ **Historial**: Guarda todas tus estimaciones localmente  
✅ **Sin contacto**: No necesitas tocar al animal  
✅ **Interfaz moderna**: Diseño intuitivo en tonos azul y blanco  

---

## 2. Requisitos

### Dispositivo Móvil

- **Sistema Operativo**: Android 8.0 o superior / iOS 12.0 o superior
- **Cámara**: Cámara trasera funcional
- **RAM**: Mínimo 2 GB
- **Almacenamiento**: 100 MB libres
- **Conectividad**: WiFi o datos móviles

### Conectividad

- El dispositivo debe estar conectado a la misma red WiFi que el servidor backend
- O tener acceso a internet si el backend está en la nube

---

## 3. Instalación

### Opción A: Instalación desde APK (Android)

1. **Descargar el archivo APK** desde el enlace proporcionado
2. **Habilitar instalación de fuentes desconocidas**:
   - Ve a Configuración → Seguridad
   - Activa "Fuentes desconocidas" o "Instalar apps desconocidas"
3. **Instalar**:
   - Abre el archivo APK descargado
   - Presiona "Instalar"
   - Espera a que termine la instalación
4. **Abrir la aplicación**

### Opción B: Instalación con Expo Go (Desarrollo)

1. **Descargar Expo Go**:
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
2. **Escanear código QR**:
   - El desarrollador te proporcionará un código QR
   - Abre Expo Go y escanea el código
3. **La app se cargará automáticamente**

---

## 4. Inicio de la Aplicación

### Primera vez

1. **Abrir VacaMetric**
   - Toca el ícono de la aplicación en tu dispositivo

2. **Conceder permisos**
   - La app solicitará permiso para usar la cámara
   - Presiona "Permitir" o "Aceptar"

3. **Pantalla principal**
   - Verás el menú principal con las opciones disponibles

---

## 5. Funcionalidades

### 5.1 Tomar Foto y Estimar Peso

#### Paso 1: Ir a la opción de captura

1. En el menú principal, presiona **"Estimar Peso"** para acceder a la cámara

#### Paso 2: Preparar la fotografía

📸 **Consejos para una buena foto**:
- Asegúrate de que el cerdo esté completamente visible
- Toma la foto desde un lateral (perfil del cerdo)
- Mantén una distancia de 2-3 metros
- Evita que haya obstáculos entre la cámara y el animal
- Procura buena iluminación (luz natural es mejor)
- El cerdo debe estar de pie, no acostado
- Evita sombras muy marcadas
- Coloca el cerdo sobre una superficie clara para mejor contraste

#### Paso 3: Capturar la imagen

Tienes dos opciones:

**Opción A: Usar la cámara**
1. Presiona el botón **"Abrir Cámara"**
2. Apunta al cerdo siguiendo los consejos de fotografía anteriores
3. Presiona el botón de captura
4. Si la foto es clara, confírmala; si no, toma otra

**Opción B: Seleccionar de galería**
1. Presiona **"Galería"**
2. Busca una foto clara del cerdo en tu galería
3. Selecciónala

#### Paso 4: Procesar imagen

1. La app mostrará la imagen seleccionada
2. Presiona **"Estimar Peso"** o **"Calcular"**
3. Aparecerá un mensaje de "Procesando..."
4. Espera unos segundos (usualmente 3-10 segundos)

⏳ **Nota**: El procesamiento puede tardar según tu conexión y la carga del servidor.

#### Paso 5: Ver resultado

1. La app mostrará el **peso estimado en kilogramos**
2. Ejemplo: "Peso estimado: 85.5 kg"
3. La estimación se guardará automáticamente en el historial local
4. Se muestra un indicador de "Análisis completado"

#### Paso 6: Opciones post-estimación

Puedes:
- **Resultado guardado**: Ya está almacenado automáticamente en historial
- **Nueva Foto**: Presiona "Nueva Foto" para estimar otro cerdo
- **Ver Historial**: Regresa al menú y presiona "Historial" para ver todas las estimaciones

---

### 5.2 Ver Historial

#### Acceder al historial

1. Desde el menú principal, presiona **"Historial"**
2. Verás una lista de todas las estimaciones realizadas

#### Información mostrada

Para cada estimación verás:
- 📷 **Miniatura de la foto**
- ⚖️ **Peso estimado**
- 📅 **Fecha y hora** de la estimación
- 🆔 **ID de registro**

#### Ordenamiento

- Las estimaciones más recientes aparecen primero
- Se guardan las últimas 50 estimaciones

#### Ver detalles

1. Toca sobre cualquier registro del historial
2. Se mostrará:
   - La imagen completa
   - El peso estimado
   - Fecha y hora exactas

#### Eliminar registros

*(Funcionalidad a implementar en futuras versiones)*

---

### 5.3 Menú Principal

El menú principal de PigVision te ofrece dos opciones principales:

1. **Estimar Peso** (Botón azul turquesa - #4e9ec5)
   - Captura nueva imagen del cerdo
   - Procesa con IA y obtiene estimación
   - Subtítulo: "Toma una foto de tu cerdo"

2. **Historial** (Botón azul oscuro - #3f7898)
   - Consulta todas las estimaciones previas
   - Ver fotos y pesos estimados
   - Subtítulo: "Ver estimaciones previas"

---

## 6. Preguntas Frecuentes

### ¿Qué tan precisa es la estimación?

La precisión es de aproximadamente **95%**, con un margen de error de ±15-20 kg en promedio. La precisión puede variar según:
- Calidad de la foto
- Iluminación
- Posición de la vaca
- Raza del animal

### ¿Funciona con cualquier raza de vaca?

Sí, el modelo fue entrenado con diversas razas de ganado bovino. Sin embargo, funciona mejor con razas comunes de producción.

### ¿Necesito internet?

Sí, la aplicación necesita conexión a internet o estar en la misma red WiFi que el servidor backend para procesar las imágenes.

### ¿Por qué tarda en procesar?

El procesamiento involucra varios modelos de inteligencia artificial:
1. Segmentación de la vaca en la imagen
2. Extracción de características
3. Estimación de peso con múltiples modelos

Este proceso puede tomar 3-10 segundos dependiendo del servidor y la conexión.

### ¿Las fotos se guardan en algún servidor?

Las imágenes se procesan temporalmente en el servidor y luego se eliminan. Localmente, se guardan en tu dispositivo dentro de la app.

### ¿Puedo usar la app sin conexión?

No, actualmente requiere conexión para enviar las imágenes al servidor de procesamiento.

### ¿Cuántas estimaciones puedo hacer?

No hay límite de estimaciones. El historial local guarda las últimas 50.

### ¿Funciona con terneros o toros?

Sí, funciona con ganado bovino en general, aunque fue optimizado principalmente para vacas adultas.

---

## 7. Solución de Problemas

### Problema: "Error de conexión" o "No se pudo conectar al servidor"

**Causas posibles**:
- No hay conexión a internet
- El servidor backend está apagado
- Estás en una red diferente al servidor

**Soluciones**:
1. Verifica tu conexión WiFi o datos móviles
2. Asegúrate de estar en la misma red que el servidor
3. Contacta al administrador del sistema
4. Espera unos minutos y vuelve a intentar

---

### Problema: "No se detectó ninguna vaca en la imagen"

**Causas posibles**:
- La vaca no está visible completamente
- Foto muy borrosa o con poca luz
- Hay obstáculos que bloquean la vista

**Soluciones**:
1. Toma una nueva foto siguiendo los consejos de fotografía
2. Asegúrate de que la vaca esté completa en el encuadre
3. Mejora la iluminación
4. Acércate o aléjate para mejor encuadre

---

### Problema: "La aplicación se cierra sola"

**Soluciones**:
1. Cierra otras aplicaciones abiertas
2. Reinicia tu dispositivo
3. Desinstala y vuelve a instalar la app
4. Verifica que tu dispositivo cumpla los requisitos mínimos

---

### Problema: "La cámara no funciona"

**Soluciones**:
1. Verifica los permisos de la app:
   - Ve a Configuración → Aplicaciones → VacaMetric
   - Asegúrate de que el permiso de Cámara esté activado
2. Reinicia la aplicación
3. Prueba la cámara en otra app para verificar que funciona

---

### Problema: "El procesamiento tarda mucho"

**Soluciones**:
1. Verifica tu conexión a internet (prueba la velocidad)
2. Espera pacientemente (puede tardar hasta 60 segundos)
3. Si tarda más de 2 minutos, cancela y vuelve a intentar
4. Contacta al administrador si el problema persiste

---

### Problema: "Los pesos estimados parecen incorrectos"

**Soluciones**:
1. Asegúrate de tomar fotos de buena calidad
2. Toma la foto desde el lateral de la vaca
3. Evita fotos con sombras o mala iluminación
4. La estimación es aproximada, puede tener margen de error

---

### Problema: "No puedo ver el historial"

**Soluciones**:
1. Asegúrate de haber realizado al menos una estimación
2. Reinicia la aplicación
3. Verifica los permisos de almacenamiento de la app

---

## 8. Soporte

### Contacto

Si tienes problemas que no se resuelven con este manual:

📧 **Email**: _(Agregar email de soporte)_  
📱 **WhatsApp**: _(Agregar número de soporte)_  
🌐 **Repositorio**: 
- Frontend: https://github.com/JhosepSF/VacaMetric-Project-Front
- Backend: https://github.com/JhosepSF/VacaMetric-Project-Back

### Reportar un error

Al reportar un error, incluye:
1. Modelo de tu dispositivo
2. Versión de Android/iOS
3. Descripción del problema
4. Pasos para reproducir el error
5. Capturas de pantalla si es posible

---

## Glosario

- **Estimación**: Cálculo aproximado del peso
- **Backend**: Servidor que procesa las imágenes
- **IA**: Inteligencia Artificial
- **Historial**: Registro de estimaciones previas
- **APK**: Archivo de instalación para Android
- **Expo**: Plataforma de desarrollo de la app

---

## Consejos para Mejores Resultados

### 🎯 Fotografía ideal:

```
👍 BUENA FOTO:
- Vaca de perfil (lateral)
- Completa en el encuadre
- Luz natural
- Sin obstáculos
- Distancia: 3-5 metros
- Vaca de pie

👎 MALA FOTO:
- Vaca de frente o desde atrás
- Cortada o parcial
- Muy oscura
- Con personas u objetos encima
- Muy cerca o muy lejos
- Vaca acostada
```

### 📏 Distancia recomendada:

```
        3-5 metros
      <---------->
      
📱                 🐄
TELÉFONO          VACA
```

### 💡 Iluminación:

- ☀️ Mejor: Luz natural del día
- ⛅ Buena: Nublado (luz difusa)
- 🌙 Evitar: Noche o muy oscuro
- 💡 Aceptable: Luz artificial uniforme

---

**¡Gracias por usar VacaMetric!**

Estamos comprometidos en mejorar continuamente la aplicación para brindarte el mejor servicio de estimación de peso de ganado.

---

**Versión del Manual**: 1.0  
**Fecha**: Diciembre 2024  
**Desarrollado por**: Jhosep SF
