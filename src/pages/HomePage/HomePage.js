import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/Card';
import Spinner from '../../components/Loader';
import Layout from '../../components/Layout';
import styles from './home.module.css';
import CustomBtn from '../../components/Buttons/CustomButton';
import { getAllProducts } from '../../redux/products/productsOperations';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import createProductParams from '../../helpers/requestHelpers';
import { DEFAULT_PRICE_RANGE, PROD_PER_PAGE } from '../../constants';

const HomePage = () => {
  // state
  const [perPage, setPerPage] = useState(PROD_PER_PAGE);
  const [prices, setPrices] = useState(DEFAULT_PRICE_RANGE);
  const [region, setOrigin] = useState('');

  // selectors
  const products = useSelector(state => state.products.products);
  const page = useSelector(state => state.products.page);
  const pages = useSelector(state => state.products.pages);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  // handlers
  const getPreviousPage = () => {
    if (page === 1) return;
    dispatch(
      getAllProducts(
        createProductParams(page - 1, perPage, region, prices[0], prices[1]),
      ),
    );
  };
  const getNextPage = () => {
    if (page === pages) return;
    dispatch(
      getAllProducts(
        createProductParams(page + 1, perPage, region, prices[0], prices[1]),
      ),
    );
  };

  const handleChangePrice = (event, newValue) => setPrices(newValue);
  const handleChangeOrigin = ({ target }) => setOrigin(target.value);

  const loadUserChosenProducts = () =>
    dispatch(
      getAllProducts(
        createProductParams(null, perPage, region, prices[0], prices[1]),
      ),
    );

  const optionsForControlPanel = {
    perPage,
    setPerPage,
    prices,
    handleChangePrice,
    origin: region,
    handleChangeOrigin,
    loadUserChosenProducts,
  };
  return (
    <Layout>
      <ControlPanel options={optionsForControlPanel} />
      <h2 className={styles.home_title}>Products List</h2>
      <div className={styles.products_wrapper}>
        {products.map(({ id, name, origin, price }) => (
          <ProductCard
            key={id}
            name={name}
            origin={origin}
            price={price}
            id={id}
          />
        ))}
      </div>
      {loading && <Spinner />}
      <div className={styles.buttons_wrapper}>
        <CustomBtn
          actionCallback={getPreviousPage}
          text="Previous"
          isDisabled={page === 1}
        />
        <p>
          Page: {page}/{pages}
        </p>
        <CustomBtn
          text="Next"
          isDisabled={page === pages}
          actionCallback={getNextPage}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
