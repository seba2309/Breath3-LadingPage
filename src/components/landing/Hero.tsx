import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  useWindowDimensions
} from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Hero() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 1024;

  return (
    <LinearGradient 
      colors={['#fdfcfd', '#ffffff']} 
      style={styles.backgroundWrapper}
    >
      <View style={[styles.container, isLargeScreen && styles.containerLarge]}>
        
        {/* COLUMNA IZQUIERDA */}
        <View style={[styles.textColumn, isLargeScreen && styles.textColumnLarge]}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>✨ Nueva actualización disponible</Text>
          </View>
          <Text style={[styles.title, isLargeScreen && styles.titleLarge]}>
            La forma más{'\n'}
            <Text style={styles.textHighlight}>simple</Text> de{'\n'}
            cuidar lo que{'\n'}
            importa.
          </Text>
          <Text style={styles.description}>
            Encuentra tu paz interior con herramientas diseñadas para el bienestar. 
            Simple, privada y creada para acompañarte en tu día a día.
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.btnPrimary}>
              <FontAwesome5 name="download" size={18} color="#fff" />
              <Text style={styles.btnPrimaryText}>Descargar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLink}>
              <Text style={styles.btnLinkText}>Explorar funciones</Text>
              <Feather name="chevron-right" size={16} color="#4c1d95" />
            </TouchableOpacity>
          </View>
        </View>

        {/* COLUMNA DERECHA: MOCKUP A SANGRE */}
        <View style={isLargeScreen ? styles.imageColumnLarge : styles.imageColumn}>
          <View style={styles.phone3DWrapper}>
            <View style={styles.phoneFrame}>
              <View style={styles.notch} />
              
              {/* Contenido sin márgenes para ocupar todo el espacio */}
              <View style={styles.screenContent}>
                <View style={styles.screenHeader}>
                  <View style={styles.iconCircleBlue}><Feather name="sun" size={16} color="#3b82f6" /></View>
                  <View style={styles.pillButton}><Text style={styles.pillButtonText}>Registro Diario</Text></View>
                </View>
                
                <View style={styles.mainContentPadding}>
                  <Text style={styles.screenTitle}>¿Cómo estás hoy?</Text>
                  <Text style={styles.screenSubtitle}>Tómate un momento para registrar tu estado de ánimo.</Text>
                </View>

                <View style={styles.cardsRow}>
                  <View style={styles.cardHalf}>
                    <View style={styles.iconCirclePurple}><FontAwesome5 name="leaf" size={16} color="#9333ea" /></View>
                    <Text style={styles.cardTitlePurple}>Dejar ir</Text>
                    <Text style={styles.cardSubtitle}>Escribe en el buzón</Text>
                  </View>
                  <View style={styles.cardHalf}>
                    <View style={styles.iconCircleIndigo}><Feather name="book-open" size={18} color="#4f46e5" /></View>
                    <Text style={styles.cardTitleIndigo}>Mi Diario</Text>
                    <Text style={styles.cardSubtitle}>Sigue tu progreso</Text>
                  </View>
                </View>

                <View style={styles.listItem}><View style={styles.listItemText}><Text style={styles.listTitleTeal}>Conectar</Text><Text style={styles.listSubtitle}>Historias de la comunidad</Text></View><View style={styles.iconCircleTeal}><Feather name="users" size={16} color="#0d9488" /></View></View>
                <View style={styles.listItem}><View style={styles.listItemText}><Text style={styles.listTitleTeal}>Ejercicios de Calma</Text><Text style={styles.listSubtitle}>Técnicas de relajación</Text></View><View style={styles.iconCircleLightBlue}><Feather name="cloud" size={16} color="#0891b2" /></View></View>
              </View>
            </View>
          </View>
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundWrapper: { width: '100%', paddingVertical: 40 },
  container: { paddingHorizontal: 24, alignItems: 'center', maxWidth: 1100, width: '100%', alignSelf: 'center' },
  containerLarge: { flexDirection: 'row', paddingTop: 60, justifyContent: 'center' },
  textColumn: { width: '100%', alignItems: 'center', textAlign: 'center' },
  textColumnLarge: { flex: 1, alignItems: 'flex-start', paddingRight: 60 },
  badge: { backgroundColor: '#f3e8ff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginBottom: 24 },
  badgeText: { color: '#7e22ce', fontSize: 13, fontWeight: '700' },
  title: { fontSize: 44, lineHeight: 52, fontWeight: '800', color: '#1e1b4b', textAlign: 'center', marginBottom: 20 },
  titleLarge: { fontSize: 64, lineHeight: 70, textAlign: 'left' },
  textHighlight: { color: '#7e22ce' },
  description: { fontSize: 18, color: '#475569', textAlign: 'center', marginBottom: 32, maxWidth: 450, lineHeight: 28 },
  buttonsContainer: { flexDirection: 'row', gap: 16, marginBottom: 32 },
  btnPrimary: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e1b4b', paddingHorizontal: 28, paddingVertical: 14, borderRadius: 12, gap: 8 },
  btnPrimaryText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  btnLink: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  btnLinkText: { color: '#4c1d95', fontWeight: '600', fontSize: 16 },
  
  imageColumn: { marginTop: 40, alignItems: 'center' },
  imageColumnLarge: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  phone3DWrapper: { 
    transform: [{ perspective: 1000 }, { rotateX: '10deg' }, { rotateY: '-10deg' }],
    shadowColor: '#4c1d95', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.2, shadowRadius: 40 
  },
  phoneFrame: { width: 250, height: 530, backgroundColor: '#fff', borderRadius: 40, borderWidth: 6, borderColor: '#000', overflow: 'hidden' },
  notch: { position: 'absolute', top: 0, alignSelf: 'center', width: 90, height: 22, backgroundColor: '#000', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, zIndex: 10 },
  screenContent: { flex: 1, paddingTop: 50 },
  mainContentPadding: { paddingHorizontal: 24 },
  screenHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, paddingHorizontal: 24 },
  iconCircleBlue: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#eff6ff', justifyContent: 'center', alignItems: 'center' },
  pillButton: { backgroundColor: '#dbeafe', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  pillButtonText: { color: '#1e3a8a', fontSize: 10, fontWeight: '700' },
  screenTitle: { fontSize: 20, fontWeight: '800', color: '#1e1b4b', marginBottom: 6 },
  screenSubtitle: { fontSize: 12, color: '#3b82f6', marginBottom: 20, lineHeight: 16 },
  cardsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, paddingHorizontal: 24 },
  cardHalf: { width: '47%', backgroundColor: '#f8fafc', padding: 12, borderRadius: 16 },
  iconCirclePurple: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#fae8ff', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  iconCircleIndigo: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#e0e7ff', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  cardTitlePurple: { fontSize: 12, fontWeight: '700', color: '#7e22ce' },
  cardTitleIndigo: { fontSize: 12, fontWeight: '700', color: '#4f46e5' },
  cardSubtitle: { fontSize: 9, color: '#a855f7' },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 24, borderTopWidth: 1, borderColor: '#f1f5f9' },
  listItemText: { flex: 1 },
  listTitleTeal: { fontSize: 13, fontWeight: '700', color: '#0f766e', marginBottom: 2 },
  listSubtitle: { fontSize: 10, color: '#0d9488' },
  iconCircleTeal: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#ccfbf1', justifyContent: 'center', alignItems: 'center' },
  iconCircleLightBlue: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#cffafe', justifyContent: 'center', alignItems: 'center' },
});