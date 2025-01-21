import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.isActive ? '#d3f124' : 'transparent'};
  border: ${props => props.isActive ? 'none' : '2px solid #d3f124;'}; 
  border-radius: 5px;
  color: ${props => props.isActive ? '#04244f': '#d3f124'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: transform 0.2s;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  vertical-align: middle;
`;

export { Button, IconWrapper };
