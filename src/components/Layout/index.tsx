import { ReactNode } from 'react';
import { Container, } from './styles';
import { Header } from './Header';

export function Layout({ children }: { children: ReactNode; }) {

  return (
    <>
      <Container>
        <Header />
        {children}
      </Container>
    </>
  );
}