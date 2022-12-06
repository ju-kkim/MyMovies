import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieItem from './index';

export default {
  title: 'layout/Movie/Item',
  component: MovieItem,
} as ComponentMeta<typeof MovieItem>;

const Template: ComponentStory<typeof MovieItem> = (args) => <MovieItem {...args} />;

export const Item = Template.bind({});

Item.args = {
  movie: {
    id: 851644,
    title: '20세기 소녀',
    poster_path: '/xM9Jt2sA6QcvLuHKM0RI3BMtFc5.jpg',
  },
  imgSize: 'normal',
};
