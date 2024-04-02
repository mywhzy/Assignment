import { styled } from 'styled-components';

export const NotFoundPage = () => {
  return (<Container>
    <Title>404</Title>
    <SubTitle>Page Not Found</SubTitle>
    <InfoText>요청하신 페이지를 찾을 수 없습니다. 입력하신 링크를 다시 한 번 확인해주세요.</InfoText>
  </Container>);
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px);
`;

const Title = styled.h1`
    color: lightcoral;
    font-size: 100px;
    margin: 0;
`;

const SubTitle = styled.h2`
    color: lightcoral;
    font-size: 30px;
    margin: 0;
`;

const InfoText = styled.h3`
    font-size: 15px;
    margin: 10px 0 5px 0;
    color: dimgray;
`;
