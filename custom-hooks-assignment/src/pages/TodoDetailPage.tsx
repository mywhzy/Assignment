import { useTodo } from '../hooks/useTodo';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { ItemDetail } from '../components/ItemDetail';

export const TodoDetailPage = () => {
  const id = Number(useParams().id);
  const { data, isLoading, error } = useTodo(id);

  if (isLoading) return <h4>로딩 중...</h4>;
  if (!data || error) return <ErrorText>Error! id에 맞는 데이터를 불러올 수 없습니다.</ErrorText>;

  return (
    <Container>
      <ItemDetail userId={data.userId} id={data.id} title={data.title} completed={data?.completed} />
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const ErrorText = styled.h3`
    color: palevioletred;
    font-style: italic;
`;
