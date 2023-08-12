import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../../assets/images/header-logo-img.svg';
import CHAT from '../../../assets/icons/icon-chat.svg';
import NOTIFYUNREAD from '../../../assets/icons/icon-notify-unread.svg';
import NOTIFY from '../../../assets/icons/icon-notify.svg';
import ADPROFILE from '../../../assets/images/profile-img-xxs.svg';
import INFPROFILE from '../../../assets/images/profileInf-img-xxs.svg';
import Search from '../Search/Search';
import {
  HeaderStyle,
  Wrapper,
  HeaderLeftStyle,
  HeaderRightStyle,
  MenuList,
  Signup,
  Login,
} from './HeaderStyle';

const Header = () => {
  const navigate = useNavigate();

  // 더미 데이터
  const isLoggedIn = true;
  const hasUnRead = false;
  const isInfluncer = false;

  return (
    <>
      <HeaderStyle>
        <Wrapper>
          <HeaderLeftStyle>
            <h1 className="a11y">Celebrem 로고</h1>
            <Link to="/">
              <img src={LOGO} alt="celebrem 로고" />
            </Link>
            <Search />
          </HeaderLeftStyle>
          <HeaderRightStyle>
            {isLoggedIn ? (
              <MenuList>
                <li>
                  <img src={CHAT} alt="채팅 페이지로 가기" onClick={() => navigate('/chat')} />
                  <span>채팅</span>
                </li>
                <li>
                  <img src={hasUnRead ? NOTIFYUNREAD : NOTIFY} alt="알림" />
                  <span>알림</span>
                </li>
                <li>
                  <img
                    src={isInfluncer ? INFPROFILE : ADPROFILE}
                    alt="내 프로필로 가기"
                    onClick={() => navigate('/profile')}
                  />
                  <span>마이 프로필</span>
                </li>
              </MenuList>
            ) : (
              <>
                <Signup onClick={() => navigate('/signup')}>회원가입</Signup>
                <Login onClick={() => navigate('/login')}>로그인</Login>
              </>
            )}
          </HeaderRightStyle>
        </Wrapper>
      </HeaderStyle>
    </>
  );
};

export default Header;
