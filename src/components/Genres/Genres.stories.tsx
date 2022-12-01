import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Genres from './index';

export default {
  title: 'Component/Genres',
  component: Genres,
} as ComponentMeta<typeof Genres>;

const Template: ComponentStory<typeof Genres> = (args) => <Genres {...args} />;

export const genres = Template.bind({});
genres.args = {
  genres: [
    { id: 28, name: '액션' },
    { id: 878, name: '공상 과학' },
    { id: 14, name: '판타지' },
  ],
  textSize: 'xSmall',
};
