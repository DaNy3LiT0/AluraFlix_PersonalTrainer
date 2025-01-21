import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button, IconWrapper } from "../Button";
import LogoImage from "../../assets/logo.svg";
import { FaHome, FaPlus } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid rgb(211, 241, 36);
  box-shadow: 0px 5px 15px 0px rgba(210, 241, 36, 0.6);
`;

const Logo = styled.img`
  width: 300px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="MiLogo" />
      <Nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button isActive={location.pathname === '/'}>
            <IconWrapper><FaHome /></IconWrapper>Home
          </Button>
        </Link>
        <Link to="/new-video" style={{ textDecoration: 'none' }}>
          <Button isActive={location.pathname === '/new-video'}>
            <IconWrapper><FaPlus /></IconWrapper>Nuevo Video
          </Button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
