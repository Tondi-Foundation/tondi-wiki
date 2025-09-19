/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
          975: '#01040a',
          990: '#000000',
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-intense': 'glowIntense 1.5s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-fast': 'floatFast 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'matrix-rain': 'matrixRain 2s linear infinite',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15' },
          '100%': { boxShadow: '0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15' },
        },
        glowIntense: {
          '0%': { boxShadow: '0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15, 0 0 40px #facc15' },
          '100%': { boxShadow: '0 0 20px #facc15, 0 0 40px #facc15, 0 0 60px #facc15, 0 0 80px #facc15' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(180deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        cyberPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15, inset 0 0 5px #facc15' 
          },
          '50%': { 
            boxShadow: '0 0 20px #facc15, 0 0 30px #facc15, 0 0 40px #facc15, inset 0 0 20px #facc15' 
          },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '25%, 75%': { opacity: '0.9' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) translateX(10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-10px) translateX(-5px) rotate(180deg)' },
          '75%': { transform: 'translateY(-30px) translateX(15px) rotate(270deg)' },
        },
        textGlow: {
          '0%': { 
            textShadow: '0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15, 0 0 40px #facc15',
            filter: 'brightness(1.2)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

