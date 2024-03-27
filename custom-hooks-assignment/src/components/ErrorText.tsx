import { styled } from 'styled-components';
import { PropsWithChildren } from 'react';

export const ErrorText = ({ children }: PropsWithChildren) => {
  return (
    <Error>{children}</Error>
  );
};

const Error = styled.h3`
    color: palevioletred;
    font-style: italic;
`;
