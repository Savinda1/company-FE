/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        typing: {
      '0%': { width: '0' },
      '100%': { width: '100%' },
    },
    blink: {
      '0%, 100%': { borderColor: 'transparent' },
      '50%': { borderColor: 'white' },
    },
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    flip: {
      '0%': { transform: 'rotateY(0deg)' },
      '100%': { transform: 'rotateY(360deg)' },
    },
     flipUp: {
      '0%': { transform: 'rotateX(0deg)' },
      '100%': { transform: 'rotateX(-180deg)' },
    },
     flipDown: {
      '0%': { transform: 'rotateX(180deg)' },
      '100%': { transform: 'rotateX(0deg)' },
    },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' }
        },
       'slideDown': {
      '0%': { transform: 'translateY(-100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
        // 👇 ADD THIS
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        slideUp: {
    '0%': { transform: 'translateY(100%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },typewriter: {
    '0%': { width: '0' },
    '100%': { width: '100%' },
  }, 'bounce-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)' }
        }, 
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // 👇 ADD THIS
        zoom: 'zoom 10s ease-in-out infinite',
         typing: 'typing 3s steps(30, end) forwards',
    blink: 'blink 1s step-start infinite',
    fadeIn: 'fadeIn 2s ease-in-out forwards',
     flip: 'flip 5s ease-in-out',
       flipdown: 'flipUp 1s ease-in-out',
       flipDown: 'flipDown 1s ease-in-out',
 slideUp: 'slideUp 0.8s ease-out',
 typewriter: 'typewriter 3s steps(30) 1s forwards',
slideDown: 'slideDown 5.16s infinite',
'bounce': 'bounce 3s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide')
  ],
};
