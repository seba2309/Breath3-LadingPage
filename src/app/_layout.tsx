import { Stack } from 'expo-router';
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext'; // <-- 1. Importamos el "Cerebro"

export default function RootLayout() {
  return (
    // 2. Envolvemos toda la aplicación para que el tema global esté disponible
    <ThemeProvider>
      {/* Esto le dice a Expo que NO muestre ningún menú por defecto en ninguna pantalla */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}

