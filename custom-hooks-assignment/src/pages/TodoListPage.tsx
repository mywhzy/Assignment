import { ListItem } from '../components/ListItem';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { range } from 'lodash';

export const TodoListPage = () => {
  const navigate = useNavigate();
  const indexes = range(1, 31);

  return (
    <Container>
      <Title>To Do List</Title>
      {indexes.map(id => <ListItem id={id} key={id} onClick={() => navigate(`/todos/${id}`)} />)}
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
