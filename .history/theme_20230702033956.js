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
            'gray': {
                '50': '#f8f8f8',
                '100': '#f0f0f0',
                '200': '#e4e4e4',
                '300': '#d1d1d1',
                '400': '#b4b4b4',
                '500': '#9a9a9a',
                '600': '#8c8c8c',
                '700': '#6a6a6a',
                '800': '#5a5a5a',
                '900': '#4e4e4e',
                '950': '#282828',
              },
              'white': {
                '50': '#ffffff',
                '100': '#fcfcfc',
                '200': '#fafafa',
                '300': '#f7f7f7',
                '400': '#f5f5f5',
                '500': '#f2f2f2',
                '600': '#f0f0f0',
                '700': '#ededed',
                '800': '#ebebeb',
                '900': '#e8e8e8',
                '950': '#e6e6e6',
              },
              'cinder': {
                '50': '#f1f1fc',
                '100': '#e5e7fa',
                '200': '#d0d1f5',
                '300': '#b3b4ee',
                '400': '#9894e5',
                '500': '#877ada',
                '600': '#7660cb',
                '700': '#6650b2',
                '800': '#534390',
                '900': '#463b74',
                '950': '#120f1d',
              },
              'comet': {
                '50': '#f7f7f8',
                '100': '#eeedf1',
                '200': '#d8d8df',
                '300': '#b6b6c3',
                '400': '#8e8fa2',
                '500': '#707187',
                '600': '#57576b',
                '700': '#4b4a5a',
                '800': '#3f3f4d',
                '900': '#393842',
                '950': '#26252c',
              },
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
            coolGrey: {
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
        require('@tailwindcss/forms'),
        
    ],
}