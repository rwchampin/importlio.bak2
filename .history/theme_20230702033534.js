// Example preset
module.exports = {
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            'md': '0.375rem',
            'lg': '0.5rem',
            'xl': '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            'full': '9999px',
            'large': '12px',
        },
        spacing: {
            px: '1px',
            0: '0px',
            0.5: '0.125rem',

        },
        colors: {
            blue: {
                light: '#85d7ff',
                DEFAULT: '#1fb6ff',
                dark: '#009eeb',
            },
            pink: {
                light: '#ff7ce5',
                DEFAULT: '#ff49db',
                dark: '#ff16d1',
            },
            gray: {
                darkest: '#333',
                dark: '#3c4858',
                DEFAULT: '#c0ccda',
                light: '#e0e6ed',
                lightest: '#f9fafc',
            }
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            apercu: ['Apercu', 'sans-serif'],
        },
        extend: {
            flexGrow: {
                2: '2',
                3: '3',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}