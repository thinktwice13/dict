import { ListContainer, RecentListItem } from '../components';
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

const data = [
  {
    description: 'Some description',
    title: 'Racing car sprays burning fuel into crowd.',
  },
  {
    description: 'Some description',
    title: 'Japanese princess to wed commoner.',
  },
  {
    description: 'Some description',
    title: 'Australian walks 100km after outback crash.',
  },
  {
    description: 'Some description',
    title: 'Man charged over missing wedding girl.',
  },
  {
    description: 'Some description',
    title: 'Los Angeles battles huge wildfires.',
  },
];

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
      <ListContainer
        data={data}
        renderItem={(item) => (
          <RecentListItem title={item.title} description={item.description} />
        )}
      />
    </>
  );
};

export default Home;
