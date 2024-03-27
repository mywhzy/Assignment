import { styled } from 'styled-components';

type ItemDetailProps = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
export const ItemDetail = ({ userId, id, title, completed }: ItemDetailProps) => {
  return (
    <Container>
      <Title>Todo {id}.</Title>
      <InnerContainer>
        <SubTitle>UserId: </SubTitle>
        <Detail>{userId}</Detail>
      </InnerContainer>
      <InnerContainer>
        <SubTitle>IsCompleted: </SubTitle>
        <Detail>{completed ? 'O' : 'X'}</Detail>
      </InnerContainer>
      <InnerContainer>
        <SubTitle>Title: </SubTitle>
        <Detail>{title}</Detail>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    border: 2px dashed lightgray;
    border-radius: 10px;
    align-items: flex-start;
    gap: 5px;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
`;

const InnerContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    height: 30px;
`;

const Title = styled.h2`
    font-style: italic;
    margin: 0 0 10px 0;
    border-bottom: 2px solid cornflowerblue;
`;

const SubTitle = styled.h4`
`;

const Detail = styled.p``;
