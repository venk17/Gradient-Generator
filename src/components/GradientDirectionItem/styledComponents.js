import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 100%;
  list-style-type: none;
  margin: 5px 0;

  @media screen and (min-width: 480px) {
    width: 48%;
    margin: 5px 1%;
  }

  @media screen and (min-width: 768px) {
    width: 23%;
    margin: 5px 1%;
  }

  @media screen and (min-width: 992px) {
    width: 24%;
    margin: 5px 0.5%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff')};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 8px;
  border: ${props =>
    props.isActive ? '1px solid #d4d4d4' : '1px solid #e6e6e6'};
  padding: 12px 5px;
  margin: 0;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.8)};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props =>
    props.isActive
      ? '0 2px 4px rgba(0,0,0,0.1)'
      : '0 1px 2px rgba(0,0,0,0.05)'};

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (min-width: 480px) {
    padding: 12px 10px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 15px;
    font-size: 15px;
  }

  @media screen and (min-width: 992px) {
    padding: 12px 20px;
    font-size: 16px;
  }
`
