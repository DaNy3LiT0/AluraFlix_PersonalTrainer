import { useState } from 'react';
import styled from 'styled-components';
import { Button, IconWrapper } from '../../componentes/Button';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d3f124;
  padding: 30px;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  max-width: 500px;
`;

const InputGroup = styled.div`
  position: relative;  
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d3f124;
  background-color: transparent;
  font-size: 16px;
  color: #d3f124;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;
  outline: none;

  &:focus {
    border-color: rgba(211, 241, 36, 0.5);
    box-shadow: 0 0 20px rgba(211, 241, 36, 0.5);
    outline: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -12px;
    left: 5px;
    font-size: 12px;
    color: #d3f124;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  color: rgba(211, 241, 36, 0.5);
  pointer-events: none;
  transition: all 0.3s;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d3f124;
  background-color: transparent;
  font-size: 16px;
  color: #d3f124;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;
  appearance: none;
  outline: none;

  &:focus {
    border-color: rgba(211, 241, 36, 0.5);
    box-shadow: 0 0 20px rgba(211, 241, 36, 0.5);
    outline: none;
  }
`;

const SelectLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  color: rgba(211, 241, 36, 0.5);
  pointer-events: none;
  transition: all 0.3s;

  ${({ isActive }) =>
    isActive &&
    `
    top: -12px;
    left: 5px;
    font-size: 12px;
    color: #d3f124;
  `}
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d3f124;
  background-color: transparent;
  font-size: 16px;
  color: #d3f124;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;
  outline: none;

  &:focus {
    border-color: rgba(211, 241, 36, 0.5);
    box-shadow: 0 0 20px rgba(211, 241, 36, 0.5);
    outline: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -12px;
    left: 5px;
    font-size: 12px;
    color: #d3f124;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const SubmitButton = styled(Button)`
  &:hover {
    transform: scale(1.1);
    background-color: #d3f124;
    color: #04244f;
  }
`;

const ClearButton = styled(Button)`
  &:hover {
    transform: scale(1.1);
    background-color: #d3f124;
    color: #04244f;
  }
`;

const NewVideo = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    videoUrl: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      imageUrl: '',
      videoUrl: '',
      category: '',
      description: ''
    });
  };

  return (
    <Container>
      <h2>Agregar Nuevo Video</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="imageUrl"
            placeholder=" "
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          <Label htmlFor="imageUrl">Ingrese URL de Imagen</Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            name="videoUrl"
            placeholder=" "
            value={formData.videoUrl}
            onChange={handleChange}
            required
          />
          <Label htmlFor="videoUrl">Ingrese URL de Video</Label>
        </InputGroup>
        <SelectWrapper>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden></option>
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
          </Select>
          <SelectLabel htmlFor="category" isActive={formData.category !== ""}>
            Seleccione una Categoría
          </SelectLabel>
        </SelectWrapper>
        <InputGroup>
          <TextArea
            name="description"
            placeholder=" "
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
          <Label htmlFor="description">Ingrese una Descripción</Label>
        </InputGroup>
        <ButtonGroup>
          <SubmitButton type="submit">
            <IconWrapper><FaPlus /></IconWrapper>Agregar Video
          </SubmitButton>
          <ClearButton type="button" onClick={handleClear}>
            <IconWrapper><FaTrash /></IconWrapper>Limpiar
          </ClearButton>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default NewVideo;

