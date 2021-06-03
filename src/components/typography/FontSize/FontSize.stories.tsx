import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FontSize, { IFontSizeProps} from './FontSize';

export default {
    title: 'components/typography/FontSize',
    component: FontSize,
} as Meta;

const Template: Story<IFontSizeProps> = (args) => <FontSize {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
