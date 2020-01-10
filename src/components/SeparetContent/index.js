import React from 'react';
import PropTypes from 'prop-types';

import {Line, Label, Container, BorderBottom} from './styles';

export default function SeparetContent({leftLabel, rightLabel, hasBorder}) {
  return (
    <>
      <Container>
        <Line>
          <Label>{leftLabel}</Label>
          <Label>{rightLabel}</Label>
        </Line>
      </Container>
      {hasBorder && <BorderBottom />}
    </>
  );
}

SeparetContent.propTypes = {
  hasBorder: PropTypes.bool,
  leftLabel: PropTypes.string.isRequired,
  rightLabel: PropTypes.string.isRequired,
};

SeparetContent.defaultProps = {
  hasBorder: true,
};
