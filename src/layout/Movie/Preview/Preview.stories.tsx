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
  movie: {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: 'en',
    original_title: 'Avatar: The Way of Water',
    overview:
      '판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.',
    popularity: 10226.166,
    poster_path: '/z56bVX93oRG6uDeMACR7cXCnAbh.jpg',
    release_date: '2022-12-14',
    title: '아바타: 물의 길',
    video: false,
    vote_average: 7.9,
    vote_count: 1918,
  },
};
