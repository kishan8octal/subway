/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'primary': '#009C5B',
                'secondary': '#FFFFFF',
                'tertiary': '#000000',
                'secondary-destructive': '#DC2626',
                'destructive': '#DC2626',
                'white-black-white': '#FFFFFF',
                'white-black-black': '#000000',
                'neutral-gray': {
                    '10': '#FAFAFA',
                    '50': '#F5F5F5',
                    '100': '#EDEDED',
                    '200': '#E5E5E5',
                    '300': '#D4D4D4',
                    '400': '#A3A3A3',
                    '500': '#737373',
                    '600': '#525252',
                    '700': '#404040',
                    '800': '#262626',
                    '900': '#171717',
                    '950': '#0A0A0A',
                },
                'green': {
                    '50': '#EBFEF3',
                    '100': '#D0FBE0',
                    '200': '#A4F6C7',
                    '300': '#6AEBAA',
                    '400': '#2FD888',
                    '500': '#0ABF70',
                    '600': '#009C5B',
                    '700': '#007C4C',
                    '800': '#03623D',
                    '900': '#045034',
                    '950': '#012D1E',
                },
                'red': {
                    '50': '#FEF2F2',
                    '100': '#FEE2E2',
                    '200': '#FECACA',
                    '300': '#FCA5A5',
                    '400': '#F87171',
                    '500': '#EF4444',
                    '600': '#DC2626',
                    '700': '#B91C1C',
                    '800': '#991B1B',
                    '900': '#7F1D1D',
                    '950': '#450A0A',
                },
                'yellow': {
                    '50': '#FEFCE8',
                    '100': '#FEF9C3',
                    '200': '#FEF08A',
                    '300': '#FDE047',
                    '400': '#FACC15',
                    '500': '#EAB308',
                    '600': '#CA8A04',
                    '700': '#A16207',
                    '800': '#854D0E',
                    '900': '#713F12',
                    '950': '#422006',
                },
                'blue': {
                    '50': '#EFF6FF',
                    '100': '#DBEAFE',
                    '200': '#BFDBFE',
                    '300': '#93C5FD',
                    '400': '#60A5FA',
                    '500': '#3B82F6',
                    '600': '#2563EB',
                    '700': '#1D4ED8',
                    '800': '#1E40AF',
                    '900': '#1E3A8A',
                    '950': '#172554',
                },
            },
            padding: {
                '3.1': '13px',
            },
            space: {
                '25': '02px',
                '50': '04px',
                '100': '08px',
                '150': '12px',
                '200': '16px',
                '300': '24px',
                '400': '32px',
                '600': '48px',
                '700': '56px',
            },
            boxShadow: {
                'small': '0px 1px 4px 0px rgba(0, 0, 0, 0.05)',
                'medium': '0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
                'large': '0px 2px 10px 0px rgba(0, 0, 0, 0.12)',
                'card': '0px 4px 36px 8px rgba(0, 0, 0, 0.03)',
                'dropdown': '0px 4px 24px 0px rgba(0, 0, 0, 0.20)',
                'modal': 'box-shadow: 0px 7px 32px 0px rgba(0, 0, 0, 0.35)',
                'focus': 'box-shadow: 0px 0px 0px 2px rgba(0, 156, 91, 0.20)',
            },
            fontFamily: {
                inert: ['Inter'],
            },
            fontSize: {
                'display-medium': [
                    '24px', {
                        fontWeight: '500',
                        lineHeight: '24px',
                    },
                ],
                'display-small': [
                    '20px', {
                        fontWeight: '600',
                        lineHeight: '27px',
                    },
                ],
                'title-large': [
                    '18px', {
                        fontWeight: '500',
                        lineHeight: '24px',
                    }],
                'title-medium': [
                    '16px', {
                        fontWeight: '500',
                        lineHeight: '22px',
                    },
                ],
                'title-small': [
                    '14px', {
                        fontWeight: '500',
                        lineHeight: '19px',
                    },
                ],
                'label-large': [
                    '16px', {
                        fontWeight: '500',
                        lineHeight: '16px',
                    }],
                'label-medium': [
                    '14px', {
                        fontWeight: '500',
                        lineHeight: '14px',
                    }],
                'label-small': [
                    '12px', {
                        fontWeight: '500',
                        lineHeight: '12px',
                    }],
                'body-large': [
                    '16px', {
                        fontWeight: '400',
                        lineHeight: '24px',
                    }],
                'body-medium': [
                    '14px', {
                        fontWeight: '400',
                        lineHeight: '21px',
                    }],
                'body-small': [
                    '12px', {
                        fontWeight: '400',
                        lineHeight: '18px',
                    }],
                'caption-medium': [
                    '10px', {
                        fontWeight: '500',
                        lineHeight: '0.625rem',
                    }],
            },
            borderRadius: {
                'small': '4px',
                'medium': '6px',
                'large': '8px',
                'round': '999px',
            },
            keyframes: {
                loading: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'loading': 'loading 2s linear infinite',
            },
        },
    },
    plugins: [],
};

