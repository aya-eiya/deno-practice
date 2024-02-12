import { type Config } from 'tailwindcss'

export default {
  content: [
    '{routes,islands,components}/**/*.{ts,tsx}',
  ],
  safelist: [
    'animation-spin',
  ],
  // アニメーションの設定
  theme: {
    extend: {
      keyframes: {
        'v-infinity-scroll': {
          '0%': { transform: 'translateY(-50%)' },
          '40%': { transform: 'translateY(-100%)' },
          '60%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(-155%)' },
        },
        'v-infinity-scroll-reverse': {
          '100%': { transform: 'translateY(-70%)' },
          '60%': { transform: 'translateY(-120%)' },
          '40%': { transform: 'translateY(-120%)' },
          '0%': { transform: 'translateY(-175%)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-300%)' },
          '50%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-300%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '100%': { opacity: '0' },
          '0%': { opacity: '1' },
        },
        'drawer-effect': {
          '0%': { transform: 'translateY(64px)' },
          '80%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'half-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        'half-spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-45deg)' },
        },
      },
      animation: {
        'v-infinity-scroll': 'v-infinity-scroll 6s ease-in-out infinite',
        'v-infinity-scroll-reverse': 'v-infinity-scroll-reverse 6s ease-in-out infinite',
        'slide-down': 'slide-down .6s ease-in',
        'slide-up': 'slide-up 1s linear',
        'fade-in': 'fade-in .5s linear',
        'fade-out': 'fade-out .2s linear',
        'drawer-effect': 'drawer-effect .8s ease-out',
        'half-spin': 'half-spin .2s linear',
        'half-spin-reverse': 'half-spin-reverse .2s linear',
      },
    },
  },
} satisfies Config
