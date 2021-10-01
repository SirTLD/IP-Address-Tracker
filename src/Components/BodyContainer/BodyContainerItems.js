import styled from 'styled-components';

import ImgBackground from '../../images/BannerTop.svg';
import IconImg from '../../images/SearchIcon.svg';
import MapImgIcon from '../../images/MapIcon.svg';
import MapLocation from '../../images/MapLocation.jpg';
import HoverIcon from '../../images/HoverIcon.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  background-position: center;
  cursor: pointer;

  &:hover {
    background-image: url(${HoverIcon});
  }
`;

export const DataContainer = styled.div`
  height: 294px;
  width: 100%;
  background-color: #fff;
  margin-top: 24px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 500;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const DataTitleH2 = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 10px;
  color: #2c2c2c;
  text-align: center;
  line-height: 11.85px;
  letter-spacing: 1.46px;
  text-transform: uppercase;
`;

export const DataValue = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: black;
  text-align: center;
  margin-top: 7px;
  line-height: 24px;
  letter-spacing: -0.18px;
`;

export const DataContainerDiv = styled.div`
  height: 43px;
  width: 90%;
  ${'' /* background-color: red; */}
  border-radius: 15px;
  margin: 12px 0;
`;

export const MainContainerBottom = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${MapLocation});
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MainContainerBottomItems = styled.div`
  height: auto;
  width: auto;
`;

export const BottomIcon = styled.div`
  height: 56px;
  width: 46px;
  background-image: url(${MapImgIcon});
`;
