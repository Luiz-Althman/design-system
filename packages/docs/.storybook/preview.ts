import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
    parameters: {
        darkMode: {
            dark: { ...themes.dark, appBg: 'black' },
            current: 'dark',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: themes.dark,
        },
    },
};

export default preview;
