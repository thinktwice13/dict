import { List } from '../components';
import styled from 'styled-components';
import { Typography } from 'antd';

const TitleContainer = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <TitleContainer>
        <Typography.Title>Welcome to Dict!</Typography.Title>
      </TitleContainer>
      {/* <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p> */}
      <List />
    </>
  );
};

export default Home;
