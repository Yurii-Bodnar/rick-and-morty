import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 61px;
`;
export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  width: 1020px;
  margin: 0 auto;
`;
export const Item = styled.li`
  background: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 240px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  &:hover {
    transform: translate(-1%, -1%);
  }
`;
export const Link = styled(NavLink)`
  color: #000000;
`;
export const Img = styled.img`
  width: 240px;
  height: 168px;
  cursor: pointer;
`;
export const Box = styled.div`
  padding: 12px 16px;
  cursor: pointer;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  letter-spacing: 0.15px;
  cursor: pointer;
`;
export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${p => p.theme.colors.blackSecondary};
  cursor: pointer;
`;
