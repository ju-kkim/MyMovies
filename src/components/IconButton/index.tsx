import React, { MouseEventHandler } from 'react';
import mute from '@/assets/svg/mute.svg';
import sound from '@/assets/svg/sound.svg';
import styled from 'styled-components';
import { flexBox } from '@/common/mixins';

const iconComponents: iconComponents = {
  mute,
  sound,
};

type iconComponents = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function IconButton({
  icon,
  iconSize,
  disabled = false,
  text = '',
  buttonStyle = '',
  textStyle = '',
  clickHandler,
}: IconButton) {
  const Icon = iconComponents[icon];
  if (!Icon) {
    throw new Error(`${icon} 컴포넌트를 찾을 수 없습니다. `);
  }

  return (
    <Button
      type="button"
      onClick={clickHandler}
      disabled={disabled}
      text={text}
      buttonStyle={buttonStyle}
    >
      <Icon width={iconSize} />
      {text && <Text textStyle={textStyle}>{text}</Text>}
    </Button>
  );
}

const Button = styled.button<{ text: string | undefined; buttonStyle: string }>`
  ${({ text }) => text && flexBox({})}
  gap: 5px;
  opacity: 0.7;
  ${({ buttonStyle }) => buttonStyle && buttonStyle}

  &:not(:disabled):hover {
    opacity: 1;
  }
`;

const Text = styled.span<{ textStyle: string | undefined }>`
  ${({ textStyle }) => textStyle}
`;

type IconButton = {
  icon: string;
  iconSize: string;
  disabled?: boolean;
  buttonStyle?: string;
  text?: string;
  textStyle?: string;
  clickHandler: MouseEventHandler;
};
