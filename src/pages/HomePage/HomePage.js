import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/Card';
import Spinner from '../../components/Loader';
import Layout from '../../components/Layout';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import Pagination from '../../components/Pagination';
import { homeTitle, productsWrapper, buttonsWrapper } from './home.module.css';
import useProducts from '../../hooks/useProducts';
import useFilters from '../../hooks/useFilters';
import { getLoading } from '../../redux/selectors/selectors';

const HomePage = () => {
  const {
    products,
    page,
    pages,
    loadProducts,
    getPreviousPage,
    getNextPage,
  } = useProducts();

  const {
    perPage,
    prices,
    origin,
    handleChangePrice,
    handleChangePerPage,
    handleChangeOrigin,
    clearFilters,
  } = useFilters();

  const loading = useSelector(getLoading);

  const loadUserChosenProducts = () =>
    loadProducts(null, perPage, origin, prices[0], prices[1]);

  const handleChangePage = ({ target }) => {
    if (target.innerText === 'Previous') {
      getPreviousPage(page, perPage, origin, prices[0], prices[1]);
    } else {
      getNextPage(page, perPage, origin, prices[0], prices[1]);
    }
  };

  const optionsForControlPanel = {
    perPage,
    prices,
    handleChangePrice,
    origin,
    handleChangeOrigin,
    loadUserChosenProducts,
    clearFilters,
    handleChangePerPage,
  };
  return (
    <Layout>
      <ControlPanel options={optionsForControlPanel} />
      <h2 className={homeTitle}>Products List</h2>
      <div className={productsWrapper}>
        {products.map(({ id, name, price, origin: region, isEditable }) => (
          <ProductCard
            product={{ id, price, name, origin: region, isEditable }}
            key={id}
          />
        ))}
      </div>
      {loading && <Spinner />}
      <Pagination
        styles={buttonsWrapper}
        page={page}
        pages={pages}
        onChangePage={handleChangePage}
      />
    </Layout>
  );
};

export default HomePage;
