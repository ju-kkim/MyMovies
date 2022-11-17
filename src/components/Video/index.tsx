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
  backdropImage,
  title,
}: Video) {
  const [isMute, setIsMute] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
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
      mute: 1,
    },
  };

  const Video = (
    <>
      {!isControls && (
        <IconButton
          icon={isMute ? 'mute' : 'sound'}
          iconSize={volumeIconSize}
          clickHandler={toggleMute}
          buttonStyle={volumeButonStyle}
        />
      )}
      <YoutubeVideo
        videoId={videoKey}
        ref={videoRef}
        opts={opts}
        isControls={isControls}
        onEnd={() => setIsEnd(true)}
      />
    </>
  );

  const AfterImage = backdropImage ? (
    backdropImage
  ) : (
    <Thumbnail src={`https://img.youtube.com/vi/${videoKey}/maxresdefault.jpg`} alt={title} />
  );

  return <VideoBox isMainvisual={isMainvisual}>{isEnd ? AfterImage : Video}</VideoBox>;
}

const VideoBox = styled.div<{ isMainvisual: boolean }>`
  ${position({ type: 'relative' })}
  width: 100%;
  ${({ isMainvisual }) => (isMainvisual ? 'padding-top: 56.25vw;' : 'padding-top: 56.25%;')}
  overflow: hidden;
`;

const YoutubeVideo = styled(YouTube)<{ isControls: boolean }>`
  ${position({ type: 'absolute', top: '0%', left: '0%' })}
  width: 100%;
  height: 100%;
  ${({ isControls }) => !isControls && `pointer-events: none;`}
`;

export const afterImageStyle = `
  ${position({ type: 'absolute', top: '50%', left: '0%' })}
  transform: translateY(-50%);
  width: 100%;
`;

const Thumbnail = styled.img`
  ${afterImageStyle}
`;

type Video = {
  videoKey: string;
  title: string;
  backdropImage?: React.ReactNode;
  isMainvisual?: boolean;
  isAutoPlay?: boolean;
  isControls?: boolean;
};
