import Head from 'next/head';
// import styles from '../../styles/Home.module.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

// eslint-disable-next-line
const Conttainer = ({ children }) => {
  return (
    <StyledContainer>
      <Head>
        <title>Dict App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>{children}</Main>

      <Footer>
        <FooterAnchor
          href="https://github.com/thinktwice13/dict"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on Github
        </FooterAnchor>
      </Footer>
    </StyledContainer>
  );
};

export default Conttainer;
