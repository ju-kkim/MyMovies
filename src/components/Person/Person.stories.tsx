import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Person from './index';

export default {
  title: 'component/Person',
  component: Person,
} as ComponentMeta<typeof Person>;

const Template: ComponentStory<typeof Person> = (args) => <Person {...args} />;

export const column = Template.bind({});
export const row = Template.bind({});

column.args = {
  direction: 'column',
  info: {
    adult: false,
    gender: 1,
    id: 38280,
    known_for_department: 'Acting',
    name: 'Tang Wei',
    original_name: 'Tang Wei',
    popularity: 13.081,
    profile_path: '/pXBCiu7mVEnrnDpIRc5cyyg1wPK.jpg',
    cast_id: 2,
    character: 'Seo-rae',
    credit_id: '5ec34ec728723c0020495dcb',
    order: 1,
  },
};

row.args = {
  direction: 'row',
  info: {
    adult: false,
    gender: 2,
    id: 21687,
    known_for_department: 'Acting',
    name: 'Park Hae-il',
    original_name: 'Park Hae-il',
    popularity: 6.567,
    profile_path: '/8ltdBxd40m2iAnsRKV0JMbv7rZT.jpg',
    cast_id: 1,
    character: 'Hae-joon',
    credit_id: '5ec34ec13d3557001ce52d2e',
    order: 0,
  },
};
