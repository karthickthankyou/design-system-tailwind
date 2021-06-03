import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Colors, { IColorsProps} from './Colors';

export default {
    title: 'components/designSystem/Colors',
    component: Colors,
} as Meta;

const Template: Story<IColorsProps> = (args) => <Colors {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
