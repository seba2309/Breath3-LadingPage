import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const steps = [
  { n: "01", title: "Descarga la app", desc: "Disponible gratis en App Store y Google Play." },
  { n: "02", title: "Crea tu cuenta", desc: "Configuración en menos de 60 segundos." },
  { n: "03", title: "Empieza a usarla", desc: "Disfruta de una experiencia diseñada para ti." },
];

export default function HowItWorks() {
  const { width } = useWindowDimensions();
  // Equivalente a md: (pantallas tipo tablet o PC)
  const isTabletOrDesktop = width >= 768;

  return (
    <View style={[styles.section, isTabletOrDesktop && styles.sectionLarge]}>
      <View style={styles.container}>
        
        {/* Cabecera de la sección */}
        <View style={styles.headerContainer}>
          <View style={styles.maxWidthContainer}>
            <Text style={styles.subtitle}>Cómo funciona</Text>
            <Text style={[styles.title, isTabletOrDesktop && styles.titleLarge]}>
              Empieza en tres pasos.
            </Text>
          </View>
        </View>

        {/* Grid de pasos */}
        <View style={[styles.grid, isTabletOrDesktop && styles.gridLarge]}>
          {steps.map((s) => (
            <View key={s.n} style={styles.card}>
              <Text style={styles.cardNumber}>{s.n}</Text>
              <Text style={styles.cardTitle}>{s.title}</Text>
              <Text style={styles.cardDesc}>{s.desc}</Text>
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
    backgroundColor: '#f8fafc', // bg-secondary/40 (Un gris/azulado muy suave)
    paddingHorizontal: 16,
  },
  sectionLarge: {
    paddingVertical: 128,
  },
  container: {
    maxWidth: 1152,
    width: '100%',
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: 24,
  },
  maxWidthContainer: {
    maxWidth: 576,
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
    flexDirection: 'column',
    gap: 24,
  },
  gridLarge: {
    flexDirection: 'row',
  },
  card: {
    flex: 1, // Para que ocupen el mismo ancho en PC
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: '#e2e8f0', // border-border
  },
  cardNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'rgba(126, 34, 206, 0.25)', // primary/25
  },
  cardTitle: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '600',
    color: '#0f172a',
  },
  cardDesc: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748b', // muted-foreground
    lineHeight: 24,
  },
});