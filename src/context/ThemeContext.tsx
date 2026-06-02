// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

// Definimos qué información guardará el "cerebro"
type ThemeContextType = {
  isDarkMode: boolean; // ¿Estamos en modo oscuro? (sí/no)
  toggleDarkMode: () => void; // Función para cambiarlo
};

// Creamos el "cerebro" con valores vacíos por defecto
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Este es el "Proveedor", el componente que "envuelve" la app y reparte la info
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // 1. Miramos qué prefiere el sistema del usuario (si ya tiene modo oscuro activado)
  const colorScheme = useColorScheme();
  
  // 2. Guardamos el estado inicial basado en la preferencia del sistema
  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorScheme === 'dark');

  // 3. Esta es la función mágica que usará el botón del Navbar
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // 4. Compartimos esta información con el resto de la app
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Este es un "gancho" (hook) para que cualquier componente pueda usar el tema fácilmente
export const useTheme = () => useContext(ThemeContext);
