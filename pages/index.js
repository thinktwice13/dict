import { List as RecentPhrasesList } from '../components';
import styled from 'styled-components';
import { Typography, Button, Input, Divider } from 'antd';
import Router from 'next/router';

const { Search } = Input;

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

      <Button
        block
        size="large"
        type="primary"
        onClick={() => Router.push('/new')}
      >
        New Phrase
      </Button>
      <Divider orientation="left">Recent Phrases</Divider>
      <Search
        placeholder="Search recent phrases"
        onSearch={(value) => console.log(value)}
        style={{ width: 200, marginBottom: '1rem' }}
      />
      <RecentPhrasesList />
    </>
  );
};

export default Home;
