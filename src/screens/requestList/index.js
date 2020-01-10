import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {ContainerDefault, RequestsContainer} from '../../components';
import {Container} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {orderListStatusRequest} from '../../store/modules/order/actions';

export default function RequestList({navigation}) {
  const {title} = navigation.state.params;
  const {type} = navigation.state.params;

  const dispatch = useDispatch();
  const orderList = useSelector(state => {
    return console.log(state.order.orderList);
  });
  useEffect(() => {
    dispatch(orderListStatusRequest(type));
  }, [dispatch, type]);

  return (
    <ContainerDefault navigation={navigation} backButton label={title}>
      <Container>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({item, index}) => <RequestsContainer />}
        />
      </Container>
    </ContainerDefault>
  );
}
