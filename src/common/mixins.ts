import FONT from './font';

export const typography = ({ size, weight }: typography) => {
  return `
    font-size: ${FONT[size].size};
    font-weight: ${FONT[size].weight[weight]};
  `;
};

type typography = {
  size: 'display' | 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  weight: 'regular' | 'bold';
};
