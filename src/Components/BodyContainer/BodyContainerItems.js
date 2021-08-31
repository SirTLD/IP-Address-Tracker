import styled from 'styled-components';

import ImgBackground from '../../images/BannerTop.svg';
import IconImg from '../../images/SearchIcon.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MainContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;

  background-image: url(${ImgBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MainContainerTopItems = styled.div`
  width: 90%;
  height: 300px;
`;

export const TitleH1 = styled.h1`
  font-weight: 500;
  font-size: 26px;
  color: #fff;
  text-align: center;
  margin-top: 31px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 58px;
  margin-top: 33px;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  border: none;
  outline: none;
  padding-left: 24px;

  &::placeholder {
    font-family: 'Rubik', sans-serif;
    color: #2c2c2c;
  }
`;

export const SearchIcon = styled.div`
  width: 58px;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background-image: url(${IconImg});
`;

export const MainContainerBottom = styled.div`
  height: calc(100vh-280px);
  width: 100vw;
  background-color: orange;
  width: 100vw;
`;
