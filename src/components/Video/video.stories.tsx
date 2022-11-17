import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Video from './index';
import Image from '../Image';
import { position } from '@/common/mixins';

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
  backdropImage: (
    <Image
      type="backdrop"
      size="big"
      path="/lLsJRHjwHUdg8VoJsgcJLnewRxN.jpg"
      alt="20세기 소녀"
      css={`
        ${position({ type: 'absolute', top: '50%', left: '0%' })}
        transform: translateY(-50%);
        width: 100%;
      `}
    />
  ),
  title: '20세기 소녀',
};
