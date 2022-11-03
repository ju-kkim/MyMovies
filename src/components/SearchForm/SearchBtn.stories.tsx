import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBtn from './SearchBtn';

export default {
  title: 'component/SearchFrom/Btn',
  component: SearchBtn,
} as ComponentMeta<typeof SearchBtn>;

const Template: ComponentStory<typeof SearchBtn> = (args) => <SearchBtn {...args} />;

export const Btn = Template.bind({});
Btn.args = {
  onClick: (e) => {
    console.log(e);
  },
};
