import Link from 'next/link';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import Sign from '../components/Sign';
import Loading from '../components/Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  margin-bottom: 5px;
  font-size: 30px;
`;

const SignButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  border: 2px solid rgb(91, 33, 182);
  border-radius: 0.5rem;
  color: rgb(76, 29, 149);
`;

function HomePage() {
  const { loading, data } = useQuery(GET_LATEST_SIGNS, {
    fetchPolicy: 'no-cache',
  });

  if (loading) return <Loading />;

  return (
    <Container>
      <Title>Real-World Next.js signbook</Title>
      <Link href="/new-sign">
        <SignButton>Add new sign</SignButton>
      </Link>
      <div>{data && data.sign.map((x) => <Sign key={x.uuid} {...x} />)}</div>
    </Container>
  );
}

export default HomePage;

const GET_LATEST_SIGNS = gql`
  query GetLatestSigns($limit: Int! = 10, $skip: Int! = 0) {
    sign(offset: $skip, limit: $limit, order_by: { created_at: desc }) {
      uuid
      created_at
      content
      nickname
      country
    }
  }
`;
