import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const faqs = [
  { q: "¿Es gratis descargar la app?", a: "Sí, puedes descargarla y usar las funciones esenciales sin costo." },
  { q: "¿Funciona en iPhone y Android?", a: "Sí, está disponible en App Store y Google Play con experiencia nativa en ambas plataformas." },
  { q: "¿Puedo cancelar mi suscripción?", a: "Sí, puedes cancelar en cualquier momento desde la configuración de tu cuenta." },
  { q: "¿Mis datos están seguros?", a: "Usamos cifrado de extremo a extremo. Nunca vendemos ni compartimos tu información." },
];

export default function FAQ() {
  const { width } = useWindowDimensions();
  const isTabletOrDesktop = width >= 768;
  
  // Le decimos a TypeScript que este estado guarda un número (number) o nada (null)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Le decimos a TypeScript que el parámetro 'index' es un número (number)
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View style={styles.section}>
      <View style={styles.container}>
        
        {/* Cabecera */}
        <View style={styles.headerContainer}>
          <Text style={styles.subtitle}>Preguntas frecuentes</Text>
          <Text style={[styles.title, isTabletOrDesktop && styles.titleLarge]}>
            ¿Tienes dudas?
          </Text>
        </View>

        {/* Acordeón de preguntas */}
        <View style={styles.accordionContainer}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            
            return (
              <View key={i} style={styles.accordionItem}>
                <TouchableOpacity 
                  style={styles.accordionTrigger} 
                  onPress={() => toggleAccordion(i)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.questionText}>{f.q}</Text>
                  <Feather 
                    name={isOpen ? "chevron-up" : "chevron-down"} 
                    size={20} 
                    color="#0f172a" 
                  />
                </TouchableOpacity>
                
                {/* Contenido que se muestra solo si está abierto */}
                {isOpen && (
                  <View style={styles.accordionContent}>
                    <Text style={styles.answerText}>{f.a}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 96,
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: 768, // max-w-3xl
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
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
    textAlign: 'center',
  },
  titleLarge: {
    fontSize: 48, // md:text-5xl
    lineHeight: 52,
  },
  accordionContainer: {
    marginTop: 10,
  },
  accordionItem: {
    borderBottomWidth: 1,
    borderColor: '#e2e8f0', // border-border
  },
  accordionTrigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0f172a',
    flex: 1, // Para que el texto ocupe el espacio y el ícono quede a la derecha
    paddingRight: 16,
  },
  accordionContent: {
    paddingBottom: 20,
    paddingRight: 32,
  },
  answerText: {
    fontSize: 16,
    color: '#64748b', // text-muted-foreground
    lineHeight: 24,
  },
});
