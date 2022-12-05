import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Preview from './index';

export default {
  title: 'layout/Movie/Preview',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const preview = Template.bind({});

preview.args = {
  title: '20세기 소녀',
  releaseDate: '2022-10-06',
  genres: [
    {
      id: 10749,
      name: '로맨스',
    },
    {
      id: 18,
      name: '드라마',
    },
  ],
};
