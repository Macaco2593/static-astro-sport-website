/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Colores inspirados en natación (Agua, Profundidad, Energía)
				adadet: {
					main: '#0ea5e9',    // Azul Cian (Agua viva)
					dark: '#0f172a',    // Azul Profundo (Fondos)
					light: '#f0f9ff',   // Azul muy pálido (Fondos claros)
					accent: '#f59e0b',  // Dorado/Naranja (Medallas/Acción)
				}
			},
			fontFamily: {
				// Una fuente moderna y deportiva
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Montserrat', 'system-ui', 'sans-serif'], // Para títulos grandes
			},
            backgroundImage: {
                'gradient-water': 'linear-gradient(to right bottom, #0ea5e9, #2563eb)',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
            animation: {
                'gradient-x': 'gradient-x 3s ease infinite',
            },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}