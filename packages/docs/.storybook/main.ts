import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/pages/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        'storybook-dark-mode',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: (config) => {
        config.base = '/design-system/';
        return config;
    },
};

export default config;
