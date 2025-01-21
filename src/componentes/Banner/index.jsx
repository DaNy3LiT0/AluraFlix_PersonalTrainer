import styled from 'styled-components';

const BannerContainer = styled.section`
  background-image: url('/path/to/your/banner-image.jpg'); /* Ajusta la ruta de la imagen */
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Oscurece ligeramente el fondo */
`;

const BannerText = styled.h1`
  position: relative;
  font-size: 48px;
  z-index: 1;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Overlay />
      <BannerText>Bienvenido a Mi Sitio</BannerText>
    </BannerContainer>
  );
};

export default Banner;
