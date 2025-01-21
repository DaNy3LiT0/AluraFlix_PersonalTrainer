import { Outlet } from 'react-router-dom';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer'; // Asegúrate de importar el Footer
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(174.61deg, #041833, #04244f 47.35%, #154580);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BasePage = () => {
  return (
    <PageContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default BasePage;
