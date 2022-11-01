import FONT from './font';

export const flexBox = ({
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'flex-start',
}: flexBox) => {
  return `
    display: flex;
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `;
};

export const position = ({
  type = 'relative',
  top = 'auto',
  left = 'auto',
  bottom = 'auto',
  right = 'auto',
}: positionType) => {
  return `
    position: ${type};
    top: ${top};
    left: ${left};
    bottom: ${bottom};
    right: ${right};
  `;
};

export const typography = ({ size, weight = 'regular' }: typography) => {
  return `
    font-size: ${FONT[size].size};
    font-weight: ${FONT[size].weight[weight]};
  `;
};

type flexBox = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
};

type positionType = {
  type?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

type typography = {
  size: 'display' | 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall';
  weight?: 'regular' | 'bold';
};
