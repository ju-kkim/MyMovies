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
    adult: false,
    backdrop_path: '/rl7Jw8PjhSIjArOlDNv0JQPL1ZV.jpg',
    genre_ids: [10749, 18],
    id: 851644,
    original_language: 'ko',
    original_title: '20세기 소녀',
    overview:
      '보라의 둘도 없는 친구 연두는 심장 수술을 위해 미국에 가면서 자신이 좋아하는 남자 백현진에 대한 모든 정보를 수집해 달라고 보라에게 부탁한다. 보라는 백현진의 가장 친한 친구 풍운호와 먼저 친해지기로 한다. 하지만 보라의 서투른 계획은 예상치 못한 방향으로 전개된다. 새로운 세기가 오기 1년 전인 1999년, 17세가 된 보라는 첫사랑의 열병에 빠진다.',
    popularity: 231.031,
    poster_path: '/xM9Jt2sA6QcvLuHKM0RI3BMtFc5.jpg',
    release_date: '2022-10-06',
    title: '20세기 소녀',
    video: false,
    vote_average: 8.6,
    vote_count: 308,
  },
  imgSize: 'normal',
};
