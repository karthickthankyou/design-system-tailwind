import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Text, { ITextProps } from './Text'

export default {
  title: 'components/atoms/Text',
  component: Text,
} as Meta

const Template: Story<ITextProps> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'lg',
}
