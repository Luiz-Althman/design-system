import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@althman-ui/react';
import { ArrowRight } from 'phosphor-react';

export default {
    title: 'Form/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        // Eu coloco logs de ações, como o onClick e faço tipo um enum com as variaveis que esse Button tem. No caso, variant e size. Assim, que  estiver usando o design system, tem as opções de testes de variações no controls definidas.
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        onClick: {
            action: 'Click',
        },
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new',
    },
};

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
};

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    },
};

export const WithIcon: StoryObj<ButtonProps> = {
    render: (args) => (
        <Button {...args}>
            Próximo passo <ArrowRight />
        </Button>
    ),
};

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
};
