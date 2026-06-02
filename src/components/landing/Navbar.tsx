import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  useWindowDimensions 
} from 'react-native';
import Logo from './Logo'; 
import { useTheme } from '../../context/ThemeContext'; // <-- 1. Importamos el gancho del tema

export default function Navbar() {
  const { width } = useWindowDimensions();
  const isTabletOrDesktop = width >= 768;

  // 2. Extraemos el estado actual y la función para cambiarlo
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {/* 3. Aplicamos fondo dinámico al contenedor de navegación */}
        <View style={[styles.nav, isDarkMode ? styles.navDark : styles.navLight]}>
          
          {/* Logo y Nombre */}
          <TouchableOpacity style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Logo width={32} height={32} />
            </View>
            {/* Texto dinámico para el nombre */}
            <Text style={[styles.brandName, isDarkMode ? styles.textWhite : styles.textDark]}>
              Breath3
            </Text>
          </TouchableOpacity>

          {/* Enlaces de Navegación (Se ocultan en móviles) */}
          {isTabletOrDesktop && (
            <View style={styles.linksContainer}>
              <TouchableOpacity><Text style={[styles.navLink, isDarkMode && styles.navLinkDark]}>Características</Text></TouchableOpacity>
              <TouchableOpacity><Text style={[styles.navLink, isDarkMode && styles.navLinkDark]}>Cómo funciona</Text></TouchableOpacity>
              <TouchableOpacity><Text style={[styles.navLink, isDarkMode && styles.navLinkDark]}>Precios</Text></TouchableOpacity>
              <TouchableOpacity><Text style={[styles.navLink, isDarkMode && styles.navLinkDark]}>FAQ</Text></TouchableOpacity>
            </View>
          )}

          {/* Acciones del lado derecho (Botón Tema + Botón Descargar) */}
          <View style={styles.rightActions}>
            
            {/* 4. BOTÓN INTERRUPTOR DE MODO OSCURO */}
            <TouchableOpacity onPress={toggleDarkMode} style={styles.themeButton}>
              <Text style={styles.themeButtonText}>{isDarkMode ? '☀️' : '🌙'}</Text>
            </TouchableOpacity>

            {/* Botón Descargar con color adaptativo */}
            <TouchableOpacity style={[styles.downloadButton, isDarkMode ? styles.downloadButtonDark : styles.downloadButtonLight]}>
              <Text style={[styles.downloadButtonText, isDarkMode ? styles.textDark : styles.textWhite]}>
                Descargar
              </Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'fixed' as any,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1152,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  // Fondos adaptativos para la barra de navegación
  navLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderColor: 'rgba(226, 232, 240, 0.6)',
  },
  navDark: {
    backgroundColor: 'rgba(15, 23, 42, 0.9)', // slate-900 con opacidad
    borderColor: 'rgba(51, 65, 85, 0.5)',     // slate-700 sutil
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontWeight: '600',
    letterSpacing: -0.5,
    fontSize: 16,
  },
  // Colores de texto adaptativos
  textDark: {
    color: '#0f172a', // slate-900
  },
  textWhite: {
    color: '#f8fafc', // slate-50
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  navLink: {
    fontSize: 14,
    color: '#64748b', // slate-500
    fontWeight: '500',
  },
  navLinkDark: {
    color: '#94a3b8', // slate-400
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  // Estilos del nuevo botón de cambio de tema
  themeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  themeButtonText: {
    fontSize: 18,
  },
  downloadButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  downloadButtonLight: {
    backgroundColor: '#0f172a',
  },
  downloadButtonDark: {
    backgroundColor: '#f8fafc',
  },
  downloadButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

