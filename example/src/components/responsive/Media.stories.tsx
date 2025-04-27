import type {Meta, StoryObj} from '@storybook/react';

import {Col, Container, Flex, Row, MediaConsumer} from '@acrool/react-grid';
import React from 'react';
import styled from 'styled-components';

const meta = {
    title: 'Responsive/Media',
    parameters: {},
    argTypes: {},
    args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;


const sizes = Array.from({length: 18}).map((row,idx) => idx);


export const Media: Story = {
    args: {},
    render: function Render(args) {
        return <Flex column className="gap-2">

            <MediaConsumer
                sizes={['xs','md']}
            >
                {size => {
                    if(size === 'md'){
                        return <div className="bg-color-4">
                            MD ({size})
                        </div>;
                    }
                    return <div className="bg-color-2">
                        XS ({size})
                    </div>;
                }}
            </MediaConsumer>

        </Flex>;
    },
};
