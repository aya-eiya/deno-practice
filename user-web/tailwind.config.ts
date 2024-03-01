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
        'infinity-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
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
        'slide-in-left': {
          '0%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '100%': { opacity: '0' },
          '0%': { opacity: '1' },
        },
        'color-fade-in': {
          '0%': { filter: 'saturate(0%)' },
          '100%': { filter: 'saturate(100%)' },
        },
        'color-fade-out': {
          '0%': { filter: 'saturate(0%)' },
          '50%': { filter: 'saturate(100%)' },
          '100%': { color: 'gray-100' },
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
        'infinity-scroll': 'infinity-scroll 36s linear infinite',
        'v-infinity-scroll': 'v-infinity-scroll 6s ease-in-out infinite',
        'v-infinity-scroll-reverse': 'v-infinity-scroll-reverse 6s ease-in-out infinite',
        'slide-down': 'slide-down .6s ease-in',
        'slide-up': 'slide-up 1s linear',
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-out-left': 'slide-out-left 1s ease-out',
        'fade-in': 'fade-in .5s linear',
        'fade-out': 'fade-out .2s linear',
        'color-fade-in': 'color-fade-in .5s linear',
        'color-fade-out': 'color-fade-out .5s linear',
        'drawer-effect': 'drawer-effect .8s ease-out',
        'half-spin': 'half-spin .2s linear',
        'half-spin-reverse': 'half-spin-reverse .2s linear',
      },
    },
  },
} satisfies Config
