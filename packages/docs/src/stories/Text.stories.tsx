import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@althman-ui/react';

export default {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        size: 'md',
        children:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam placeat vitae iusto earum optio totam quibusdam cum nihil non! Explicabo dolor ducimus eos itaque aut quod. Quas voluptatum veritatis aliquam.',
    },
    agrTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    },
};
