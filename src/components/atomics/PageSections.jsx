import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  gap: 6px;

  @media (min-width: 450px) {
    width: 450px;
  }
`;

export const HeaderInfo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 6px;
`;

export const Content = styled.div`
  border-top: 2px solid var(--colorPrimary);

  width: calc(100% - 4rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 3rem 0;
  margin: 0 2rem;
  flex-grow: 1;

  @media (min-width: 450px) {
    width: 450px;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  min-height: 40px;
  width: 100%;
  background-color: var(--colorPrimary);
  color: var(--colorSecondary);
  display: flex;
  align-items: center;
`;

export const FooterSection = ContentSection;
