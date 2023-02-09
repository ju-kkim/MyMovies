import COLOR from '@/common/color';
import { flexBox, typography } from '@/common/mixins';
import Image from '@/components/Image';
import { userStore } from '@/store/user';
import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';

export default function Mypage() {
  const navigate = useNavigate();
  const user = useRecoilValueLoadable(userStore);

  useEffect(() => {
    if (user.state !== 'hasValue') return;
    if (!user.contents.isLogin) return navigate('/login');
  }, [user]);

  return (
    <Wrapper>
      <Snb>
        <User>
          <Profile>
            {user.contents.profileImage ? (
              <Image
                type="profile"
                size="normal"
                path={user.contents.profileImage}
                alt={`${user.contents.username} 프로필 이미지`}
                css="height: 100%; max-width: none;"
              />
            ) : (
              user.contents.username && user.contents.username[0]
            )}
          </Profile>
          <Name>{user.contents.username}</Name>
        </User>
        <ul>
          <li>
            <LinkStyle to={'favorite'}> 즐겨찾기</LinkStyle>
          </li>
          <li>
            <LinkStyle to={'rated'}> 평가한 영화</LinkStyle>
          </li>
        </ul>
      </Snb>
      <Main>{user.contents.id && <Outlet />}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 100px;
  ${flexBox({ alignItems: 'stretch' })}
`;

const Snb = styled.nav`
  flex-shrink: 0;
  width: 280px;
  border-top: 1px solid ${COLOR.GREY[300]};
`;

const User = styled.div`
  ${flexBox({})}
  gap: 20px;
  padding: 20px;
`;

const Profile = styled.div`
  ${flexBox({ justifyContent: 'center' })}
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${COLOR.GREY[300]};
  ${typography({ size: 'display' })}
  text-transform: uppercase;
  overflow: hidden;
`;

const Name = styled.span`
  ${typography({ size: 'xLarge', weight: 'bold' })}
`;

const LinkStyle = styled(NavLink)`
  display: block;
  padding: 11px 20px;
  ${typography({ size: 'large', weight: 'bold' })}
  color: ${COLOR.GREY[200]};

  &.active {
    color: ${COLOR.WHITE};
    background: ${COLOR.GREY[300]};
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 30px;
  background: ${COLOR.GREY[300]};
  height: calc(100vh - 100px);
  overflow-y: scroll;
`;
