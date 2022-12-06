import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from '../Home';

export default {
  title: 'Page/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const home = Template.bind({});
