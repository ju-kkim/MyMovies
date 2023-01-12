import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexBox, position, typography } from '@/common/mixins';
import { video } from '@/hook/useMovieDetail';
import YouTube, { YouTubeProps } from 'react-youtube';
import COLOR from '@/common/color';

export default function DetailVideo({ videos }: { videos: video[] }) {
  const [showVideo, setShowVideo] = useState<video | null>(null);
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      rel: 0,
    },
  };
  useEffect(() => {
    if (!videos) return;
    setShowVideo(videos[0]);
  }, [videos]);

  if (videos.length === 0) return <NoneText>No Videos</NoneText>;
  return (
    <VideoContent>
      <ContentWrap>
        <VideoWrap>{showVideo && <YouTubeVideo videoId={showVideo.key} opts={opts} />}</VideoWrap>
        <VideoListWrap>
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              type="button"
              disabled={video.id === showVideo?.id}
              onClick={() => setShowVideo(video)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
                alt={`${video.name} 썸네일 이미지`}
              />
              <VideoName>{video.name}</VideoName>
            </VideoItem>
          ))}
        </VideoListWrap>
      </ContentWrap>
    </VideoContent>
  );
}

const NoneText = styled.p`
  margin: 20px 0;
  ${typography({ size: 'xSmall', weight: 'bold' })}
  text-align: center;
`;

const VideoContent = styled.div`
  ${position({})}
  padding-top: 41.54%;
`;

const ContentWrap = styled.div`
  ${position({ type: 'absolute', top: '0', left: '0' })}
  ${flexBox({ alignItems: 'stretch' })}
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const VideoWrap = styled.div`
  flex-shrink: 0;
  width: 74%;
`;

const VideoListWrap = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
const YouTubeVideo = styled(YouTube)`
  width: 100%;
  height: 100%;
`;

const VideoItem = styled.button`
  display: block;
  ${position({})}
  width: 100%;
  text-align: left;

  &:disabled {
    cursor: default;
  }

  &::before {
    content: '';
    z-index: 1;
    ${position({ type: 'absolute', top: '0', bottom: '0', left: '0', right: '0' })}
  }

  &:disabled::before {
    border: 2px solid ${COLOR.WHITE};
    cursor: default;
  }

  &:not(:disabled):hover::before {
    border: 2px solid ${COLOR.GREY[100]};
  }

  & img {
    width: 100%;
  }
`;

const VideoName = styled.span`
  ${position({ type: 'absolute', bottom: '0', left: '0' })}
  width: 100%;
  padding: 5px 9px;
  ${typography({ size: 'xSmall' })}
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background: rgba(20, 20, 20, 0.5);
`;
