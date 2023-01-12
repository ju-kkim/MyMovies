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
  movies: [
    {
      adult: false,
      backdrop_path: '/AuV99eQivVWuk2AOSM6hYh9QRPQ.jpg',
      genre_ids: [12, 10751, 14],
      id: 411,
      original_language: 'en',
      original_title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      overview:
        '제2차 세계대전 중의 영국. 공습을 피해 디고리 교수의 시골 별장으로 간 페번시가의 네 남매인 피터, 수잔, 에드먼드, 루시는 마법의 옷장을 통해 신비로운 나라 나니아로 들어선다. 말하는 동물들과 켄타우로스, 거인들이 평화롭게 어울려 사는 땅이었던 나니아는 사악한 하얀 마녀 제이디스에 의해 긴 겨울에 감금되어 있다. 게다가 이 겨울에는 크리스마스도 없다. 호기심 많은 루시, 퉁명스러운 에드먼드, 신중한 수잔, 분별 있는 맏이 피터는 고귀한 사자 아슬란의 인도로 제이디스의 싸늘한 주문을 깨는 싸움에 가담한다.',
      popularity: 2285.473,
      poster_path: '/xo86KtpjsGZRuI3vF17aHxHNX3E.jpg',
      release_date: '2005-12-07',
      title: '나니아 연대기: 사자, 마녀 그리고 옷장',
      video: false,
      vote_average: 7.108,
      vote_count: 9146,
    },
    {
      adult: false,
      backdrop_path: '/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg',
      genre_ids: [878, 27, 35],
      id: 536554,
      original_language: 'en',
      original_title: 'M3GAN',
      overview:
        '교통사고로 부모를 잃고 혼자가 된 소녀 ‘케이디’. 로봇 엔지니어이자, ‘케이디’의 보호자가 된 ‘젬마’는 ‘케이디’를 안전하게 지켜야 하는 프로그램이 입력된 AI 로봇 ‘메간’을 선물한다. 메간은 언제나 ‘케이디’의 곁을 지켜주며 함께 웃고, 힘들 땐 위로해주는 둘도 없는 친구가 된다. 어느 날, ‘케이디’가 위험에 처하자 ‘메간’은 예측할 수 없는 방향으로 업그레이드되며 감당할 수 없는 일들이 벌어지는데…',
      popularity: 2286.559,
      poster_path: '/v0TtgXaZZ6NeDxKackgQK9byEDL.jpg',
      release_date: '2023-01-06',
      title: '메간',
      video: false,
      vote_average: 7.18,
      vote_count: 172,
    },
    {
      adult: false,
      backdrop_path: '/53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
      genre_ids: [14, 28, 12],
      id: 736526,
      original_language: 'no',
      original_title: 'Troll',
      overview:
        '고대의 전설이 깨어났다! 아주 오랜 세월, 노르웨이의 산에 잠들어 있던 트롤. 녀석이 세상을 파괴하기 전에 막아야 한다. 골칫덩어리 영웅들이 힘을 합쳐야 가능하지만.',
      popularity: 2042.241,
      poster_path: '/6MEYnNtvyctpshK0nIi6Kor9Av9.jpg',
      release_date: '2022-12-01',
      title: '트롤의 습격',
      video: false,
      vote_average: 6.655,
      vote_count: 979,
    },
  ],
  flexGap: 20,
  itemCount: 5,
  isWrap: false,
};
