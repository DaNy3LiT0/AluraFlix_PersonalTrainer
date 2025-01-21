// src/componentes/Category/index.jsx
import styled from 'styled-components';

const CategoryContainer = styled.section`
  padding: 40px 20px;
  background-color: #f0f0f0;
`;

const Category = () => {
  return (
    <CategoryContainer>
      <h2>Categoría</h2>
      <p>Contenido de la categoría...</p>
    </CategoryContainer>
  );
};

export default Category;
