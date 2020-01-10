import React from 'react';
import PropTypes from 'prop-types';

import {Container, Label, BorderBottom, Button, LabelButton} from './styles';
import {SeparetContent, Avaliation} from '..';

import {colors} from '../../styles';

export default function FinalizedItem({delivered, ...rest}) {
  return (
    <Container {...rest}>
      <SeparetContent
        hasBorder={false}
        rightLabel={'R$ 70,00'}
        leftLabel={'Código: 123.451'}
      />
      {delivered ? (
        <>
          <Label>Pedido Entregue</Label>
          <BorderBottom />
          <Avaliation />
        </>
      ) : (
        <>
          <Label style={{color: colors.primaryLight}}>Não Entregue</Label>
          <BorderBottom />
        </>
      )}
      <Button>
        <LabelButton>Detalhess</LabelButton>
      </Button>
    </Container>
  );
}

FinalizedItem.propTypes = {
  delivered: PropTypes.bool.isRequired,
};
