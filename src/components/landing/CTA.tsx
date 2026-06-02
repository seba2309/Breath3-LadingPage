import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CTA() {
  const { width } = useWindowDimensions();
  // Equivalente a md: de Tailwind (pantallas mayores a 768px)
  const isTabletOrDesktop = width >= 768;

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        
        <LinearGradient
          // from-primary-deep via-primary to-violet
          colors={['#4c1d95', '#7e22ce', '#8b5cf6']} 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.card, isTabletOrDesktop && styles.cardLarge]}
        >
          {/* Círculos decorativos para simular el blur-3xl */}
          <View style={styles.glowTopRight} />
          <View style={styles.glowBottomLeft} />

          <Text style={[styles.title, isTabletOrDesktop && styles.titleLarge]}>
            Descárgala hoy. <Text style={styles.titleLight}>Cambia mañana.</Text>
          </Text>
          
          <Text style={styles.description}>
            Únete a miles de personas que ya están disfrutando de una nueva forma de hacer las cosas.
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.btnPrimary}>
              <FontAwesome5 name="apple" size={18} color="#4c1d95" />
              <Text style={styles.btnPrimaryText}>App Store</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnOutline}>
              <FontAwesome5 name="google-play" size={16} color="#ffffff" />
              <Text style={styles.btnOutlineText}>Google Play</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 80,
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: 1152, // max-w-6xl
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 40, // rounded-[2.5rem]
    paddingHorizontal: 32,
    paddingVertical: 80,
    alignItems: 'center',
    overflow: 'hidden', // Para que los círculos decorativos no se salgan de la caja
  },
  cardLarge: {
    paddingHorizontal: 64,
    paddingVertical: 112,
  },
  glowTopRight: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 288, // size-72
    height: 288,
    borderRadius: 144,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  glowBottomLeft: {
    position: 'absolute',
    bottom: -80,
    left: -80,
    width: 288, // size-72
    height: 288,
    borderRadius: 144,
    backgroundColor: 'rgba(139, 92, 246, 0.3)', // bg-violet/30
  },
  title: {
    fontSize: 36, // text-4xl
    lineHeight: 40,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: 672, // max-w-2xl
  },
  titleLarge: {
    fontSize: 60, // md:text-6xl
    lineHeight: 64,
  },
  titleLight: {
    color: 'rgba(255, 255, 255, 0.8)', // text-white/80
  },
  description: {
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.85)', // text-primary-foreground/85
    textAlign: 'center',
    maxWidth: 576, // max-w-xl
    fontSize: 16,
    lineHeight: 24,
  },
  buttonsContainer: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  btnPrimary: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 48,
    borderRadius: 24,
    gap: 8,
  },
  btnPrimaryText: {
    color: '#4c1d95', // text-primary-deep
    fontWeight: '600',
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // bg-white/10
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // border-white/30
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 48,
    borderRadius: 24,
    gap: 8,
  },
  btnOutlineText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});