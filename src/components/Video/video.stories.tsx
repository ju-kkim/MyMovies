import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Video from './index';

export default {
  title: 'component/Video',
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const video = Template.bind({});
video.args = {
  videoKey: '2JomSAO_TGo',
  isMainvisual: true,
  isAutoPlay: true,
  isControls: false,
  backdropImage: '/lLsJRHjwHUdg8VoJsgcJLnewRxN.jpg',
  title: '20세기 소녀',
};
