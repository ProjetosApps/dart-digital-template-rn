import React from 'react';
import {Container, Label, BorderBottom} from './styles';
import {Stars} from '..';

export default function Avaliation() {
  return (
    <>
      <Container>
        <Label>Avaliação</Label>
        <Stars numberOfStars={4.3} />
      </Container>
      <BorderBottom />
    </>
  );
}
