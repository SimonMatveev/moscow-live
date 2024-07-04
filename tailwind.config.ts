import type {Config} from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            spacing: {
                'app-header': '75px',
                'app-content': 'calc(100vh - 75px)',
            },
        },
    },
    plugins: [],
}
export default config
