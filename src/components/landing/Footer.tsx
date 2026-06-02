import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Footer() {
  const { width } = useWindowDimensions();
  const isTabletOrDesktop = width >= 768;

  return (
    <View style={styles.footer}>
      <View style={[styles.container, isTabletOrDesktop && styles.containerLarge]}>
        
        <View style={styles.brandContainer}>
          <LinearGradient
            colors={['#7e22ce', '#4c1d95']}
            style={styles.logoIcon}
          >
            <Text style={styles.logoIconText}>B</Text>
          </LinearGradient>
          <Text style={styles.brandName}>Breath3</Text>
          <Text style={styles.copyright}>© {new Date().getFullYear()}</Text>
        </View>

        <View style={[styles.linksContainer, !isTabletOrDesktop && styles.linksContainerMobile]}>
          <TouchableOpacity><Text style={styles.link}>Privacidad</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Términos</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Contacto</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderColor: '#e2e8f0',
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: 1152,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  containerLarge: {
    flexDirection: 'row',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIconText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  brandName: {
    fontWeight: '600',
    color: '#0f172a',
    fontSize: 14,
  },
  copyright: {
    color: '#64748b',
    fontSize: 14,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  linksContainerMobile: {
    marginTop: 8,
  },
  link: {
    color: '#64748b',
    fontSize: 14,
  },
});