import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import FAQ from '../components/landing/FAQ';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      {/* Contenido desplazable de la página */}
      <ScrollView style={styles.container}>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});


