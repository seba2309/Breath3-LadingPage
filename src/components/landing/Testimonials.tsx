import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const reviews = [
  { name: "María G.", text: "Una de las apps mejor diseñadas que he usado. Súper intuitiva.", role: "Diseñadora" },
  { name: "Carlos P.", text: "Reemplazó tres apps que tenía. Limpia, rápida y elegante.", role: "Emprendedor" },
  { name: "Andrea L.", text: "Las notificaciones son perfectas. Nunca molestan, siempre ayudan.", role: "Estudiante" },
];

export default function Testimonials() {
  const { width } = useWindowDimensions();
  const isTabletOrDesktop = width >= 768;

  // Si es PC/Tablet, las tarjetas ocupan un ~31% del ancho. En celular, el 100%.
  const getCardWidth = () => {
    return isTabletOrDesktop ? '31%' : '100%';
  };

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        
        {/* Cabecera */}
        <View style={styles.headerContainer}>
          <Text style={styles.subtitle}>Testimonios</Text>
          <Text style={[styles.title, isTabletOrDesktop && styles.titleLarge]}>
            Amada por miles de personas.
          </Text>
        </View>

        {/* Grilla de Testimonios */}
        <View style={styles.grid}>
          {reviews.map((r, index) => (
            <View key={index} style={[styles.card, { width: getCardWidth() }]}>
              
              <Text style={styles.quoteText}>"{r.text}"</Text>
              
              <View style={styles.authorContainer}>
                <LinearGradient
                  colors={['#7e22ce', '#4c1d95']} // from-primary to-primary-deep
                  style={styles.avatar}
                >
                  <Text style={styles.avatarText}>{r.name[0]}</Text>
                </LinearGradient>
                
                <View>
                  <Text style={styles.authorName}>{r.name}</Text>
                  <Text style={styles.authorRole}>{r.role}</Text>
                </View>
              </View>

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
    backgroundColor: '#ffffff', // bg-surface (asumiendo blanco para simplificar)
  },
  container: {
    maxWidth: 1152, // max-w-6xl
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  headerContainer: {
    maxWidth: 672, // max-w-2xl
    marginBottom: 56, // mb-14
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
    fontSize: 36, // text-4xl
    lineHeight: 40,
    fontWeight: '700',
    color: '#0f172a',
  },
  titleLarge: {
    fontSize: 48, // text-5xl
    lineHeight: 52,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20, // gap-5 (aprox 20px de separación)
  },
  card: {
    backgroundColor: '#ffffff', // bg-surface
    borderRadius: 24, // rounded-3xl
    borderWidth: 1,
    borderColor: '#e2e8f0', // border-border
    padding: 28, // p-7
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18, // text-lg
    lineHeight: 28, // leading-relaxed
    color: '#0f172a',
  },
  authorContainer: {
    marginTop: 24, // mt-6
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // gap-3
  },
  avatar: {
    width: 40, // size-10
    height: 40,
    borderRadius: 20, // rounded-full
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  authorName: {
    fontWeight: '600',
    fontSize: 14, // text-sm
    color: '#0f172a',
  },
  authorRole: {
    fontSize: 12, // text-xs
    color: '#64748b', // text-muted-foreground
  },
});

