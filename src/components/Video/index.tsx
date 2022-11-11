import React, { useEffect, useRef, useState } from 'react';
import { position } from '@/common/mixins';
import styled from 'styled-components';
import IconButton from '../IconButton';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Video({
  videoKey,
  isMainvisual = false,
  isAutoPlay = true,
  isControls = false,
}: Video) {
  const [isMute, setIsMute] = useState(true);
  const videoRef = useRef<YouTube | null>(null);

  const volumeIconSize = isMainvisual ? '50px' : '28px';
  const volumeButonStyle = `${
    isMainvisual
      ? position({ type: 'absolute', right: '7%', bottom: '18%' })
      : position({ type: 'absolute', right: '20px', bottom: '20px' })
  }
    z-index: 10;
  `;

  useEffect(() => {
    const player = videoRef.current?.internalPlayer;
    isMute ? player.mute() : player.unMute();
  }, [isMute]);

  function toggleMute() {
    setIsMute(!isMute);
  }

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: isAutoPlay ? 1 : 0,
      controls: isControls ? 1 : 0,
      rel: 0,
    },
  };

  return (
    <VideoBox isMainvisual={isMainvisual}>
      {!isControls && (
        <IconButton
          icon={isMute ? 'mute' : 'sound'}
          iconSize={volumeIconSize}
          clickHandler={toggleMute}
          buttonStyle={volumeButonStyle}
        />
      )}
      <YoutubeVideo videoId={videoKey} ref={videoRef} opts={opts} isControls={isControls} />
    </VideoBox>
  );
}

const VideoBox = styled.div<{ isMainvisual: boolean }>`
  ${position({ type: 'relative' })}
  width: 100%;
  ${({ isMainvisual }) => (isMainvisual ? 'padding-top: 56.25vw;' : 'padding-top: 56.25%;')}

  overflow: hidden;
  background: no-repeat center / cover;
`;

const YoutubeVideo = styled(YouTube)<{ isControls: boolean }>`
  ${position({ type: 'absolute', top: '0%', left: '0%' })}
  width: 100%;
  height: 100%;
  ${({ isControls }) => !isControls && `pointer-events: none;`}
`;

type Video = {
  videoKey: string;
  isMainvisual?: boolean;
  isAutoPlay?: boolean;
  isControls?: boolean;
};
