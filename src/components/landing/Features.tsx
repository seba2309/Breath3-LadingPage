import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Mapeo de los íconos de Lucide a Feather, y reemplazo de las clases de colores por códigos Hex
const features = [
  { icon: "star", title: "Dejar ir", desc: "Escribe en el buzón y libera lo que cargas.", bgColor: "#f3e8ff", iconColor: "#7e22ce" },
  { icon: "zap", title: "Mi Diario", desc: "Sigue tu progreso día a día, con calma.", bgColor: "#e0e7ff", iconColor: "#4f46e5" },
  { icon: "smartphone", title: "Conectar", desc: "Lee historias similares en la comunidad.", bgColor: "#f3e8ff", iconColor: "#7e22ce" },
  { icon: "bell", title: "Ejercicios de calma", desc: "Técnicas de respiración y relajación.", bgColor: "#e0e7ff", iconColor: "#4f46e5" },
  { icon: "shield", title: "Privada por diseño", desc: "Tus datos son tuyos. Cifrado de extremo a extremo.", bgColor: "#f3e8ff", iconColor: "#7e22ce" },
  { icon: "bar-chart-2", title: "Métricas claras", desc: "Visualiza tu bienestar con datos accionables.", bgColor: "#e0e7ff", iconColor: "#4f46e5" },
];

export default function Features() {
  const { width } = useWindowDimensions();
  
  // Lógica responsiva para emular grid-cols de Tailwind
  let numColumns = 1; // Móvil por defecto (sm)
  if (width >= 1024) numColumns = 3; // Escritorio (lg)
  else if (width >= 640) numColumns = 2; // Tablet (md)

  // Calculamos el ancho de cada tarjeta basado en las columnas y el espacio (gap) entre ellas
  const getCardWidth = () => {
    if (numColumns === 1) return '100%';
    if (numColumns === 2) return '48%';
    return '31%';
  };

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        
        {/* Cabecera */}
        <View style={styles.headerContainer}>
          <Text style={styles.subtitle}>Características</Text>
          <Text style={[styles.title, width >= 768 && styles.titleLarge]}>
            Todo lo que necesitas, nada de lo que sobra.
          </Text>
        </View>

        {/* Grilla de Características */}
        <View style={styles.grid}>
          {features.map((f, index) => (
            <View 
              key={index} 
              style={[styles.card, { width: getCardWidth() }]}
            >
              <View style={[styles.iconContainer, { backgroundColor: f.bgColor }]}>
                <Feather name={f.icon as any} size={24} color={f.iconColor} />
              </View>
              <Text style={styles.cardTitle}>{f.title}</Text>
              <Text style={styles.cardDesc}>{f.desc}</Text>
            </View>
          ))}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 96,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: 1152,
    width: '100%',
    alignSelf: 'center',
  },
  headerContainer: {
    maxWidth: 672, // max-w-2xl
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7e22ce', // primary
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    marginTop: 12,
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '700',
    color: '#0f172a',
  },
  titleLarge: {
    fontSize: 48,
    lineHeight: 52,
  },
  grid: {
    marginTop: 56,
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que las tarjetas bajen de línea
    justifyContent: 'space-between',
    gap: 20, // Espacio entre tarjetas
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0', // border-border
    padding: 28,
    marginBottom: 20, // Margen inferior extra para cuando envuelven en móvil
    // Sombra suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.5,
    color: '#0f172a',
  },
  cardDesc: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748b', // muted-foreground
    lineHeight: 22,
  },
});
