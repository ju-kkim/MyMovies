import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainVisual from './index';

export default {
  title: 'layout/MainVisual',
  component: MainVisual,
} as ComponentMeta<typeof MainVisual>;

const Template: ComponentStory<typeof MainVisual> = () => <MainVisual />;

export const mainVisual = Template.bind({});
