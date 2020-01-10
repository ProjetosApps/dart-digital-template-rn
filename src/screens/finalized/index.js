import React, {useState} from 'react';
import {FlatList} from 'react-native';

import {Container, Button, LabelDate, HeaderFilter} from './styles';
import {FinalizedItem, FilterHistoricBottomModal} from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../styles';

export default function Finalized() {
  const [modalVisible, setModalState] = useState(false);
  function setModal() {
    setModalState(!modalVisible);
  }
  return (
    <>
      <Container>
        <HeaderFilter>
          <Button onPress={setModal}>
            <Icon
              size={26}
              name={'filter-variant'}
              color={colors.secondaryTextColor}
            />
          </Button>
        </HeaderFilter>

        <LabelDate>Segunda - 12/07/2019</LabelDate>
        <FlatList
          data={[1]}
          renderItem={({item, index}) => (
            <>
              <FinalizedItem delivered={true} />
              <FinalizedItem style={{marginTop: 25}} delivered={false} />
            </>
          )}
        />
      </Container>
      <FilterHistoricBottomModal setModal={setModal} showModal={modalVisible} />
    </>
  );
}
