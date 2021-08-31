import styled from 'styled-components';

import ImgBackground from '../../images/BannerTop.svg';

export const MainContainerTopContainer = styled.div`
  width: 100vw;
  height: 280px;
  background-image: url(${ImgBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MainContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export const TitleH1 = styled.h1`
font weight: 500;
color: #fff;
text-align: center;


`;

export const SearchInput = styled.input``;

export const MainContainerBottom = styled.div`
  display: flex;
  width: 100vw;
`;
