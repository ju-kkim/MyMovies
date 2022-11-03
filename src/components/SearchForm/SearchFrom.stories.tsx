import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchFrom from './index';

export default {
  title: 'component/SearchFrom/From',
  component: SearchFrom,
} as ComponentMeta<typeof SearchFrom>;

const Template: ComponentStory<typeof SearchFrom> = () => <SearchFrom />;

export const From = Template.bind({});
