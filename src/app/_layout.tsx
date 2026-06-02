import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    // Esto le dice a Expo que NO muestre ningún menú por defecto en ninguna pantalla
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}