import './reset.css';
import '@acrool/react-grid/dist/index.css';

import type {Preview} from '@storybook/react';


const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
};

export default preview;
