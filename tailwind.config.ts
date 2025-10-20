import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
            transform: "scale(1)",
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(var(--primary) / 0.6)",
            transform: "scale(1.02)",
          },
        },
        "bubble-rise": {
          "0%": { 
            transform: "translateY(100vh) scale(0)",
            opacity: "0",
          },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { 
            transform: "translateY(-100px) scale(1)",
            opacity: "0",
          },
        },
        "shake": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "rotate(-3deg)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(3deg)" },
        },
        "bounce-text": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-cart": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "dance": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(-5deg)" },
          "75%": { transform: "translateY(-10px) rotate(5deg)" },
        },
        "float-box": {
          "0%": { 
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.8",
          },
          "50%": { 
            transform: "translateY(-30px) rotate(5deg)",
            opacity: "1",
          },
          "100%": { 
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.8",
          },
        },
        "wave-bg": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-25%) translateY(-5%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "morph-bot": {
          "0%, 100%": { 
            borderRadius: "50%",
            transform: "rotate(0deg) scale(1)",
          },
          "33%": { 
            borderRadius: "30%",
            transform: "rotate(120deg) scale(1.1)",
          },
          "66%": { 
            borderRadius: "40%",
            transform: "rotate(240deg) scale(0.95)",
          },
        },
        "cart-fall": {
          "0%": { 
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
          "50%": { 
            transform: "translateY(30px) rotate(20deg)",
            opacity: "0.8",
          },
          "100%": { 
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
        },
        "sign-wave": {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "jelly-wave": {
          "0%, 100%": { 
            transform: "skewX(0deg) skewY(0deg)",
          },
          "25%": { 
            transform: "skewX(2deg) skewY(-1deg)",
          },
          "50%": { 
            transform: "skewX(0deg) skewY(1deg)",
          },
          "75%": { 
            transform: "skewX(-2deg) skewY(0deg)",
          },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
        "pulse-intense": {
          "0%, 100%": { 
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": { 
            transform: "scale(1.15)",
            opacity: "0.8",
          },
        },
        "neon-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(268 100% 50%), 0 0 40px hsl(268 100% 50%), 0 0 60px hsl(268 100% 50%)",
          },
          "50%": { 
            boxShadow: "0 0 30px hsl(316 100% 50%), 0 0 60px hsl(316 100% 50%), 0 0 90px hsl(316 100% 50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "bubble-rise": "bubble-rise 15s ease-in infinite",
        "shake": "shake 0.5s ease-in-out",
        "bounce-text": "bounce-text 0.6s ease-in-out",
        "spin-cart": "spin-cart 3s linear infinite",
        "dance": "dance 2s ease-in-out infinite",
        "float-box": "float-box 4s ease-in-out infinite",
        "wave-bg": "wave-bg 20s ease-in-out infinite",
        "morph-bot": "morph-bot 6s ease-in-out infinite",
        "cart-fall": "cart-fall 3s ease-in-out infinite",
        "sign-wave": "sign-wave 2s ease-in-out infinite",
        "jelly-wave": "jelly-wave 3s ease-in-out infinite",
        "orbit": "orbit 10s linear infinite",
        "pulse-intense": "pulse-intense 2s ease-in-out infinite",
        "neon-pulse": "neon-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
