import MainVisual from '@/layout/MainVisual';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Inner } from '@/common/style';
import { flexBox, position, typography } from '@/common/mixins';
import MENU from '@/constants/menu';
import MovieList from '@/layout/Movie/List';

const LIST_GAP = 20;
const ITEM_COUNT = 5;

export default function Home() {
  return (
    <section>
      <MainVisual />
      <Main>
        <Inner>
          {MENU.map((menu) => (
            <CategoryWrap key={menu.path}>
              <TitleBox>
                <Heading>{menu.text}</Heading>
                <ViewAll to={`/${menu.path}`}>view all</ViewAll>
              </TitleBox>
              <MovieList
                category={menu.path}
                flexGap={LIST_GAP}
                itemCount={ITEM_COUNT}
                isWrap={false}
              />
            </CategoryWrap>
          ))}
        </Inner>
      </Main>
    </section>
  );
}

const Main = styled.main`
  ${position({})}
  margin-top: -120px;
  z-index: 1;
`;

const CategoryWrap = styled.section`
  margin-bottom: 80px;
`;

const TitleBox = styled.div`
  ${flexBox({ alignItems: 'flex-end' })}
  gap: 10px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  ${typography({ size: 'large', weight: 'bold' })}
`;

const ViewAll = styled(Link)`
  ${typography({ size: 'xSmall' })}
  align-items: baseline;
`;
