import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  padding: 20px;
  transition: background-image 0.5s ease;

  @media (max-width: 480px) {
    padding: 15px;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    width: 85%;
    max-width: 700px;
    padding: 40px;
  }

  @media (min-width: 992px) {
    max-width: 800px;
    padding: 50px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    font-size: 36px;
  }
`

export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin-bottom: 30px;
  padding: 0;

  @media (min-width: 768px) {
    gap: 20px;
    margin-bottom: 40px;
    max-width: 500px;
  }
`

export const ColorsPickersDescription = styled(DirectionsDescription)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    gap: 50px;
    margin-bottom: 40px;
  }
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const CustomInput = styled.input`
  width: 80px;
  height: 40px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 50px;
  }
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: #00c9b7;
  border: none;
  border-radius: 8px;
  padding: 12px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;

  &:hover {
    background-color: #00e0ca;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 14px 40px;
    margin-top: 20px;
  }
`
