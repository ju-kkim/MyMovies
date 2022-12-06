import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieList from './index';

export default {
  title: 'layout/Movie/List',
  component: MovieList,
} as ComponentMeta<typeof MovieList>;

const Template: ComponentStory<typeof MovieList> = (args) => <MovieList {...args} />;

export const list = Template.bind({});
list.args = {
  category: 'popular',
  flexGap: 20,
  itemCount: 5,
  isWrap: false,
};
