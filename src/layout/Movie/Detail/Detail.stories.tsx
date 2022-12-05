import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Detail from './index';

export default {
  title: 'layout/Movie/Detail',
  component: Detail,
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = (args) => <Detail {...args} />;

export const detail = Template.bind({});

detail.args = {
  movieId: 705996,
};
