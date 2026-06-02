import React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Text,
} from 'react-native-svg';
 
interface LogoProps {
  width?: number;
  height?: number;
  showText?: boolean;
}
 
/**
 * Breath3 Logo — SVG vectorial puro
 *
 * Requiere: react-native-svg
 * Instalar: npm install react-native-svg
 *            npx pod-install (iOS)
 *
 * Props:
 *   width     — ancho del logo (default: 160)
 *   height    — alto del logo (default: 200)
 *   showText  — mostrar "Breath3" debajo (default: true)
 */
export default function Logo({
  width = 160,
  height = 200,
  showText = true,
}: LogoProps) {
  // viewBox interna: 200 x 250 (B: 200x190, texto: ~60 de alto)
  const vbWidth = 200;
  const vbHeight = showText ? 250 : 190;
 
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      accessibilityLabel="Breath3 logo"
    >
      <Defs>
        {/* Gradiente de arriba (celeste) a abajo (azul lavanda) */}
        <LinearGradient id="bGrad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#5BC8F5" stopOpacity="1" />
          <Stop offset="1" stopColor="#7B8FEF" stopOpacity="1" />
        </LinearGradient>
      </Defs>
 
      {/*
        ── Letra "B" vectorial ──────────────────────────────────────
        Construida como un solo path con la regla evenodd para que
        los "huecos" de los dos lóbulos queden transparentes.
 
        Anatomía (coordenadas sobre viewBox 200×190):
          • Contorno exterior: rectángulo de esquinas muy redondeadas
          • Hueco superior:    rectángulo redondeado (lóbulo top)
          • Hueco inferior:    rectángulo redondeado (lóbulo bottom)
 
        Medidas clave:
          exterior  : x=10, y=5, w=180, h=180, r=36
          spine     : columna izquierda ~10→52 px de ancho
          lóbulo top: x=52, y=22, w=108, h=66, r=22   (termina redondeado a la derecha)
          lóbulo bot: x=52, y=102, w=118, h=66, r=22
      ──────────────────────────────────────────────────────────── */}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#bGrad)"
        d={`
          M 46 5
          L 134 5
          Q 190 5 190 58
          L 190 68
          Q 190 96 168 104
          Q 190 112 190 140
          L 190 150
          Q 190 185 134 185
          L 46 185
          Q 10 185 10 152
          L 10 38
          Q 10 5 46 5
          Z
 
          M 54 27
          L 132 27
          Q 162 27 162 55
          Q 162 83 132 83
          L 54 83
          Z
 
          M 54 107
          L 138 107
          Q 168 107 168 135
          Q 168 163 138 163
          L 54 163
          Z
        `}
      />
 
      {/* Texto "Breath3" — solo si showText=true */}
      {showText && (
        <Text
          x="100"
          y="238"
          textAnchor="middle"
          fontSize="42"
          fontWeight="700"
          fontFamily="System"
          fill="#2235B0"
          letterSpacing={0.5}
        >
          {'Breath3'}
        </Text>
      )}
    </Svg>
  );
}
