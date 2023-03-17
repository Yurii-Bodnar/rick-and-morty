import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
export const Box = styled.div`
  position: relative;
  width: 1020px;
  height: 66px;
`;
export const Input = styled.input`
  width: 1020px;
  height: 66px;
  border: 1px solid ${p => p.theme.colors.inputColor};
  border-radius: 8px;
  padding-left: 48px;
  color: ${p => p.theme.colors.inputColor};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.s};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &::placeholder {
    position: relative;
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.s};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.inputColor};
  }
  &:hover,
  :focus {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    outline: 1px solid ${p => p.theme.colors.inputColor};
  }
`;
export const Svg = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.blackThird};
  top: 22px;
  left: 15px;
`;
