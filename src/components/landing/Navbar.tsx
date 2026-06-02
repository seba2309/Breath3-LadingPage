import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  useWindowDimensions 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Navbar() {
  const { width } = useWindowDimensions();
  // Equivalente a md: de Tailwind (pantallas mayores a 768px)
  const isTabletOrDesktop = width >= 768;

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.nav}>
          
          {/* Logo y Nombre */}
          <TouchableOpacity style={styles.logoContainer}>
            <LinearGradient
              colors={['#7e22ce', '#4c1d95']} // Degradado del icono
              style={styles.logoIcon}
            >
              <Text style={styles.logoIconText}>B</Text>
            </LinearGradient>
            <Text style={styles.brandName}>Breath3</Text>
          </TouchableOpacity>

          {/* Enlaces de Navegación (Se ocultan en móviles) */}
          {isTabletOrDesktop && (
            <View style={styles.linksContainer}>
              <TouchableOpacity><Text style={styles.navLink}>Características</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.navLink}>Cómo funciona</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.navLink}>Precios</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.navLink}>FAQ</Text></TouchableOpacity>
            </View>
          )}

          {/* Botón Descargar */}
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Descargar</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'fixed' as any, // <-- El truco mágico para que flote en la web
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1152, // max-w-6xl
    paddingHorizontal: 16,
    marginTop: 16,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Efecto glass
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(226, 232, 240, 0.6)', // border-border/60
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2, // Sombra sutil
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIconText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  brandName: {
    fontWeight: '600',
    letterSpacing: -0.5,
    fontSize: 16,
    color: '#0f172a',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  navLink: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  downloadButton: {
    backgroundColor: '#0f172a', // text-foreground / botones oscuros
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  downloadButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});