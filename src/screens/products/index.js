import React, {useEffect, useState, useCallback} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {ContainerDefault, ProductItem} from '../../components';
import {
  fetchProductRequest,
  updateProductStatusRequest,
} from '../../store/modules/product/actions';
import {colors} from '../../styles';
import {
  Button,
  Container,
  ContainerSearch,
  HeaderFilter,
  Input,
} from './styles';
import Strings from '../../util/strings';
import {Util} from '../../util/alert';

export default function Products({navigation}) {
  const [modalVisible, setModalState] = useState(false);

  const [modalDisableProductVisible, setModalDisableProductState] = useState(
    false,
  );

  const [currentFilterSelected, setFilter] = useState(0);

  const [isNeedFilter, setNeedFilter] = useState(false);

  const loading = useSelector(state => state.product.loading);

  const [currentPage, setCurrentPage] = useState(1);

  const [productList, setProductList] = useState([]);

  const [totalPage, setTotalPage] = useState(0);

  const [search, setSearch] = useState('');

  const [currentProductSelected, setCurrentProductSelected] = useState(0);

  const fetchProductResponse = useSelector(
    state => state.product.fetchProductResponse,
  );

  const updateProductResponse = useSelector(
    state => state.product.updateProductResponse,
  );

  const dispatch = useDispatch();

  const LIMIT_PAGE = 10;

  const INITIAL_PAGE = 1;

  useEffect(() => {
    dispatch(fetchProductRequest({page: currentPage, limit: LIMIT_PAGE}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fetchProductResponse) {
      if (fetchProductResponse.data) {
        fetchProductResponse.data.items_list.forEach(element => {
          setProductList(oldProductList => [...oldProductList, element]);
        });
        setTotalPage(fetchProductResponse.data.total_pages);
      }
    }
  }, [fetchProductResponse]);

  useEffect(() => {
    if (updateProductResponse) {
      if (!updateProductResponse.error) {
        let idProduct = updateProductResponse.data;
        let newProductList = productList.map(item =>
          item.product_id === idProduct
            ? {...item, status: !item.status}
            : item,
        );
        setProductList(() => newProductList);
      } else {
        showAlertErrorDisableProduct();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateProductResponse]);

  useEffect(() => {
    setNeedFilter(true);
  }, [currentFilterSelected]);

  function showModalDisableProduct(id) {
    if (!modalDisableProductVisible) {
      setCurrentProductSelected(id);
    }
    setModalDisableProductState(true);
  }

  function closeModalDisableProduct() {
    setModalDisableProductState(false);
  }

  function setModal() {
    const changeModalState = !modalVisible;
    setModalState(changeModalState);
    if (!changeModalState && isNeedFilter) {
      setNeedFilter(false);
      setCurrentPage(1);
      setProductList(() => []);
      dispatch(
        fetchProductRequest({
          page: INITIAL_PAGE,
          limit: LIMIT_PAGE,
          status: mapFilterStatus(),
          name: search,
        }),
      );
    }
  }

  function fecthMoreProducts() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    dispatch(
      fetchProductRequest({
        page: nextPage,
        limit: LIMIT_PAGE,
        status: mapFilterStatus(),
        name: search,
      }),
    );
  }

  function updateProductStatus() {
    dispatch(updateProductStatusRequest(currentProductSelected));
    closeModalDisableProduct();
  }

  function onInputSubmting() {
    setProductList(() => []);
    dispatch(
      fetchProductRequest({
        page: 1,
        limit: LIMIT_PAGE,
        status: mapFilterStatus(),
        name: search,
      }),
    );
  }

  function mapFilterStatus() {
    let status = null;
    switch (currentFilterSelected) {
      case 0:
        status = null;
        break;
      case 1:
        status = true;
        break;
      case 2:
        status = false;
        break;
      default:
        break;
    }
    return status;
  }

  const showAlertErrorDisableProduct = useCallback(() => {
    Util.Confirm(
      updateProductResponse.message,
      updateProductStatus,
      Strings.ERROR_OCCURENCE,
      null,
      Strings.WANT_TRY_AGAIN,
      Strings.CANCEL,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerDefault
      backButton
      navigation={navigation}
      label={
        mapFilterStatus() === true
          ? Strings.PRODUCT_SCREEN_HEADER_PRODUCT_ACTIVE
          : mapFilterStatus() === false
          ? Strings.PRODUCT_SCREEN_HEADER_PRODUCT_INACTIVE
          : Strings.PRODUCT_SCREEN_HEADER_ALL_PRODUCTS
      }
      setFilterRequestBottomModal={setModal}
      showFilterRequestBottomModal={modalVisible}
      setDisableProductBottomModal={closeModalDisableProduct}
      showProductBottomModal={modalDisableProductVisible}
      filterSelected={currentFilterSelected}
      setFilterSelected={setFilter}
      onClickDisableProductListener={updateProductStatus}>
      <Container>
        <HeaderFilter>
          <ContainerSearch>
            <Icon
              size={26}
              name={'magnify'}
              color={colors.secondaryTextColor}
            />
            <Input
              returnKeyType={'search'}
              onSubmitEditing={onInputSubmting}
              onChangeText={setSearch}
              placeholder={'Medicamento ou princípio ativo'}
            />
          </ContainerSearch>
          <Button onPress={setModal}>
            <Icon
              size={26}
              name={'filter-variant'}
              color={colors.secondaryTextColor}
            />
          </Button>
        </HeaderFilter>
        <FlatList
          // style={{flex: 1}}
          data={productList ? productList : []}
          ListHeaderComponent={() => <View style={{height: 20}} />}
          onEndReached={currentPage < totalPage ? fecthMoreProducts : null}
          // onEndReachedThreshold={0.5}
          renderItem={({item, index}) => (
            <ProductItem
              name={item.name}
              ative={item.status}
              presentation={item.presentation}
              manufacturer={item.manufacturer}
              onClickDisableProductListener={() => {
                showModalDisableProduct(item.product_id);
              }}
              type={item.type}
              activePrinciple={item.active_principle}
              price={item.price}
              idProduct={item.product_id}
            />
          )}
          ListFooterComponent={
            loading && (
              <View style={{marginTop: 20}}>
                <ActivityIndicator />
              </View>
            )
          }
        />
      </Container>
    </ContainerDefault>
  );
}
