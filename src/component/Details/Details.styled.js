import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 30px;
  top: 30px;
  gap: 8px;
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
export const Btn = styled.button`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: 18px;
  line-height: 1.16;
  color: #000000;

  background-color: transparent;
  border: none;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const BoxImg = styled.img`
  width: 300px;
  height: 300px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
`;
export const BoxText = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.16;
  color: ${p => p.theme.colors.popupTitle};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px auto 0 auto;
  gap: 48px;
`;
export const WrapperTitle = styled.h2`
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: ${p => p.theme.colors.popupSubtitle};
`;
export const List = styled.ul`
  width: 413px;
`;
export const Item = styled.li`
  border-bottom: 1px solid #212121;
`;
export const ItemTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: ${p => p.theme.colors.popupTitle};
`;
export const ItemText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.42;
  letter-spacing: 0.25px;
  color: ${p => p.theme.colors.subText};
  padding-bottom: 12px;
`;
