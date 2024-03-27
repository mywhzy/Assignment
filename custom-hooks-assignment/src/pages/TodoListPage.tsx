import { ListItem } from '../components/ListItem';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useTodos } from '../hooks/useTodos';

export const TodoListPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useTodos();

  if (!data || isLoading) return <h4>로딩 중...</h4>;
  if (error) return <h3>Error!</h3>;

  return (
    <Container>
      <Title>To Do List</Title>
      {data.map(todo => <ListItem id={todo.id} key={todo.id} onClick={() => navigate(`/todos/${todo.id}`)} />)}
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    font-style: italic;
    border-bottom: 5px double lightcoral;
`;
