import React, { useState } from 'react';
import styled from 'styled-components';
import { useMovieDetail } from '@/hook/useMovieDetail';
import { flexBox, typography } from '@/common/mixins';
import COLOR from '@/common/color';
import StarIcon from '@/assets/svg/star.svg';
import placeholderImage from '@/assets/image/placeholderImage.png';
import Image from '@/components/Image';
import Genres from '@/components/Genres';
import IconButton from '@/components/IconButton';
import Person from '@/components/Person';
import DetailVideo from './Video';
import DetailImage from './Image';

// TODO: viewall 핸들러
const viewAllProps = {
  icon: 'rightArrow',
  iconSize: '10px',
  text: 'view all',
  textStyle: typography({ size: 'xSmall' }),
  buttonStyle: 'flex-direction:row-reverse; gap:0;',
};

export default function Detail({ movieId }: { movieId: number }) {
  const { details, credits } = useMovieDetail(movieId);
  const [showImgType, setShowImgType] = useState<'backdrop' | 'poster'>('backdrop');

  const changeImgTab = () => {
    if (showImgType === 'backdrop') return setShowImgType('poster');
    if (showImgType === 'poster') return setShowImgType('backdrop');
  };

  if (!details || !credits) return null;

  return (
    <Wrap>
      <InfoWrap>
        <ImgWrap>
          {details.poster_path ? (
            <Image
              type="poster"
              size="normal"
              path={details.poster_path}
              alt={`${details.title} 포스터 이미지`}
              css="width: 100%"
            />
          ) : (
            <img src={placeholderImage} alt="Placeholder images" />
          )}
        </ImgWrap>
        <div>
          <Title>{details.title}</Title>
          <Info>
            <ReleaseDate>{details.release_date}</ReleaseDate>
            <Country>
              {details.production_countries.map((country) => `(${country.iso_3166_1})`)}
            </Country>
            <Genres genres={details.genres} textSize="small" />
          </Info>
          <ActionWrap>
            <AverageWrap>
              <StarIcon />
              <Average>{details.vote_average}</Average>
            </AverageWrap>
            {/* TODO: 즐겨찾기, 평가하기 핸들러 등록 */}
            <IconButton icon="plus" iconSize="17px" text="즐겨찾기" clickHandler={() => {}} />
            <IconButton icon="circleStar" iconSize="17px" text="평가하기" clickHandler={() => {}} />
          </ActionWrap>
          <TitleWrap>
            <SubTitle>overview</SubTitle>
          </TitleWrap>
          <Overview>{details.overview}</Overview>
        </div>
      </InfoWrap>
      <ContentSec>
        <TitleWrap>
          <SubTitle>credits</SubTitle>
          <IconButton {...viewAllProps} clickHandler={() => {}} />
        </TitleWrap>
        <CreditWrap>
          {credits.crew.map(
            (staff) =>
              staff.job === 'Director' && <Person key={staff.id} direction="column" info={staff} />,
          )}
          {credits.cast.map(
            (actor) => actor.order < 6 && <Person key={actor.id} direction="column" info={actor} />,
          )}
        </CreditWrap>
      </ContentSec>
      <ContentSec>
        <TitleWrap>
          <TitleWrap>
            <SubTitle>image</SubTitle>
            <TabMenu>
              <Tab type="button" data-active={showImgType === 'backdrop'} onClick={changeImgTab}>
                Backdrop
              </Tab>
              <Tab type="button" data-active={showImgType === 'poster'} onClick={changeImgTab}>
                Poster
              </Tab>
            </TabMenu>
          </TitleWrap>
          <IconButton {...viewAllProps} clickHandler={() => {}} />
        </TitleWrap>
        <DetailImage images={details.images} imgType={showImgType} />
      </ContentSec>
      <ContentSec>
        <TitleWrap>
          <SubTitle>video</SubTitle>
        </TitleWrap>
        <DetailVideo videos={details.videos.results} />
      </ContentSec>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 30px;
`;

const InfoWrap = styled.div`
  ${flexBox({ alignItems: 'flex-start' })}
  gap: 20px;
`;

const ImgWrap = styled.div`
  width: 26.27%;
  flex-shrink: 0;
`;

const Title = styled.h3`
  ${typography({ size: 'xLarge', weight: 'bold' })}
`;

const Info = styled.div`
  ${flexBox({})}
  margin-top: 10px;
`;

const ReleaseDate = styled.span`
  ${typography({ size: 'small' })}
`;
const Country = styled.span`
  margin-left: 5px;
  ${typography({ size: 'small' })}

  &::after {
    content: '';
    display: inline-block;
    margin: 0 10px;
    width: 1px;
    height: 10px;
    vertical-align: middle;
    background: ${COLOR.GREY[200]};
  }
`;

const ActionWrap = styled.div`
  ${flexBox({})}
  margin: 20px 0;
  gap: 10px;
`;

const AverageWrap = styled.div`
  ${flexBox({})}
  gap: 3px;
`;

const Average = styled.span`
  ${typography({ size: 'medium', weight: 'bold' })}
`;

const SubTitle = styled.h4`
  ${typography({ size: 'medium', weight: 'bold' })}
  text-transform: uppercase;
`;

const Overview = styled.p`
  ${typography({ size: 'xSmall' })}
  word-break: keep-all;
`;

const ContentSec = styled.section`
  margin-top: 40px;
`;

const TitleWrap = styled.div`
  ${flexBox({ justifyContent: 'space-between' })}
  margin-bottom: 10px;
`;

const CreditWrap = styled.div`
  ${flexBox({ alignItems: 'flex-start' })}
  gap: 10px;
`;

const TabMenu = styled.div`
  ${flexBox({ alignItems: 'flex-end' })}
  gap: 10px;
  margin-left: 10px;
`;

const Tab = styled.button`
  ${typography({ size: 'small' })}
  color: ${COLOR.GREY[200]};
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${COLOR.WHITE};
  }

  &[data-active='true'] {
    ${typography({ size: 'small', weight: 'bold' })}
    border-color: ${COLOR.WHITE};
    color: ${COLOR.WHITE};
  }
`;
