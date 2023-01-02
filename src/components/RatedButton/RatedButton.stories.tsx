import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatedButton from './index';

export default {
  title: 'component/RatedButton',
  component: RatedButton,
} as ComponentMeta<typeof RatedButton>;

export const ratedButton: ComponentStory<typeof RatedButton> = (args) => <RatedButton {...args} />;

ratedButton.args = {
  movieId: 76600,
};
