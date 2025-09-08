/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-navy': '#0a0a23',
        'dark-purple': '#1a0b2e',
        'deep-blue': '#16213e',
        'electric-blue': '#00d4ff',
        'neon-cyan': '#39ff14',
        'vibrant-purple': '#8a2be2',
        'hot-pink': '#ff1493',
        'glass': 'rgba(255, 255, 255, 0.1)',
        'blue-500': '#3b82f6',
        'cyan-400': '#22d3ee',
        'green-500': '#10b981',
        'emerald-400': '#34d399',
        'purple-500': '#8b5cf6',
        'violet-400': '#a78bfa',
        'orange-500': '#f97316',
        'yellow-400': '#facc15',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 5vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 6vw, 4rem)',
        'fluid-5xl': 'clamp(3rem, 8vw, 5rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
          '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00d4ff' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(135deg, #0a0a23 0%, #1a0b2e 50%, #16213e 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00d4ff, #39ff14, #8a2be2, #ff1493)',
      },
      boxShadow: {
        'neon': '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff, 0 0 20px #00d4ff',
        'neon-pink': '0 0 5px #ff1493, 0 0 10px #ff1493, 0 0 15px #ff1493, 0 0 20px #ff1493',
        'neon-purple': '0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2, 0 0 20px #8a2be2',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
}
