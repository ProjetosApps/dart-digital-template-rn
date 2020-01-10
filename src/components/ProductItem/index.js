import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles';
import {
  Body,
  Button,
  Column,
  Container,
  Header,
  LabelButton,
  LabelDark,
  LabelLight,
  Line,
  Status,
} from './styles';
import Strings from '../../util/strings';

export default function ProductItem({
  name,
  presentation,
  manufacturer,
  type,
  activePrinciple,
  price,
  ative,
  idProduct,
  onClickDisableProductListener,
  ...rest
}) {
  const [showMore, setShowMoreState] = useState(false);

  function setShowMore() {
    setShowMoreState(!showMore);
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setShowMore}>
        <Header>
          <LabelDark style={{flex: 1}}>{name}</LabelDark>
          {ative ? (
            <Status color={colors.secondaryLight}>{Strings.ACTIVE}</Status>
          ) : (
            <Status color={colors.primaryLight}>{Strings.INACTIVE}</Status>
          )}

          <Icon
            size={20}
            color={colors.tertiaryTextColor}
            name={showMore ? 'chevron-up' : 'chevron-down'}
          />
        </Header>
      </TouchableWithoutFeedback>
      {showMore && (
        <View>
          <Body>
            <LabelLight>{Strings.PRESENTATION}</LabelLight>
            <LabelDark>{presentation}</LabelDark>
            <Line>
              <Column>
                <LabelLight>{Strings.LAB}</LabelLight>
                <LabelDark>{manufacturer}</LabelDark>
              </Column>
              <Column>
                <LabelLight>{Strings.TYPE}</LabelLight>
                <LabelDark>{type}</LabelDark>
              </Column>
            </Line>
            <Line>
              <Column>
                <LabelLight>
                  {Strings.PRODUCT_SCREEN_HEADER_LABEL_PRINCIPLE_ACTIVE}
                </LabelLight>
                <LabelDark>{activePrinciple}</LabelDark>
              </Column>
              <Column>
                <LabelLight>{Strings.VALUE}</LabelLight>
                <LabelDark>
                  {`R$ ${price
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                    .replace('.', ',')}`}
                </LabelDark>
              </Column>
            </Line>
          </Body>
          {ative && (
            <Button onPress={onClickDisableProductListener}>
              <LabelButton color={colors.primaryLight}>
                {Strings.DISABLE}
              </LabelButton>
            </Button>
          )}
        </View>
      )}
    </Container>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string,
  presentation: PropTypes.string,
  manufacturer: PropTypes.string,
  type: PropTypes.string,
  activePrinciple: PropTypes.string,
  price: PropTypes.number,
  ative: PropTypes.bool,
  idProduct: PropTypes.number,
};

ProductItem.defaultProps = {
  name: 'Alivium gotas 100mg',
  presentation: 'Apresentação',
  manufacturer: 'Laboratório',
  type: 'Tipe',
  activePrinciple: 'Principio ativo',
  price: 'Valor',
  ative: true,
  idProduct: 10,
};
