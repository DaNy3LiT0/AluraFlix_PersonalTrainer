// src/pages/NotFound/index.jsx
import styled from 'styled-components';
import ErrorImage from './Error404.svg'; // Ajusta la ruta según sea necesario

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(174.61deg, #041833, #04244f 47.35%, #154580);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const NotFound = () => {
  return (
    <Container>
      <Image src={ErrorImage} alt="Error 404" />
    </Container>
  );
};

export default NotFound;
