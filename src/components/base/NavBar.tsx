import React from "react";
import { styled } from "styled-components";
import logo_image from "../../assets/yeomiji-logo.svg";
import { theme } from "../../style/theme";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo>
            <img src={logo_image} alt="yeomiji logo" />
            <Title>
              <p>
                여미지 <br /> 여수 유기 동물 쉼터
              </p>
            </Title>
          </Logo>
        </Link>

        <NavItem>
          <NavItemContainer>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/introduction">단체소개</NavLink>
            <NavLink to="/adoption">입양</NavLink>
            <NavLink to="/volunteer">봉사활동</NavLink>
            <NavLink to="/donation">후원 안내</NavLink>
          </NavItemContainer>
        </NavItem>
      </StyledDiv>
    </StyledNav>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.main[4]};
  font-size: 20px;
  font-weight: 400;
  flex-shrink: 0;
`;
const Logo = styled.div`
  display: flex;
  height: 52px;
  width: 200px;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
  text-align: center;
  flex: 1;
`;

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 1440px) {
    max-width: 800px;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    max-width: 600px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  margin: 16px 0 12px 0;
  white-space: nowrap;

  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 12px 0;
    font-size: 14px;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    ${NavItemContainer} {
      width: auto;
      flex-wrap: nowrap;
      padding: 0 12px;
      min-width: min-content;
      gap: 20px;
    }

    ${NavLink} {
      flex: 0 0 auto;
      white-space: nowrap;
    }
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  padding: 25px 0 20px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: auto;
    padding: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  height: 55px;
  padding: 0 40px;
  gap: 60px;

  @media (max-width: 1440px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 0;
    height: auto;
    gap: 0;
    justify-content: center;
  }
`;

export default NavBar;
