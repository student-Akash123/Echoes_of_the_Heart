import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
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
				// Cosmic Color Palette
				space: {
					void: 'hsl(var(--space-void))',
					deep: 'hsl(var(--space-deep))',
					nebula: 'hsl(var(--space-nebula))',
					surface: 'hsl(var(--space-surface))'
				},
				stellar: {
					white: 'hsl(var(--stellar-white))',
					silver: 'hsl(var(--cosmic-silver))',
				},
				nebula: {
					mist: 'hsl(var(--nebula-mist))',
				},
				// Emotional Stars
				emotions: {
					joy: 'hsl(var(--joy-star))',
					hope: 'hsl(var(--hope-star))',
					longing: 'hsl(var(--longing-star))',
					passion: 'hsl(var(--passion-star))',
					sadness: 'hsl(var(--sadness-star))'
				}
			},
			backgroundImage: {
				'galaxy': 'var(--galaxy-bg)',
				'stellar-gradient': 'var(--stellar-gradient)',
				'nebula-gradient': 'var(--nebula-gradient)',
				'cosmic-shimmer': 'var(--cosmic-shimmer)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' }
				},
				'stellar-pulse': {
					'0%': { opacity: '0.6', transform: 'scale(1)' },
					'100%': { opacity: '1', transform: 'scale(1.05)' }
				},
				shimmer: {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				twinkle: {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' }
				},
				orbit: {
					'0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
				}
			},
			animation: {
				'float': 'float var(--float-duration) ease-in-out infinite',
				'stellar-pulse': 'stellar-pulse var(--pulse-duration) ease-in-out infinite alternate',
				'shimmer': 'shimmer var(--shimmer-duration) ease-in-out infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;