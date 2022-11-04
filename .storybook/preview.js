import React from 'react';
import GlobalStyle from '../src/common/globalStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </RecoilRoot>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
