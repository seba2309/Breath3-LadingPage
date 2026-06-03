import { MaterialCommunityIcons } from "@expo/vector-icons"; // Asegúrate de tener esto
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width, height } = Dimensions.get("window");

// Paleta de colores basada en tu imagen
const COLORS = {
  background: "#0A0B1A", // Fondo casi negro con un toque azul oscuro
  darkAccent: "#161933", // Para la tarjeta contenedora
  primaryGlow: "#7E3AF2", // Púrpura brillante como tu imagen
  textMain: "#FFFFFF", // Blanco
  textSub: "#8D90B3", // Gris azulado sutil
};

export default function ConfirmadoPage() {
  const router = useRouter();
  const [accesoPermitido, setAccesoPermitido] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlTieneToken =
        window.location.hash.includes("access_token") ||
        window.location.search.includes("code");

      if (!urlTieneToken) {
        // Redirigir al inicio si se entra manual
        router.replace("/");
      } else {
        setAccesoPermitido(true);
      }
    }
  }, [router]);

  if (!accesoPermitido) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* 1. Elemento de "Brillo" de fondo (Abstracto) */}
      <View style={styles.glowBlob} />

      {/* 2. Tarjeta contenedora con diseño moderno */}
      <View style={styles.card}>
        {/* Ícono de éxito con doble círculo de fondo */}
        <View style={styles.iconWrapper}>
          <View style={styles.iconCircleOuter} />
          <View style={styles.iconCircleInner}>
            <MaterialCommunityIcons
              name="email-check-outline"
              size={60}
              color={COLORS.primaryGlow}
            />
          </View>
        </View>

        {/* Textos */}
        <Text style={styles.titulo}>¡Cuenta Confirmada! 🎉</Text>
        <Text style={styles.subtitulo}>
          Tu correo electrónico ha sido verificado con éxito en nuestra base de
          datos nivel producción. Ya puedes volver a la app de Respiro e iniciar
          sesión.
        </Text>

        {/* Botón de acción (opcional) */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Volver al Inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.background, // Fondo dark mode
  },
  // La burbuja de brillo que sale detrás
  glowBlob: {
    position: "absolute",
    top: height * 0.15,
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: (width * 1.2) / 2,
    backgroundColor: COLORS.primaryGlow,
    opacity: 0.1, // Sutil pero presente
    filter: "blur(100px)", // Esto es CSS puro para el efecto glow en web
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 30,
    borderRadius: 24,
    backgroundColor: COLORS.darkAccent,
    borderWidth: 1,
    borderColor: "#23274D", // Borde sutil para definir la tarjeta
    alignItems: "center",
    zIndex: 1, // Por encima del brillo de fondo
  },
  iconWrapper: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircleOuter: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primaryGlow,
    opacity: 0.1,
  },
  iconCircleInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#0F1122",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.primaryGlow,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.textMain,
    marginBottom: 15,
    fontFamily: "SF Pro Display, sans-serif", // O la fuente que uses
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.textSub,
    lineHeight: 24,
    marginBottom: 30,
  },
  // Botón con el estilo de tu imagen
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primaryGlow,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: COLORS.primaryGlow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.textMain,
  },
});
