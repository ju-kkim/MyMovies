import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useRecoilValueLoadable } from 'recoil';
import { throttle } from '@/utils/utils';
import { userStore } from '@/store/user';
import Logo from '@/assets/svg/logo.svg';
import { flexBox, position, typography } from '@/common/mixins';
import MENU from '@/constants/menu';
import COLOR from '@/common/color';
import SearchFrom from '@/components/SearchForm';
import { useSessionId } from '@/hook/useSessionId';
import { useClickOutside } from '@/hook/useClickOutside';

export default function Header() {
  const [isShowUserMenu, setIsShowUserMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const userBox = useRef<HTMLDivElement>(null);
  const { removeSessionId } = useSessionId();
  const user = useRecoilValueLoadable(userStore);
  const userContents = user.contents;

  const headerBG = 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(20, 20, 20, 0) 100%)';
  const headerStickyBG = COLOR.BLACK;
  const bgColor = isSticky ? headerStickyBG : headerBG;

  useClickOutside({ ref: userBox, callback: () => setIsShowUserMenu(false) });

  function onLogOut() {
    removeSessionId();
    setIsShowUserMenu(false);
  }

  function toggleUserMenu() {
    setIsShowUserMenu(!isShowUserMenu);
  }

  function changeBgColor() {
    if (window.scrollY === 0) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(changeBgColor, 300));
    return () => {
      window.removeEventListener('scroll', throttle(changeBgColor, 300));
    };
  }, []);

  return (
    <HeaderWrap style={{ background: bgColor }}>
      <FlexWrap>
        <Left>
          <StyleLink to="/">
            <Logo />
          </StyleLink>
          <GNB>
            {MENU.map((menu) => (
              <li key={menu.path}>
                <Menu to={menu.path}>{menu.text}</Menu>
              </li>
            ))}
          </GNB>
        </Left>
        <Right>
          <SearchFrom />
          {user.state === 'hasValue' && userContents.isLogin ? (
            <UserBox ref={userBox}>
              <UserId type="button" onClick={toggleUserMenu}>
                {userContents.username}님
              </UserId>
              {isShowUserMenu && (
                <UserMenu>
                  <li>
                    {/* //TODO 마이페이지 열결 */}
                    <Link to="/">MyPage</Link>
                  </li>
                  <li>
                    <button type="button" onClick={onLogOut}>
                      Logout
                    </button>
                  </li>
                </UserMenu>
              )}
            </UserBox>
          ) : (
            <Lgoin to="/login">Login</Lgoin>
          )}
        </Right>
      </FlexWrap>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  ${position({ type: 'fixed', top: '0', left: '0' })}
  width: 100%;
  z-index: 100;
  transition: 0.3s;
`;

const FlexWrap = styled.div`
  ${flexBox({ justifyContent: 'space-between' })}
  height: 100px;
  padding: 0 50px;
`;

const flexGap20 = css`
  ${flexBox({})}
  gap: 20px;
`;

const Left = styled.div`
  ${flexBox({})}
  gap: 40px;
`;

const Right = styled.div`
  ${flexGap20}
`;

const GNB = styled.ul`
  ${flexGap20}
`;

const Menu = styled(NavLink)`
  ${position({})}
  ${typography({ size: 'small' })}
  color: ${COLOR.GREY[100]};

  &:not(.active):hover,
  &.active {
    color: ${COLOR.WHITE};
  }

  &.active {
    ${typography({ size: 'small', weight: 'bold' })}
  }

  &::before {
    ${position({ type: 'absolute', left: '50%', right: '50%', top: 'calc(100% + 5px)' })}
    content: '';
    height: 2px;
    background: ${COLOR.WHITE};
    transition: 0.3s;
  }

  &:not(.active):hover::before,
  &.active::before {
    left: 0;
    right: 0;
  }
`;

const StyleLink = styled(Link)`
  display: block;
`;

const UserBox = styled.div`
  ${position({})}
`;

const UserId = styled.button`
  height: 30px;
  ${typography({ size: 'small', weight: 'bold' })}
`;

const UserMenu = styled.ul`
  ${position({ type: 'absolute', right: '0', top: 'calc(100% + 5px)' })}
  width: 100px;
  border: 1px solid ${COLOR.GREY[200]};

  li + li {
    border-top: 1px solid ${COLOR.GREY[200]};
  }

  a,
  button {
    display: block;
    width: 100%;
    padding: 7px 10px;
    ${typography({ size: 'xSmall' })}
    text-align: left;
    color: ${COLOR.GREY[100]};
  }

  a:hover,
  button:hover {
    color: ${COLOR.WHITE};
  }
`;

const Lgoin = styled(StyleLink)`
  ${typography({ size: 'small', weight: 'bold' })}
`;
