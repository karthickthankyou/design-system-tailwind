import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography, { ITypographyProps} from './Typography';

export default {
    title: 'components/designSystem/Typography',
    component: Typography,
} as Meta;

const Template: Story<ITypographyProps> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
