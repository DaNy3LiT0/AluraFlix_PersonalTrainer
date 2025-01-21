// src/componentes/Footer/index.jsx
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3f124;
  padding: 10px 0;
  color: #04244f;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 MiSitio. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
