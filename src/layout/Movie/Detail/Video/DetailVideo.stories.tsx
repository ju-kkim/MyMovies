import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailVideo from './index';

export default {
  title: 'layout/Movie/Detail/Video',
  component: DetailVideo,
} as ComponentMeta<typeof DetailVideo>;

const Template: ComponentStory<typeof DetailVideo> = (args) => <DetailVideo {...args} />;

export const videos = Template.bind({});
export const videoNone = Template.bind({});

videos.args = {
  videos: [
    {
      iso_639_1: 'ko',
      iso_3166_1: 'KR',
      name: '[헤어질 결심] #박찬욱감독 의 N차 관람 감사 메시지 도착🎁',
      key: 'OooFOI7yIOw',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: false,
      published_at: '2022-08-08T05:55:06.000Z',
      id: '630221625f4b730082680242',
    },
    {
      iso_639_1: 'ko',
      iso_3166_1: 'KR',
      name: 'C네 마을에서만 볼 수 있는 [헤어질 결심] 미공개 명장면 BEST 3',
      key: 'Dw36WlxCYaI',
      site: 'YouTube',
      size: 1080,
      type: 'Clip',
      official: false,
      published_at: '2022-08-03T03:00:09.000Z',
      id: '6302216d5f4b73007faa8670',
    },
    {
      iso_639_1: 'ko',
      iso_3166_1: 'KR',
      name: '올해 한국 영화 N차 관람 1위! [헤어질 결심] 절찬상영중',
      key: 'DcEo-i4C6sM',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: false,
      published_at: '2022-07-29T10:26:48.000Z',
      id: '630221e333a3760082363257',
    },
  ],
};

videoNone.args = {
  videos: [],
};
