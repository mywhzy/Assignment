import { styled } from 'styled-components';

type ListItemProps = {
  id: number
  onClick?: () => void
}
export const ListItem = ({ id, onClick }: ListItemProps) => {
  return (
    <Container onClick={onClick}>Todo {id}.</Container>
  );
};

const Container = styled.button`
    all: unset;
    width: 500px;
    height: 30px;
    border-bottom: 2px dashed gray;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: cornflowerblue;
        font-style: italic;
        border-bottom: 2px dashed cornflowerblue;
    }
`;
