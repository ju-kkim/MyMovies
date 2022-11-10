import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from './index';
import { typography } from '@/common/mixins';
import COLOR from '@/common/color';

export default {
  title: 'component/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const icon = Template.bind({});
icon.args = {
  icon: 'mute',
  disabled: false,
  iconSize: '50px',
  clickHandler: (e) => {
    console.log(e);
  },
};

export const iconText = Template.bind({});

iconText.args = {
  icon: 'mute',
  iconSize: '28px',
  text: '음소거',
  textStyle: typography({ size: 'medium' }),
  buttonStyle: `padding: 5px 10px; border-radius: 10px; background: ${COLOR.GREY[200]}; `,
};
