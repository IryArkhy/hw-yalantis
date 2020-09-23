import React, { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import OrderDetails from '../../components/OrderDetails';
import useOrders from '../../hooks/useOrders';
import { CustomBtn } from '../../components/Buttons';
import styles from './order-info.module.css';

const OrderPage = () => {
  const params = useParams();
  const history = useHistory();
  const { getOrderById, currentOrder } = useOrders();
  const id = params.orderId;

  const returnToPreviusPage = () => history.goBack();

  useEffect(
    useCallback(() => {
      getOrderById(id);
    }, [getOrderById, id]),
    [],
  );
  return (
    <Layout>
      <OrderDetails
        order={{ ...currentOrder }}
        onGoBack={returnToPreviusPage}
      />
      <div className={styles.controlersWraper}>
        <CustomBtn actionCallback={returnToPreviusPage} text="Go Back" />
      </div>
    </Layout>
  );
};

export default OrderPage;
