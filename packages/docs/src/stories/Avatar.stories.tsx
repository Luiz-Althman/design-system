import type { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@althman-ui/react';

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: 'https://github.com/luiz-Althman.png',
        alt: 'Luiz Althman',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
};
