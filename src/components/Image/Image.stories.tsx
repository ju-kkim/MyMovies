import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './index';

export default {
  title: 'component/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const nullImage = Template.bind({});
nullImage.args = {
  type: 'poster',
  size: 'normal',
  path: null,
  alt: '포스터',
};

export const Poster = Template.bind({});
Poster.args = {
  type: 'poster',
  size: 'normal',
  path: '/xM9Jt2sA6QcvLuHKM0RI3BMtFc5.jpg',
  alt: '포스터',
};

export const Backdrop = Template.bind({});
Backdrop.args = {
  type: 'backdrop',
  size: 'normal',
  path: '/lLsJRHjwHUdg8VoJsgcJLnewRxN.jpg',
  alt: '배경',
};

export const Logo = Template.bind({});
Logo.args = {
  type: 'logo',
  size: 'normal',
  path: '/49l7aBaCDg7Op6lltc3p6SYkwBw.png',
  alt: '로고',
};

export const Profile = Template.bind({});
Profile.args = {
  type: 'profile',
  size: 'normal',
  path: '/A67wGhTozfav5saZ1Umi5f98Ezb.jpg',
  alt: '프로필',
};
