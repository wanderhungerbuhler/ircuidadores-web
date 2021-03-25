import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@/styles/pages/InfoMessage/styles';

function InfoMessage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <Container>
      <img src="./icon-success.svg" width="150" />
      <h1>Opinião enviada com sucesso!</h1>
    </Container>
  )
}

export default InfoMessage;
